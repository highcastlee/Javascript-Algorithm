const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `6
20 1 15 8 4 10`.split('\n')

const N = parseInt(input[0])
const nums = input[1].split(' ').map(Number)

sol(N, nums)

function sol (n, arr) {
  function getDiffAbs (a, b) {
    return Math.abs(a - b)
  }
  function getSum (nums) {
    return nums.reduce((acc, cur) => acc + cur, 0)
  }

  const examples = [...arr]
  examples.sort()
  const result = []
  for (let i = 0; i < parseInt(N / 2); i++) {
    result.push(getDiffAbs(examples[i], examples[i + 1]))
  }
}
