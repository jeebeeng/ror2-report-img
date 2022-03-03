export const formatRunTime = (runTime: number): string => {
  const minutes = Math.floor(runTime / 60)
  const seconds = Math.floor(runTime % 60)
  const minutesStr = zeroPad(minutes, 3 - String(minutes).length)
  const secondsStr = zeroPad(seconds, 3 - String(seconds).length)
  return minutesStr + ':' + secondsStr
}

const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0')
