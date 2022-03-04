import React from 'react'
import { ItemData } from '../types'
import * as path from '../utils/nameUtils'

interface ItemIconProps {
  item: ItemData
}

const ItemIcon: React.FC<ItemIconProps> = ({ item }) => {
  return (
    <div className="w-12 relative m-0.5 text-white">
      <img src={path.itemImg(item.name)} alt={item.name} />
      <p className="absolute top-0 right-0">
        {item.count > 1 ? `x${item.count}` : null}
      </p>
    </div>
  )
}

export default ItemIcon
