import React, { useState, useRef, useCallback } from 'react'
import { RunReport } from './types'
import Report from './components/RunReport'
import FileInput from './components/FileInput'
import DownloadButton from './components/DownloadButton'
import CopyButton from './components/CopyButton'
import TitleBanner from './components/TitleBanner'
import IndexSelector from './components/IndexSelector'
import html2canvas from 'html2canvas'
import { copyImageToClipboard } from 'copy-image-clipboard'

const App: React.FC = () => {
  const [report, setReport] = useState<RunReport | null>(null)
  const [playerIndex, setPlayerIndex] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleCopy = useCallback(() => {
    if (ref.current === null) {
      return
    }

    html2canvas(ref.current)
      .then(canvas => {
        const link = canvas.toDataURL('image/png')
        copyImageToClipboard(link).catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [ref])

  const handleDownload = useCallback(() => {
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
    <div className="bg-white min-h-screen w-max-full">
      <TitleBanner />
      <div className="flex flex-col items-center">
        <FileInput
          setReport={setReport}
          setError={setError}
          setPlayerIndex={setPlayerIndex}
        />
        {report === null && (
          <div className="text-center text-gray-400 text-sm">
            <p>
              Run reports can be found in your Risk of Rain 2 game directory
            </p>
            <p>
              (Steam/steamapps/common/Risk of Rain 2/Risk of Rain
              2_Data/RunReports/History)
            </p>
          </div>
        )}
        {report !== null && report.playerInfos.length > 1 && (
          <IndexSelector
            len={report.playerInfos.length}
            playerIndex={playerIndex}
            setPlayerIndex={setPlayerIndex}
          />
        )}
        {report !== null && (
          <div className="flex flex-row">
            <CopyButton onClick={handleCopy} />
            <p className="mx-3"> | </p>
            <DownloadButton onClick={handleDownload} />
          </div>
        )}
        {error && <h2 className="text-red-600 font-bold">Invalid Report</h2>}
        {report !== null && !error ? (
          <div>
            <p className="text-center font-rubik mb-2 font-bold text-lg">
              {report.playerInfos[playerIndex].name}
            </p>
            <div className="bg-report p-1 pt-2 mb-3 rounded-xl">
              <div ref={ref}>
                <Report report={report!} playerIndex={playerIndex} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default App
