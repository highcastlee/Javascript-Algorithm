const condition = [
  [4, 5, 6, 7, 8],
  [11, 12, 13, 14, 15],
  [15, 16, 19, 33, 35],
  [6, 8, 20, 22, 88],
  [8, 55, 66, 77, 100]
]
const n = 11

console.log(solution(condition, n))

function solution (arr, num) {
  const result = []
  arr.map(innerArr => innerArr.map(i => result.push(i)))
  result.sort((a, b) => a - b)
  return result[num - 1]
}
