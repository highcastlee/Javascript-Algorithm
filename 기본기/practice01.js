const nums = [22, 99, 88]

console.log(solution(nums))

function solution (arr) {
  const n = arr.length
  const result = []
  const real = Array.from({ length: n }, (_, i) => i + 1)
  for (let i of real) {
    if (!nums.includes(i)) result.push(i)
  }
  return result
}
