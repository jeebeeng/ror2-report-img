import React, { useState, useRef, useCallback } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'
import { toPng } from 'html-to-image'

const App: React.FC = () => {
  const [report, setReport] = useState<RunReport | null>(null)
  const [error, setError] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true })
      .then(dataUrl => {
        const link = document.createElement('a')
        link.download = 'risk-report.png'
        link.href = dataUrl
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
      {report !== null && <button onClick={handleClick}>DOWNLOAD</button>}
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
