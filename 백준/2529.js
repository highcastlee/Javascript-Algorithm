const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `9
> < < < > > > < <`.split('\n')

const N = parseInt(input[0])
const list = input[1].split(' ')
const nums = Array.from({ length: 10 }, (_, i) => i)

const resultArr = getPermutation(nums, N + 1).sort((a, b) => a - b)
console.log(resultArr[resultArr.length - 2])
console.log(resultArr[1])

function getPermutation (arr, selectNumber) {
  const results = []
  if (selectNumber === 1) return arr.map(value => [value])
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
    const permutation = getPermutation(rest, selectNumber - 1)
    const attached = permutation.map(permu => [fixed, ...permu])
    let before = attached
    if (selectNumber === N + 1) {
      checkArr = attached.filter(numArr => checkRelation(numArr))
      beforeArr = checkArr.map(numArr => parseInt(numArr.join('')))
      before = [Math.max(...beforeArr), Math.min(...beforeArr)]
    }
    results.push(...before)
  })
  return results
}

function checkRelation (numArr) {
  let corrected = true
  for (let i = 0; i < numArr.length - 1; i++) {
    if (list[i] === '<' && numArr[i] >= numArr[i + 1]) {
      corrected = false
      break
    } else if (list[i] === '>' && numArr[i] <= numArr[i + 1]) {
      corrected = false
      break
    }
  }
  return corrected
}
