import * as types from '../types'
import { toEnum } from './enumUtils'

const INVALID_ERROR = 'Invalid Report'

const checkInvalid = (obj: any) => {
  Object.values(obj).forEach(value => {
    if (value === null || value === undefined) {
      throw new Error(INVALID_ERROR)
    }
  })
}

const getRuleBook = (ruleBook: string): types.RuleBook => {
  const rules = ruleBook.split(' ')
  const regexpDiff = /Difficulty\.(\w+)/
  const regexpArt = /Artifacts\.(\w+)\.On/
  const regexpEcl = /Eclipse([1-8])/

  let book: any = {}

  let difficulty: types.Difficulty | null = null
  let eclipseLevel: types.EclipseLevel | null = null
  let artifacts: types.Artifact[] = []
  for (const rule of rules) {
    let matchDiff = regexpDiff.exec(rule)
    if (matchDiff !== null) {
      const matchEcl = regexpEcl.exec(matchDiff![0])
      if (matchEcl === null) {
        difficulty = toEnum(matchDiff[1], types.Difficulty)!
      } else {
        eclipseLevel = parseInt(matchEcl![1]) as types.EclipseLevel
        difficulty = types.Difficulty.Eclipse
      }
    } else {
      const matchArt = regexpArt.exec(rule)
      if (matchArt !== null) {
        artifacts.push(toEnum(matchArt[1], types.Artifact)!)
      }
    }
  }

  book.difficulty = difficulty
  book.artifacts = artifacts
  if (eclipseLevel !== null) {
    book.eclipseLevel = eclipseLevel
  }

  if (difficulty === null) {
    throw new Error(INVALID_ERROR)
  }

  return book as types.RuleBook
}

const getStatSheet = (sheet: any): types.StatSheet => {
  let stats: types.StatSheet = {
    highestDamageDealt: !sheet.hasOwnProperty('highestDamageDealt')
      ? 0
      : sheet.highestDamageDealt,
    highestLevel: !sheet.hasOwnProperty('highestLevel')
      ? 0
      : sheet.highestLevel,
    totalDamageDealt: !sheet.hasOwnProperty('totalDamageDealt')
      ? 0
      : sheet.totalDamageDealt,
    totalDamageTaken: !sheet.hasOwnProperty('totalDamageTaken')
      ? 0
      : sheet.totalDamageTaken,
    totalDistanceTraveled: !sheet.hasOwnProperty('totalDistanceTraveled')
      ? 0
      : sheet.totalDistanceTraveled,
    totalDronesPurchased: !sheet.hasOwnProperty('totalDronesPurchased')
      ? 0
      : sheet.totalDronesPurchased,
    totalEliteKills: !sheet.hasOwnProperty('totalEliteKills')
      ? 0
      : sheet.totalEliteKills,
    totalGoldCollected: !sheet.hasOwnProperty('totalGoldCollected')
      ? 0
      : sheet.totalGoldCollected,
    totalGoldPurchases: !sheet.hasOwnProperty('totalGoldPurchases')
      ? 0
      : sheet.totalGoldPurchases,
    totalHealthHealed: !sheet.hasOwnProperty('totalHealthHealed')
      ? 0
      : sheet.totalHealthHealed,
    totalItemsCollected: !sheet.hasOwnProperty('totalItemsCollected')
      ? 0
      : sheet.totalItemsCollected,
    totalKills: !sheet.hasOwnProperty('totalKills') ? 0 : sheet.totalKills,
    totalLunarPurchases: !sheet.hasOwnProperty('totalLunarPurchases')
      ? 0
      : sheet.totalLunarPurchases,
    totalMinionDamageDealt: !sheet.hasOwnProperty('totalMinionDamageDealt')
      ? 0
      : sheet.totalMinionDamageDealt,
    totalMinionKills: !sheet.hasOwnProperty('totalMinionKills')
      ? 0
      : sheet.totalMinionKills,
    totalPurchases: !sheet.hasOwnProperty('totalPurchases')
      ? 0
      : sheet.totalPurchases,
    totalTurretsPurchased: !sheet.hasOwnProperty('totalTurretsPurchased')
      ? 0
      : sheet.totalTurretsPurchased
  }

  if (sheet.hasOwnProperty('highestInfiniteTowerWaveReached')) {
    stats.highestInfiniteTowerWaveReached =
      sheet.highestInfiniteTowerWaveReached
  } else {
    stats.highestStagesCompleted = sheet.hasOwnProperty(
      'highestStagesCompleted'
    )
      ? sheet.highestStagesCompleted
      : 1
  }

  checkInvalid(stats)

  return stats
}

const getItems = (itemOrder: string, itemStacks: any): types.ItemData[] => {
  return itemOrder.split(' ').map(item => {
    const stacks = itemStacks[item]
    if (!stacks) {
      throw new Error(INVALID_ERROR)
    }
    return {
      name: toEnum(item, types.Item)!,
      count: itemStacks[item]
    }
  })
}

const getPlayerInfos = (infos: any): types.PlayerInfo[] => {
  return infos.map((info: any) => {
    return getPlayerInfo(info.PlayerInfo)
  })
}

const getPlayerInfo = (info: any): types.PlayerInfo => {
  const statSheet = getStatSheet(info.statSheet.fields)
  const items = getItems(info.itemAcquisitionOrder, info.itemStacks)
  const player = {
    name: info.name,
    survivor: toEnum(info.bodyName, types.Survivor)!,
    equipment:
      info.equipment === types.Equipment.NoEquipment
        ? types.Equipment.NoEquipment
        : toEnum(info.equipment, types.Equipment)!,
    items,
    killerBodyName: toEnum(info.killerBodyName, types.BodyName)!,
    statSheet
  }

  checkInvalid(player)

  return player
}

export const createRunReport = (obj: any): types.RunReport => {
  const ruleBook = getRuleBook(obj.ruleBook)
  const playerInfo: types.PlayerInfo = getPlayerInfo(obj.playerInfos.PlayerInfo)

  let report: any = {
    version: obj.version,
    gameEnding: toEnum(obj.gameEnding, types.GameEnding),
    gameMode: toEnum(obj.gameModeName, types.GameMode),
    runTime: obj.runStopwatchValue,
    difficulty: ruleBook.difficulty,
    artifacts: ruleBook.artifacts,
    playerInfo
  }

  if (ruleBook.hasOwnProperty('eclipseLevel')) {
    report.eclipseLevel = ruleBook.eclipseLevel
  }

  checkInvalid(report)

  return report
}
