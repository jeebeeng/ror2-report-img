import React from 'react'

interface ButtonProps {
  index: number
  playerIndex: number
  onClick: React.Dispatch<React.SetStateAction<number>>
}
interface IndexSelectorProps {
  len: number
  playerIndex: number
  setPlayerIndex: React.Dispatch<React.SetStateAction<number>>
}

const Button: React.FC<ButtonProps> = ({ index, playerIndex, onClick }) => {
  const style = {
    backgroundColor: playerIndex === index ? '#374151' : '',
    color: playerIndex === index ? '#ffffff' : ''
  }
  return (
    <button
      key={index}
      onClick={() => onClick(index)}
      className="font-rubik bg-slate-100 mx-4 mb-6 text-2xl w-12 h-12 rounded-lg transition ease-in-out delay-50 hover:bg-gray-700 hover:text-white"
      style={style}
    >
      {index + 1}
    </button>
  )
}
const IndexSelector: React.FC<IndexSelectorProps> = ({
  len,
  playerIndex,
  setPlayerIndex
}) => {
  return (
    <div className="flex flex-row">
      {[...Array(len)].map((_, i) => {
        return (
          <Button
            index={i}
            playerIndex={playerIndex}
            onClick={setPlayerIndex}
          />
        )
      })}
    </div>
  )
}

export default IndexSelector
