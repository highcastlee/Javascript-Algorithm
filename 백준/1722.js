const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `4
2 1 3 2 4`.split('\n')

const N = parseInt(input[0])
const secondLine = input[1].split(' ').map(Number)
const problemNum = secondLine[0]
let K
if (problemNum === 1) K = secondLine[1]
else K = secondLine.slice(1)

sol3(N, K)

function sol3 (n, k) {
  //github.com/Earth-K/ProblemSolving/blob/master/BOJ/BOJ/boj_1722.cpp

  https: function factorial (n) {
    let result = 1
    for (let i = 2; i <= n; i++) result *= i
    return result
  }
}

// ================================================================

// function sol (n, k) {
//   const initialNums = Array.from({ length: n }, (_, i) => i + 1)
//   const permutations = getPermutations(initialNums, n)
//   console.log(permutations)
//   if (typeof k === 'number') {
//     console.log(permutations[k - 1].map(String).join(' '))
//   } else {
//     let findIdx
//     permutations.forEach((permu, i) => {
//       if (JSON.stringify(permu) == JSON.stringify(k)) findIdx = i + 1
//     })
//     console.log(findIdx)
//   }

//   function getPermutations (arr, n) {
//     if (n <= 1) return arr.map(v => [v])
//     const result = []
//     arr.forEach((fixed, index, origin) => {
//       const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
//       const combinations = getPermutations(rest, n - 1)
//       const attach = combinations.map(combi => [fixed, ...combi])
//       result.push(...attach)
//     })
//     return result
//   }
// }

// ================================================================

// function sol2 (n, k) {
//   let rest = []
//   let result = []
//   let visited = new Array(n)
//   let count = 0

//   const getIndexOfPermutation = () => {
//     if (count >= k) return
//     if (rest.length == n) {
//       count += 1
//       if (count === k) result.push(rest.join(' '))
//       return
//     }
//     for (let i = 1; i <= n; ++i) {
//       if (visited[i]) {
//         continue
//       }
//       visited[i] = true
//       rest.push(i)
//       getIndexOfPermutation()
//       visited[i] = false
//       rest.pop()
//     }
//   }

//   const getPermutationOfK = () => {
//     if (rest.length == n) {
//       count += 1
//       if (JSON.stringify(rest) == JSON.stringify(k)) {
//         result.push(count)
//       }
//       return
//     }
//     for (let i = 1; i <= n; ++i) {
//       if (visited[i]) {
//         continue
//       }
//       visited[i] = true
//       rest.push(i)
//       getPermutationOfK()
//       visited[i] = false
//       rest.pop()
//     }
//   }

//   if (typeof k === 'number') getIndexOfPermutation()
//   else getPermutationOfK()

//   console.log(result[0])
// }

// ================================================================
