const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `4
1 7
2 6
3 8
4 9`.split('\n')

const getCombinations = function (arr, selectNumber) {
  const results = []
  if (selectNumber === 1) return arr.map(value => [value])
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combinations = getCombinations(rest, selectNumber - 1)
    const attached = combinations.map(combination => [fixed, ...combination])
    results.push(...attached)
  })
  return results
}

const N = parseInt(input.shift())
let initialList = []
for (let l of input) initialList.push(l.split(' ').map(v => parseInt(v)))

let minResult = 1000000001

for (let i = 0; i < N; i++) {
  const combination = getCombinations(initialList, i + 1)
  combination.forEach(foodSet => {
    let [sin, sum] = [1, 0]
    for (let j = 0; j < i + 1; j++) {
      sin *= foodSet[j][0]
      sum += foodSet[j][1]
    }
    const result = Math.abs(sin - sum)
    // console.log('foodSet : ', foodSet)
    minResult = Math.min(minResult, result)
  })
}

console.log(minResult)
