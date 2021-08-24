// let fs = require('fs')
// let input = fs
//   .readFileSync('/dev/stdin')
//   .toString()
//   .split('\n')

// const n = input[0]
// const m = input[1]
// let lists = []
// for (let i = 2; i < input.length; i++) {
//   lists.push(input[i].split(' '))
// }

// let count = 0
// let bList = []
// for (let [a, b] of lists) {
//   if (bList.includes(b)) continue
//   if (parseInt(a) === 1) {
//     count += 1
//     bList.push(b)
//     continue
//   } else if (bList.includes(a)) {
//     count += 1
//     continue
//   }
// }
// console.log(count)

// a가 1일 때, count ++ 및 b 기록
// b와 연결된 사람 count ++ (b 리스트와 중복 시, 무시)
