const input1 = [
  ['가', '나', '콜', '사'],
  ['라', '기', '참', '세'],
  ['미', '모', '리', '움'],
  ['상', '지', '곤', '타']
]

const input2 = '콜로세움'

console.log(solution(input1, input2))

function solution (puzzle, word) {
  const N = puzzle.length
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]

  function dfs (x, y, count) {
    // 특정 word를 찾는 문제이므로, count를 세면서 각 자리 글자가 다르면 다 false
    if (puzzle[x][y] !== word[count]) return false
    // 글자 같고, 길이 full이면 true
    if (count === word.length - 1) return true

    puzzle[x][y] = '*'
    for (let i = 0; i < N; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue
      }
      // dfs true이면 계속 return true
      if (dfs(nx, ny, count + 1)) return true
    }
    puzzle[x][y] = word[count]
    return false
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
