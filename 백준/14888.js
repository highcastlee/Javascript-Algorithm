const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `5 8
100 99 60 80 30 20 10 89 99 100`.split('\n')

const [N, K] = input[0].split(' ').map(Number)
const velt = input[1].split(' ').map(Number)

sol(N, K, velt)

function sol (n, k, arr) {
  const conveyor = [...arr]
  const robot = Array(n).fill(false)
  let turnCount = 0

  while (true) {
    turnCount += 1
    let zeroCount = 0
    // 1번 회전
    conveyor.unshift(conveyor.pop())
    robot.pop()
    robot.unshift(false)
    robot[n - 1] = false
    // 2번 이동
    for (let i = n - 1; i >= 0; i--) {
      if (conveyor[i] > 0 && robot[i] === false && robot[i - 1]) {
        robot[i] = robot[i - 1]
        robot[i - 1] = false
        conveyor[i] -= 1
      }
      if (i === n - 1) robot[i] = false
    }

    // 3번
    if (conveyor[0] > 0) {
      robot[0] = true
      conveyor[0] -= 1
    }
    // 4번
    conveyor.forEach(v => {
      if (v === 0) zeroCount += 1
    })
    if (zeroCount >= k) break
  }

  console.log(turnCount)
  return turnCount
}
