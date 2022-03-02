import React from 'react'
import { RunReport } from '../types'

interface IProps {
  report: RunReport
}

const Report: React.FC<IProps> = ({ report }) => {
  return (
    <div className="report">
      <h4>{report.playerInfo.name}</h4>
    </div>
  )
}

export default Report
