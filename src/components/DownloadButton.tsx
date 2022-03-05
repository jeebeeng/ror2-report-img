import React from 'react'
import { BsDownload } from 'react-icons/bs'

interface DownloadButtonProps {
  onClick: () => void
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold mb-8 mt-1 text-cyan-500 transition ease-in-out delay-50 hover:text-sky-900 underline"
    >
      <div className="flex flex-row">
        <BsDownload className="mt-1" />
        DOWNLOAD
      </div>
    </button>
  )
}

export default DownloadButton
