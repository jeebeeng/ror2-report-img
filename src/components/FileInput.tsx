import React from 'react'
import { RunReport } from '../types'
import { createRunReport } from '../utils/run-report'
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

      let jObj = parser.parse(xmlStr as string)
      setReport(createRunReport(jObj.RunReport)!)
    }
    reader.readAsText(e.target.files![0])
  }

  return <input type="file" onChange={showFile} />
}

export default FileInput
