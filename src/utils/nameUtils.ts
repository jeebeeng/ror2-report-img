import {
  Artifact,
  BodyName,
  Difficulty,
  EclipseLevel,
  Equipment,
  Item,
  Survivor
} from '../types'
import { fileName } from './stringUtils'

const imagePath = process.env.PUBLIC_URL + '/images/'

export const artifactImg = (name: Artifact): string => {
  return imagePath + 'artifacts/Artifact_of_' + fileName(name) + '.png'
}

export const bodyNameImg = (name: BodyName): string => {
  return imagePath + 'bodies/' + fileName(name) + '.png'
}

export const difficultyImg = (name: Difficulty): string => {
  return imagePath + 'difficulty/' + fileName(name) + '.png'
}

export const eclipseImg = (level: EclipseLevel): string => {
  return imagePath + 'eclipse/Eclipse' + level + '.png'
}

export const equipmentImg = (name: Equipment): string => {
  return imagePath + 'equipment/' + fileName(name) + '.png'
}

export const itemImg = (name: Item): string => {
  return imagePath + 'items/' + fileName(name) + '.png'
}

export const survivorImg = (name: Survivor): string => {
  return imagePath + 'survivors/' + fileName(name) + '.png'
}
