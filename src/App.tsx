import React, { useState } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'
import './App.css'

function App() {
  const [report, setReport] = useState<RunReport | null>(null)

  return (
    <div>
      <FileInput setReport={setReport} />
      {report != null ? <Report report={report!} /> : null}
    </div>
  )
}

export default App
