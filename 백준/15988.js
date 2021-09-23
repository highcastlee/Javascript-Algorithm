const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `3
4
7`.split('\n')

const T = parseInt(input[0])

const Nums = input.slice(1).map(Number)

sol(T, Nums)

function sol (t, nums) {
  const MAX = 1000000
  const m = 1000000009
  const maxNum = Math.max(...nums)
  const store = new Array(MAX)
  store[1] = 1
  store[2] = 2
  store[3] = 4
  const result = []
  for (let i = 4; i <= maxNum; i++) {
    store[i] = store[i - 1] + store[i - 2] + store[i - 3]
  }
  for (let num of nums) {
    result.push(store[num])
  }
  console.log(result)
  return result
}
