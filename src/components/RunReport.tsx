import React from 'react'
import { RunReport } from '../types'
import { formatRunTime } from '../utils/timeUtils'
import * as path from '../utils/nameUtils'
import * as types from '../types'

interface RunReportProps {
  report: RunReport
}

interface CharacterProps {
  survivor: types.Survivor
  killer: types.BodyName
}

interface ArtifactsProps {
  artifacts: types.Artifact[]
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

const Character: React.FC<CharacterProps> = ({ survivor, killer }) => {
  return (
    <div>
      <img src={path.survivorImg(survivor)} alt={survivor} />
      <img src={path.bodyNameImg(killer)} alt={killer} />
    </div>
  )
}

const Artifacts: React.FC<ArtifactsProps> = ({ artifacts }) => {
  return (
    <div>
      <h3>Artifacts</h3>
      {artifacts.map(artifact => {
        return <img src={path.artifactImg(artifact)} alt={artifact} />
      })}
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
    <div>
      <h3>Stats</h3>
      <p>{difficulty}</p>
      <p>Time Alive: {formatRunTime(runTime)}</p>
      <p>Kills: {stats.totalKills}</p>
      {gameMode === types.GameMode.InfiniteTowerRun ? (
        <p>Wave: {stats.highestInfiniteTowerWaveReached}</p>
      ) : (
        <p>Highest Stage: {stats.highestStagesCompleted}</p>
      )}
    </div>
  )
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <div>
      <h3>Items</h3>
      {items.map(item => {
        return <div></div>
      })}
    </div>
  )
}

const Report: React.FC<RunReportProps> = ({ report }) => {
  console.log(report.gameMode)
  console.log(types.GameMode.InfiniteTowerRun)
  console.log(report.gameMode === types.GameMode.InfiniteTowerRun)
  return (
    <div className="report">
      <Character
        survivor={report.playerInfo.survivor}
        killer={report.playerInfo.killerBodyName}
      />
      <Artifacts artifacts={report.artifacts} />
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
