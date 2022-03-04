import React, { useState } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'

function App() {
  const [report, setReport] = useState<RunReport | null>(null)
  const [error, setError] = useState<boolean>(false)

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-rubik tracking-wide my-4">RISK REPORT</h1>
      <FileInput setReport={setReport} setError={setError} />
      {error && <h2 className="text-red-600 font-bold">Invalid Report</h2>}
      {report !== null && !error ? <Report report={report!} /> : null}
    </div>
  )
}

export default App
