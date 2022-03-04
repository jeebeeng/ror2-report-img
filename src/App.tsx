import React, { useState, useRef, useCallback } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'
import html2canvas from 'html2canvas'

const App: React.FC = () => {
  const [report, setReport] = useState<RunReport | null>(null)
  const [error, setError] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    html2canvas(ref.current)
      .then(canvas => {
        const link = document.createElement('a')
        link.download = `risk_report_${new Date().toJSON().slice(0, 10)}`
        link.href = canvas.toDataURL()
        link.click()
      })
      .catch(err => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-rubik tracking-wide my-4">RISK REPORT</h1>
      <FileInput setReport={setReport} setError={setError} />
      {report !== null && (
        <button
          onClick={handleClick}
          className="font-bold mb-3 mt-2 text-cyan-500 transition ease-in-out delay-50 hover:text-sky-900 underline"
        >
          DOWNLOAD
        </button>
      )}
      {error && <h2 className="text-red-600 font-bold">Invalid Report</h2>}
      {report !== null && !error ? (
        <div ref={ref}>
          <Report report={report!} />
        </div>
      ) : null}
    </div>
  )
}

export default App
