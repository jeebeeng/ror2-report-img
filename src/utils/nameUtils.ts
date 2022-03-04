import {
  Artifact,
  BodyName,
  Difficulty,
  EclipseLevel,
  Equipment,
  Item,
  Survivor
} from '../types'

const imagePath = process.env.PUBLIC_URL + '/images/'

export const artifactImg = (name: Artifact): string => {
  return imagePath + 'artifacts/Artifact_of_' + name + '.png'
}

export const bodyNameImg = (name: BodyName): string => {
  return imagePath + 'bodies/' + name.replaceAll(' ', '_') + '.png'
}

export const difficultyImg = (name: Difficulty): string => {
  return imagePath + 'difficulty/' + name + '.png'
}

export const eclipseImg = (level: EclipseLevel): string => {
  return imagePath + 'eclipse/Eclipse' + level + '.png'
}

export const equipmentImg = (name: Equipment): string => {
  return imagePath + 'equipment/' + name.replaceAll(' ', '_') + '.png'
}

export const itemImg = (name: Item): string => {
  return imagePath + 'items/' + name.replaceAll(' ', '_') + '.png'
}

export const survivorImg = (name: Survivor): string => {
  return imagePath + 'survivors/' + name.replaceAll(' ', '_') + '.png'
}
