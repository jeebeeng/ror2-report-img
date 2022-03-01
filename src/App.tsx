import React, { useState, useEffect } from 'react'
import './App.css'
import { XMLParser, XMLValidator } from 'fast-xml-parser'
import fs from 'fs'

function App() {
  const [contents, setContents] = useState()

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = e => {
      const text = e.target!.result
      console.log(text)
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
