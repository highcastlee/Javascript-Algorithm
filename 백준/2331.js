let fs = require('fs')
// 띄어쓰기로 구분된 값들이 배열로 input에 저장됨
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')

function getPow (num, p) {
  const a = String(num)
  let sum = 0
  for (let i = 0; i < a.length; i++) sum += Math.pow(parseInt(a[i]), p)
  return sum
}

const A = parseInt(input[0])
const P = parseInt(input[1])

let result = [A]
let i = 0
let lastNum = 0
while (i >= 0) {
  const Dn = getPow(result[i], P)
  if (result.includes(Dn)) {
    lastNum = Dn
    break
  }
  result.push(Dn)
  i++
}
let answer = result.indexOf(lastNum)
console.log(answer)
