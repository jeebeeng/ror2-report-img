import { Artifact, BodyName, Difficulty, EclipseLevel, Equipment, Item, Survivor } from "../types";

export const artifactImg = (name: Artifact): string => {
  return '../images/artifacts/Artifact_of_' + name + '.png'
}

export const bodyNameImg = (name: BodyName): string => {
  return '../images/bodies/' + name.replace(' ', '_') + '.png'
}

export const difficultyImg = (name: Difficulty): string => {
  return '../images/difficulty/' + name + '.png'
}

export const eclipseImg = (level: EclipseLevel): string => {
  return '../images/eclipse/Eclipse' + level + '.png'
}

export const equipmentImg = (name: Equipment): string => {
  return '../images/equipment/' + name.replace(' ', '_') + '.png'
}

export const itemImg = (name: Item): string => {
  return '../images/items/' + name.replace(' ', '_') + '.png'
}

export const survivorImg = (name: Survivor): string => {
  return '../images/survivors/' + name.replace(' ', '_') + '.png'
}
