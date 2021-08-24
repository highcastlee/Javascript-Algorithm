let fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')

let n = parseInt(input.shift())

let alPhas = input

function isPalindrome (str) {
  const len = str.length
  const mid = Math.floor(len / 2)
  if (len % 2 === 0) {
    const s1 = str.slice(0, mid)
    const s2 = str
      .slice(mid, len)
      .split('')
      .reverse()
      .join('')
    if (s1 === s2) return true
    else return false
  } else {
    const s1 = str.slice(0, mid)
    const s2 = str
      .slice(mid + 1, len)
      .split('')
      .reverse()
      .join('')
    if (s1 === s2) return true
    else return false
  }
}

function isPseudo (str) {
  const len = str.length
  let result = false
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      if (
        isPalindrome(
          str
            .split('')
            .splice(i, 1)
            .join('')
        ) ||
        isPalindrome(
          str
            .split('')
            .splice(len - 1 + i, 1)
            .join('')
        )
      ) {
        result = true
        break
      }
    }
  }
  return result
}

for (s of alPhas) {
  if (isPalindrome(s)) {
    console.log(0)
  } else if (isPseudo(s)) {
    console.log(1)
  } else {
    console.log(2)
  }
}
