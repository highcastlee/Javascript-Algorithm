const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `1 1 1 1 1
1 1 1 1 1
1 1 1 1 1
1 1 1 2 1
1 1 1 1 1`.split('\n')

const N = 5
let graph = input.map(list => list.split(' '))

const result = []

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    dfs(i, j, 0, '')
  }
}

function dfs (x, y, count, text) {
  if (count > 5) return text
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue
    const t = dfs(nx, ny, count + 1, text + graph[nx][ny])
    if (t && !result.includes(t)) result.push(t)
  }
}

console.log(result.length)
