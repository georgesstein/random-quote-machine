export const getRandom = (max: number) => {
  return Math.floor(Math.random() * max)
}

export const chooseRandomColor = (colors: string[], exceptionColor: string) => {
  const idx = getRandom(colors.length)
  const nextColor = colors[idx]

  if (nextColor === exceptionColor) {
    return colors[idx === colors.length - 1 ? 0 : idx + 1]
  }

  return nextColor
}
