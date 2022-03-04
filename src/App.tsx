import React, { useState } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'

function App() {
  const [report, setReport] = useState<RunReport | null>(null)

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-rubik tracking-wide">RISK REPORT</h1>
      <FileInput setReport={setReport} />
      {report != null ? <Report report={report!} /> : null}
    </div>
  )
}

export default App
