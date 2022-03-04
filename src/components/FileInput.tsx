import React, { useRef } from 'react'
import { RunReport } from '../types'
import { createRunReport } from '../utils/runReport'
import { XMLParser } from 'fast-xml-parser'

interface FileInputProps {
  setReport: React.Dispatch<React.SetStateAction<RunReport | null>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

const FileInput: React.FC<FileInputProps> = ({ setReport, setError }) => {
  const fileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileInput.current) fileInput.current.click()
  }

  const showFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = e => {
      try {
        const parser = new XMLParser()
        const xmlStr = e.target!.result
        const jObj = parser.parse(xmlStr as string)
        const report = createRunReport(jObj.RunReport)!
        setError(false)
        setReport(report)
      } catch (err) {
        setReport(null)
        setError(true)
      }
    }

    if (e.target.files![0]) {
      reader.readAsText(e.target.files![0])
    }
  }

  return (
    <div
      onClick={handleClick}
      className="transition ease-in-out delay-50 group mt-7 mb-4 border-md border-4 px-4 py-3 rounded-3xl text-sm font-bold font-mono cursor-pointer hover:bg-black"
    >
      <label className="transition ease-in-out delay-50 cursor-pointer group-hover:text-white">
        Choose Report
      </label>
      <input
        type="file"
        accept=".xml"
        onChange={showFile}
        id="upload-file"
        ref={fileInput}
        className="opacity-0 z-[-1] absolute"
      />
    </div>
  )
}

export default FileInput
