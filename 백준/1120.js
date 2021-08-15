//한 줄 입력
let fs = require('fs')
// 띄어쓰기로 구분된 값들이 배열로 input에 저장됨
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')

const [A, B] = input
const [L1, L2] = [A.length, B.length]
let result = 50

for (let i = 0; i < L2 - L1 + 1; i++) {
  const sB = B.substring(i, L1 + i)
  let diff = 0
  for (let j = 0; j < L1; j++) {
    if (A[j] !== sB[j]) diff++
  }
  result = Math.min(result, diff)
}

console.log(result)
