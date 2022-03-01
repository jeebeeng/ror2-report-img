import React, { useState } from 'react'
import './App.css'
import { XMLParser } from 'fast-xml-parser'
import * as types from './types'

function App() {
  const [report, setReport] = useState<types.RunReport | null>(null)

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = e => {
      const parser = new XMLParser()
      const xmlStr = e.target!.result
      let jObj = parser.parse(xmlStr as string)
      console.log(jObj)
    }
    reader.readAsText(e.target.files![0])
  }

  const createRunReport = (obj: any): types.RunReport | null => {
    return {
      version: obj.version,
      difficulty: types.Difficulty.Easy,
      eclipse: null,
      gameEnding: obj.gameEnding,
      gameMode: obj.gameModeName,
      runTime: obj.runStopWatchValue,
      playerInfos: [],
      artifacts: []
    }
  }

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default App
