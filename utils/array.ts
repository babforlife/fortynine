// impure to prevent deep copy to lose its type/methods
export function shuffleArray<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array as Array<T>
}
