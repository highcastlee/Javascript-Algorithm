const fs = require('fs')
const input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `55-50+40` //Test Case 바로 입력해서 확인

let arr1 = input.split('-')
let arr2 = arr1.map(str =>
  str.split('+').reduce((cur, num) => (cur += parseInt(num)), 0)
)
console.log(arr2.reduce((cur, num) => cur - parseInt(num)))
