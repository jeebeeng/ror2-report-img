import React from 'react'
import { MdContentCopy } from 'react-icons/md'

interface CopyButtonProps {
  onClick: () => void
}

const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold mb-5 text-cyan-500 transition ease-in-out delay-50 hover:text-sky-900 underline"
    >
      <div className="flex flex-row">
        <MdContentCopy className="mt-1" />
        COPY
      </div>
    </button>
  )
}

export default CopyButton
