function solution (array, commands) {
  const copyCommands = [...commands]
  let answer = []

  for (let arr of copyCommands) {
    let copyArr = [...array]
    let [i, j, k] = arr
    let smallArr = copyArr.slice(i - 1, j)
    smallArr.sort((a, b) => a - b)
    answer.push(smallArr[k - 1])
  }

  return answer
}
