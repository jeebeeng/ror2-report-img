import React from 'react'
import { RunReport } from '../types'
import { formatRunTime } from '../utils/timeUtils'
import ItemIcon from './ItemIcon'
import * as path from '../utils/nameUtils'
import * as types from '../types'

interface RunReportProps {
  report: RunReport
  playerIndex: number
}

interface ReportTitleProps {
  text: types.GameEnding | types.GameMode.InfiniteTowerRun
}

interface HeaderProps {
  text: string
}

interface CharacterProps {
  survivor: types.Survivor
  killer: types.BodyName | null
}

interface ArtifactsProps {
  artifacts: types.Artifact[]
}

interface DifficultyProps {
  difficulty: types.Difficulty
  eclipseLevel: types.EclipseLevel | null
}

interface StatLineProps {
  label: string
  value: string
}

interface StatsProps {
  runTime: number
  gameMode: types.GameMode
  difficulty: types.Difficulty
  eclipseLevel: types.EclipseLevel | null
  stats: types.StatSheet
}

interface ItemsProps {
  items: types.ItemData[]
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h3 className="text-center font-bold text-white mb-1">{text}</h3>
}

const Character: React.FC<CharacterProps> = ({ survivor, killer }) => {
  return (
    <div className="flex flex-row justify-between pb-1 pt-4">
      <div className="flex flex-row mt-2">
        <img
          className="h-16 mt-2"
          src={path.survivorImg(survivor)}
          alt={survivor}
        />
        <p className="text-white font-bold mt-12 ml-2">{survivor}</p>
      </div>
      {killer && (
        <div className="flex flex-col items-center pt-1">
          <p className="text-white text-sm">Killed By: </p>
          <p className="text-yellow-300 text-sm mb-1">{killer}</p>
          <img className="h-12" src={path.bodyNameImg(killer)} alt={killer} />
        </div>
      )}
    </div>
  )
}

const Artifacts: React.FC<ArtifactsProps> = ({ artifacts }) => {
  return (
    <div className="flex flex-col items-center mt-1">
      <Header text="Artifacts" />
      <div className="flex flex-row flex-wrap w-64 mt-1 justify-center">
        {artifacts.map(artifact => {
          return (
            <img
              className="h-8"
              key={artifact}
              src={path.artifactImg(artifact)}
              alt={artifact}
            />
          )
        })}
      </div>
    </div>
  )
}

const StatLine: React.FC<StatLineProps> = ({ label, value }) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-white">{label}:</p>
      <p className="text-yellow-300">{value}</p>
    </div>
  )
}

const Difficulty: React.FC<DifficultyProps> = ({
  difficulty,
  eclipseLevel
}) => {
  return (
    <div className="flex flex-row justify-between">
      <p className="mt-2 mb-1 text-white">
        {difficulty} {eclipseLevel ? eclipseLevel : ''}
      </p>
      {eclipseLevel ? (
        <img
          className="h-9"
          src={path.eclipseImg(eclipseLevel)}
          alt="eclipseLevel"
        />
      ) : (
        <img
          className="h-9"
          src={path.difficultyImg(difficulty)}
          alt={difficulty}
        />
      )}
    </div>
  )
}

const Stats: React.FC<StatsProps> = ({
  runTime,
  gameMode,
  difficulty,
  eclipseLevel,
  stats
}) => {
  return (
    <div className="mt-1">
      <Header text="Stats" />
      <Difficulty difficulty={difficulty} eclipseLevel={eclipseLevel} />
      <StatLine label="Time Alive" value={String(formatRunTime(runTime))} />
      {gameMode === types.GameMode.InfiniteTowerRun ? (
        <StatLine
          label="Wave"
          value={String(stats.highestInfiniteTowerWaveReached)}
        />
      ) : (
        <StatLine label="Stage" value={String(stats.highestStagesCompleted)} />
      )}
      <StatLine
        label="Kills"
        value={stats.totalKills.toLocaleString('en-US')}
      />
      <StatLine
        label="Highest DMG Dealt"
        value={stats.highestDamageDealt.toLocaleString('en-US')}
      />
    </div>
  )
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="mt-3 min-h-[145px]">
      <Header text="Items" />
      <div className="flex flex-row flex-wrap mt-1">
        {items.map(item => {
          return <ItemIcon item={item} key={item.name} />
        })}
      </div>
    </div>
  )
}

const ReportTitle: React.FC<ReportTitleProps> = ({ text }) => {
  const renderTitle = () => {
    if (text === types.GameMode.InfiniteTowerRun) {
      return <h1 className="text-pink-700 text-4xl">{text.toUpperCase()}</h1>
    }

    if (text === types.GameEnding.MainEnding) {
      return <h1 className="text-lime-500 text-5xl">{text.toUpperCase()}</h1>
    }

    if (text === types.GameEnding.PrismaticTrialEnding) {
      return <h1 className="text-lime-500 text-3xl">{text.toUpperCase()}</h1>
    }

    if (text === types.GameEnding.VoidEnding) {
      return <h1 className="text-purple-700 text-4xl">{'FATE UNKNOWN..'}</h1>
    }

    if (text === types.GameEnding.ObliterationEnding) {
      return <h1 className="text-sky-700 text-4xl">{'FATE UNKNOWN..'}</h1>
    }

    if (text === types.GameEnding.StandardLoss) {
      return <h1 className="text-red-800 text-5xl">{text.toUpperCase()}</h1>
    }

    return null
  }

  return (
    <div className="text-center font-bold mb-1 tracking-wide">
      {renderTitle()}
    </div>
  )
}

const Report: React.FC<RunReportProps> = ({ report, playerIndex }) => {
  return (
    <div className="font-roboto w-96 bg-report px-2 pt-1 pb-4">
      <ReportTitle
        text={
          report.gameMode === types.GameMode.InfiniteTowerRun
            ? report.gameMode
            : report.gameEnding
        }
      />
      <Character
        survivor={report.playerInfos[playerIndex].survivor}
        killer={
          report.playerInfos[playerIndex].killerBodyName !==
          types.BodyName.InvalidBody
            ? report.playerInfos[playerIndex].killerBodyName
            : null
        }
      />
      {report.artifacts.length > 0 ? (
        <Artifacts artifacts={report.artifacts} />
      ) : null}
      <Stats
        runTime={report.runTime}
        gameMode={report.gameMode}
        difficulty={report.difficulty}
        eclipseLevel={report.eclipseLevel ? report.eclipseLevel : null}
        stats={report.playerInfos[playerIndex].statSheet}
      />
      <Items items={report.playerInfos[playerIndex].items} />
    </div>
  )
}

export default Report
