let fs = require('fs')
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')

const n = input[0]
const positions = input[1].split(' ')

let leaves = Array.from({ length: n }, (_, i) => i) //[0,1,2,3,...n-1]
let result = Array.from({ length: n }, _ => 0)

positions.forEach((p, i) => {
  const pop = leaves.splice(p, 1)
  result[pop] = i + 1
})

console.log(result.join(' '))

// 작은 키부터 위치 값 보내기
// 결과 배열 중 키를 배정하고 남은 인덱스 남기기

// 왼쪽에 큰 사람 수 = [2,1,1,0]
// 최종 위치 [0,0,0,0]
// 배정 대기 인덱스 [0,1,2,3]
// 일 때,

// 작은 키부터 배정할 경우, positions에서 차례로 나온 숫자 p는
// 배정 대기 인덱스 배열에서 왼쪽에 남겨놔야할 index 개수를 의미한다.

// 즉, 키가 작은 순서대로 나오기 때문에
// 1) 배정 대기열 [0,1,2,3] 중 키가 1인 사람은 왼쪽에 2명이 있으므로, 배정 대기 인덱스에서 index=2인 위치를 차지한다.
// 2) 남은 대기열 [0,1,3] 중 키가 2인 사람은 왼쪽에 1명 있으므로, 대기 인덱스에서 index=1 위치를 차지한다.
// 3) 남은 대기 [0,3] 중 키가 3인 사람은 왼쪽에 1명 있으므로, 대기 인덱스에서 index=1위치를 차지한다.
// 4) 남은 대기 [0] 중 키가 4인 사람은 왼쪽에 0명 있으므로 대기 인덱스에서 index=0 가져간다.
