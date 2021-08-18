let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

const sentence = input + input
let countA = countAlpa(input, 'a')
let result = countA

function countAlpa (str, alpa) {
  let count = 0
  for (let s of str) if (s === alpa) count++
  return count
}

for (let i = 0; i < sentence.length - countA; i++) {
  const ls = sentence.substring(i, countA + i)
  const countB = countAlpa(ls, 'b')
  result = Math.min(result, countB)
}

console.log(result)
