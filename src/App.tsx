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
      console.log(createRunReport(jObj.RunReport))
    }
    reader.readAsText(e.target.files![0])
  }

  const toEnum = <E extends unknown>(str: string, e: E) => {
    for (let key in e) {
      if (str === key) {
        return e[key]
      }
    }
    return null
  }

  const getRuleBook = (ruleBook: string): types.RuleBook => {
    const rules = ruleBook.split(' ')
    const regexpDiff = /^Difficulty\.(\w+)$/g
    const regexpArt = /^Artifacts\.(\w+)\.On$/g
    const regexpEcl = /Eclipse([1-8])/g

    let difficulty = types.Difficulty.Easy
    let eclipseLevel: types.EclipseLevel = 0
    let artifacts: types.Artifact[] = []
    for (const rule of rules) {
      let matchDiff = regexpDiff.exec(rule)
      if (matchDiff != null) {
        let matchEcl = regexpEcl.exec(matchDiff![0])
        if (matchEcl == null) {
          eclipseLevel = 0
          difficulty = toEnum(matchDiff[1], types.Difficulty)!
          console.log(difficulty === types.Difficulty.Easy)
        } else {
          eclipseLevel = parseInt(matchEcl![1]) as types.EclipseLevel
          difficulty = types.Difficulty.Eclipse
        }
      } else {
        let matchArt = regexpArt.exec(rule)
        if (matchArt != null) {
          artifacts.push(toEnum(matchArt[1], types.Artifact)!)
        }
      }
    }

    return {
      difficulty,
      eclipseLevel,
      artifacts
    }
  }

  const createRunReport = (obj: any): types.RunReport | null => {
    try {
      const ruleBook = getRuleBook(obj.ruleBook)
      return {
        version: obj.version,
        gameEnding: obj.gameEnding,
        gameMode: obj.gameModeName,
        runTime: obj.runStopwatchValue,
        difficulty: ruleBook.difficulty,
        eclipseLevel: ruleBook.eclipseLevel,
        artifacts: ruleBook.artifacts,
        playerInfos: []
      }
    } catch (err) {
      console.log(err)
      return null
    }
  }

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  )
}

export default App
