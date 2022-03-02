export const toEnum = <E extends unknown>(str: string, e: E) => {
  for (let key in e) {
    if (str === key) {
      return e[key]
    }
  }
  return null
}
