import React from 'react'
import { RunReport } from '../types'
import { createRunReport } from '../utils/runReport'
import { XMLParser } from 'fast-xml-parser'

interface FileInputProps {
  setReport: React.Dispatch<React.SetStateAction<RunReport | null>>
}

const FileInput: React.FC<FileInputProps> = ({ setReport }) => {
  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = e => {
      const parser = new XMLParser()
      const xmlStr = e.target!.result
      const jObj = parser.parse(xmlStr as string)
      const report = createRunReport(jObj.RunReport)!
      console.log(jObj)
      console.log(report)
      setReport(report)
    }

    if (e.target.files![0]) {
      reader.readAsText(e.target.files![0])
    }
  }

  return (
    <input
      type="file"
      accept=".xml"
      onChange={showFile}
      className="rounded-lg"
    />
  )
}

export default FileInput
