const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `4 4`.split('\n')

const [N, M] = input[0].split(' ').map(Number)

sol2(N, M)

// 재귀 순열
function sol (n, m) {
  function getCombinations (arr, combiCount) {
    if (combiCount === 1) return arr.map(v => [v])
    let result = []
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
      const combination = getCombinations(rest, combiCount - 1)
      const attached = combination.map(combi => [fixed, ...combi])
      result.push(...attached)
    })
    return result
  }

  const nums = Array.from(Array(n), (_, i) => i + 1)
  const result = getCombinations(nums, m).map(combi =>
    combi.map(String).join(' ')
  )
  result.map(str => console.log(str))
  return result
}

// 백트래킹 순열
function sol2 (n, m) {
  let visited = new Array(n)
  let result = []
  let permu = []
  getPermutations()
  console.log(result.join('\n'))
  return result.join('\n')

  function getPermutations () {
    if (permu.length === m) {
      result.push(permu.join(' '))
      return
    }

    for (let i = 1; i <= n; i++) {
      if (visited[i]) {
        continue
      }
      visited[i] = true
      permu.push(i)
      getPermutations()
      visited[i] = false
      permu.pop()
    }
  }
}
