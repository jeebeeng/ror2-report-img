import React from 'react'
import { RunReport } from '../types'
import { formatRunTime } from '../utils/timeUtils'
import * as path from '../utils/nameUtils'

interface IProps {
  report: RunReport
}

const Report: React.FC<IProps> = ({ report }) => {
  console.log(path.survivorImg(report.playerInfo.survivor))
  return (
    <div className="report">
      <h4>{report.playerInfo.name}</h4>
      <img
        src={path.survivorImg(report.playerInfo.survivor)}
        alt={report.playerInfo.survivor}
      />
      <p>Time Alive: {formatRunTime(report.runTime)}</p>
      <p>Kills: {report.playerInfo.statSheet.totalKills}</p>
      <p>Highest Level: {report.playerInfo.statSheet.highestLevel}</p>
    </div>
  )
}

export default Report
