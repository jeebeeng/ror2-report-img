export const artifactImg = (name: string): string => {
  return '../images/artifacts/Artifact_of_' + name + '.png'
}

export const bodyNameImg = (name: string): string => {
  return '../images/bodies/' + name.replace(' ', '_') + '.png'
}

export const difficultyImg = (name: string): string => {
  return '../images/difficulty/' + name + '.png'
}

export const eclipseImg = (level: string): string => {
  return '../images/eclipse/Eclipse' + level + '.png'
}

export const equipmentImg = (name: string): string => {
  return '../images/equipment/' + name.replace(' ', '_') + '.png'
}

export const itemImg = (name: string): string => {
  return '../images/items/' + name.replace(' ', '_') + '.png'
}

export const survivorImg = (name: string): string => {
  return '../images/survivors/' + name.replace(' ', '_') + '.png'
}
