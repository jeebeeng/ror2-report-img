import React from 'react'
import { RunReport } from '../types'
import { formatRunTime } from '../utils/timeUtils'

interface IProps {
  report: RunReport
}

const Report: React.FC<IProps> = ({ report }) => {
  return (
    <div className="report">
      <h4>{report.playerInfo.name}</h4>
      <p>Time Alive: {formatRunTime(report.runTime)}</p>
      <p>Kills: {report.playerInfo.statSheet.totalKills}</p>
      <p>Highest Level: {report.playerInfo.statSheet.highestLevel}</p>
    </div>
  )
}

export default Report
