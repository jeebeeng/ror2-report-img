import React, { useState } from 'react'
import { XMLParser } from 'fast-xml-parser'
import { createRunReport } from './utils/run-report'
import { RunReport } from './types'
import './App.css'

function App() {
  const [report, setReport] = useState<RunReport | null>(null)

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

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default App
