const fs = require('fs')
let input =
  process.platform === 'linux'
    ? fs
        .readFileSync('/dev/stdin')
        .toString()
        .split('\n')
    : `7
1
10
100
1000
10000
100000
1000000`.split('\n')

const T = parseInt(input[0])

const Nums = input.slice(1).map(Number)

sol(T, Nums)

function sol (t, nums) {
  let m = 1000000009
  let maxNum = Math.max(...nums)
  let store = new Array(maxNum).fill(0)
  store[1] = 1
  store[2] = 2
  store[3] = 4
  for (let i = 4; i <= maxNum; i++) {
    store[i] = (store[i - 1] + store[i - 2] + store[i - 3]) % m
  }
  for (let j = 0; j < t; j++) {
    console.log(store[nums[j]])
  }
}

// 점화식만 잘 구하면 풀 수 있음
// s[i] = s[i-1]+s[i-2]+s[i-3]

// 주어진 매개변수를 다 사용해서 풀어야함
// nums 개수와 t가 다른 것도 테스트 케이스에서 체크함
// t, nums
