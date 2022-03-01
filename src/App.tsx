import React, { useState } from 'react'
import './App.css'
import { XMLParser } from 'fast-xml-parser'

interface RunReport {
  version: number
  difficuly: string
  gameEnding: string
  gameMode: string
  runTime: number
  playerInfos: PlayerInfo[]
  artifacts: string[]
}

interface PlayerInfo {
  name: string
  bodyName: string
  equipment: string
  items: Item[]
  finalMessageToken: string
  killerBodyName: string
  statSheet: StatSheet
}

interface Item {
  name: string
  count: number
}

interface StatSheet {
  highestDamageDealt: number
  highestLevel: number
  highestStagesCompleted: number
  totalDamageDealt: number
  totalDamageTaken: number
  totalDistanceTravelled: number
  totalDronesPurchased: number
  totalEliteKills: number
  totalGoldCollected: number
  totalGoldPurchases: number
  totalHealthHealed: number
  totalItemsCollected: number
  totalKills: number
  totalLunarPurchases: number
  totalMinionDamageDealth: number
  totalMinionKills: number
  totalPurchases: number
  totalTurretPurchased: number
}

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
