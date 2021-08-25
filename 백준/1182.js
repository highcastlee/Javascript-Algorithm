const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `5 0
-7 -3 -2 5 8`.split('\n')

// 백트래킹
// const [N, S] = input[0].split(' ').map(Number)
// input = input[1].split(' ').map(Number)
// let count = 0

// const pick = []
// function dfs (L) {
//   if (L === N) {
//     const sum = pick.reduce((sum, val) => sum + val, 0)
//     if (sum === S) count++
//     return
//   }
//   pick.push(input[L])
//   dfs(L + 1)
//   pick.pop()
//   dfs(L + 1)
// }
// dfs(0)

// if (S === 0) count-- // pick이 아무것도 선택하지 않았을 때 sum=0이므로 정답보다 1이 더 크므로, 감소시켜준다.
// console.log(count)

const [N, S] = input[0].split(' ').map(Number)

const initialList = input[1].split(' ').map(Number)
let count = 0

function getCombinations (arr, combiCount) {
  if (combiCount === 1) return arr.map(v => [v])
  let result = []
  arr.forEach((fixed, index, origin) => {
    // index 이전 값들을 모두 빼고 진행하면 조합(값 중복x)
    // index 위치의 값만 빼고 나머지 포함은 순열(fixed 때문에 순서만 바뀜)
    const rest = origin.slice(index + 1)
    const combination = getCombinations(rest, combiCount - 1)
    const attached = combination.map(combi => [fixed, ...combi])
    result.push(...attached)
  })
  return result
}

for (let i = 0; i < N; i++) {
  const combinations = getCombinations(initialList, i + 1)
  console.log(combinations)
  combinations.forEach(combi => {
    if (combi.reduce((acc, cur) => acc + cur) === S) {
      count += 1
    }
  })
}

console.log(count)
