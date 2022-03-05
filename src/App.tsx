import React, { useState, useRef, useCallback } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'
import html2canvas from 'html2canvas'
import { BsDownload } from 'react-icons/bs'

const App: React.FC = () => {
  const [report, setReport] = useState<RunReport | null>(null)
  const [playerIndex, setPlayerIndex] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    html2canvas(ref.current)
      .then(canvas => {
        const link = document.createElement('a')
        link.download = `risk_report.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
      })
      .catch(err => {
        console.log(err)
      })
  }, [ref])

  return (
    <div className="bg-white min-h-screen">
      <div className="grid place-items-center content-center bg-topBanner w-full text-center h-28">
        <h1 className="text-7xl font-rubik tracking-wide text-white">
          RISK REPORT
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <FileInput setReport={setReport} setError={setError} />
        {report !== null && (
          <button
            onClick={handleClick}
            className="font-bold mb-8 mt-1 text-cyan-500 transition ease-in-out delay-50 hover:text-sky-900 underline"
          >
            <div className="flex flex-row">
              <BsDownload className="mt-1" />
              DOWNLOAD
            </div>{' '}
          </button>
        )}
        {error && <h2 className="text-red-600 font-bold">Invalid Report</h2>}
        {report !== null && !error ? (
          <div className="bg-report p-1 pt-2 mb-3 rounded-xl">
            <div ref={ref}>
              <Report report={report!} playerIndex={playerIndex} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
