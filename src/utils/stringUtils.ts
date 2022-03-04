export const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0')

export const fileName = (name: string) => {
  const chars = ['.', "'", '(', ')', ',', '']

  let file = name.replaceAll(' ', '_')

  chars.forEach(char => {
    file = file.replaceAll(char, '')
  })

  return file
}
