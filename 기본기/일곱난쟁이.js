function sortFunc (a, b) {
  return a - b
}

function solution (arr) {
  const copyArr = [...arr]
  let sum = 0
  for (let value of copyArr) {
    sum += value
  }
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (copyArr[i] === copyArr[j]) continue
      if (sum - (copyArr[i] + copyArr[j]) === 100) {
        copyArr.splice(j, 1)
        copyArr.splice(i, 1)
        return copyArr.sort(sortFunc)
      }
    }
  }
}
