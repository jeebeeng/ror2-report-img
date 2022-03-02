import React, { useState } from 'react'
import './App.css'
import { XMLParser } from 'fast-xml-parser'
import * as types from './types'

function App() {
  const [report, setReport] = useState<types.RunReport | null>(null)

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = e => {
      const parser = new XMLParser()
      const xmlStr = e.target!.result
      let jObj = parser.parse(xmlStr as string)
      console.log(jObj)
      console.log(createRunReport(jObj.RunReport))
    }
    reader.readAsText(e.target.files![0])
  }

  const toEnum = <E extends unknown>(str: string, e: E) => {
    for (let key in e) {
      if (str === key) {
        return e[key]
      }
    }
    return null
  }

  const getRuleBook = (ruleBook: string): types.RuleBook => {
    const rules = ruleBook.split(' ')
    const regexpDiff = /^Difficulty\.(\w+)$/g
    const regexpArt = /^Artifacts\.(\w+)\.On$/g
    const regexpEcl = /Eclipse([1-8])/g

    let difficulty = types.Difficulty.Easy
    let eclipseLevel: types.EclipseLevel = 0
    let artifacts: types.Artifact[] = []
    for (const rule of rules) {
      let matchDiff = regexpDiff.exec(rule)
      if (matchDiff != null) {
        let matchEcl = regexpEcl.exec(matchDiff![0])
        if (matchEcl == null) {
          eclipseLevel = 0
          difficulty = toEnum(matchDiff[1], types.Difficulty)!
        } else {
          eclipseLevel = parseInt(matchEcl![1]) as types.EclipseLevel
          difficulty = types.Difficulty.Eclipse
        }
      } else {
        let matchArt = regexpArt.exec(rule)
        if (matchArt != null) {
          artifacts.push(toEnum(matchArt[1], types.Artifact)!)
        }
      }
    }

    return {
      difficulty,
      eclipseLevel,
      artifacts
    }
  }

  const getStatSheet = (sheet: any): types.StatSheet => {
    return {
      highestDamageDealt: !sheet.hasOwnProperty('highestDamageDealt')
        ? 0
        : sheet.highestDamageDealt,
      highestLevel: !sheet.hasOwnProperty('highestLevel')
        ? 0
        : sheet.highestLevel,
      highestStagesCompleted: !sheet.hasOwnProperty('highestStagesCompleted')
        ? 0
        : sheet.highestStagesCompleted,
      totalDamageDealt: !sheet.hasOwnProperty('totalDamageDealt')
        ? 0
        : sheet.totalDamageDealt,
      totalDamageTaken: !sheet.hasOwnProperty('totalDamageTaken')
        ? 0
        : sheet.totalDamageTaken,
      totalDistanceTravelled: !sheet.hasOwnProperty('totalDistanceTravelled')
        ? 0
        : sheet.totalDistanceTravelled,
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
      totalTurretPurchased: !sheet.hasOwnProperty('totalTurretPurchased')
        ? 0
        : sheet.totalTurretPurchased
    }
  }

  const getItems = (itemOrder: string, itemStacks: any): types.ItemData[] => {
    return itemOrder.split(' ').map(item => {
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

    return {
      name: info.name,
      survivor: toEnum(info.bodyName, types.BodyName)!,
      equipment: toEnum(info.equipment, types.Equipment)!,
      items,
      killerBodyName: toEnum(info.killerBodyName, types.BodyName)!,
      statSheet
    }
  }

  const createRunReport = (obj: any): types.RunReport | null => {
    try {
      const ruleBook = getRuleBook(obj.ruleBook)
      const playerInfo: types.PlayerInfo = getPlayerInfo(
        obj.playerInfos.PlayerInfo
      )

      return {
        version: obj.version,
        gameEnding: obj.gameEnding,
        gameMode: obj.gameModeName,
        runTime: obj.runStopwatchValue,
        difficulty: ruleBook.difficulty,
        eclipseLevel: ruleBook.eclipseLevel,
        artifacts: ruleBook.artifacts,
        playerInfo
      }
    } catch (err) {
      console.log(err)
      return null
    }
  }

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default App
