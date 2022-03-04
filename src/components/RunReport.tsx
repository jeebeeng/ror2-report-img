import React from 'react'
import { RunReport } from '../types'
import { formatRunTime } from '../utils/timeUtils'
import ItemIcon from './ItemIcon'
import * as path from '../utils/nameUtils'
import * as types from '../types'

interface RunReportProps {
  report: RunReport
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

interface StatLineProps {
  label: string
  value: string
}

interface StatsProps {
  runTime: number
  gameMode: types.GameMode
  difficulty: types.Difficulty
  stats: types.StatSheet
}

interface ItemsProps {
  items: types.ItemData[]
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h3 className="text-center font-bold text-white">{text}</h3>
}

const Character: React.FC<CharacterProps> = ({ survivor, killer }) => {
  return (
    <div className="flex flex-row justify-between">
      <img src={path.survivorImg(survivor)} alt={survivor} />
      {killer && <img src={path.bodyNameImg(killer)} alt={killer} />}
    </div>
  )
}

const Artifacts: React.FC<ArtifactsProps> = ({ artifacts }) => {
  return (
    <div className="flex flex-col items-center mt-3">
      <Header text="Artifacts" />
      <div className="flex flex-row grid-cols-4">
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
      <p className="text-yellow-200">{value}</p>
    </div>
  )
}

const Stats: React.FC<StatsProps> = ({
  runTime,
  gameMode,
  difficulty,
  stats
}) => {
  return (
    <div className="mt-3">
      <Header text="Stats" />
      <div className="flex flex-row justify-between pb-2">
        <p className="mt-4 text-white">{difficulty}</p>
        <img
          className="h-10"
          src={path.difficultyImg(difficulty)}
          alt={difficulty}
        />
      </div>
      <StatLine label="Time Alive" value={String(formatRunTime(runTime))} />
      {gameMode === types.GameMode.InfiniteTowerRun ? (
        <StatLine
          label="Wave:"
          value={String(stats.highestInfiniteTowerWaveReached)}
        />
      ) : (
        <StatLine
          label="Highest Stage"
          value={String(stats.highestStagesCompleted)}
        />
      )}
      <StatLine label="Kills" value={String(stats.totalKills)} />
    </div>
  )
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div className="mt-3">
      <Header text="Items" />
      <div className="flex flex-wrap content-evenly">
        {items.map(item => {
          return <ItemIcon item={item} key={item.name} />
        })}
      </div>
    </div>
  )
}

const Report: React.FC<RunReportProps> = ({ report }) => {
  return (
    <div className="w-96 bg-slate-800 px-2 pt-2 pb-3 my-2 rounded-md">
      <Character
        survivor={report.playerInfo.survivor}
        killer={
          report.playerInfo.killerBodyName !== types.BodyName.InvalidBody
            ? report.playerInfo.killerBodyName
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
        stats={report.playerInfo.statSheet}
      />
      <Items items={report.playerInfo.items} />
    </div>
  )
}

export default Report
