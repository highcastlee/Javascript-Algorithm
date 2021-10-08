// n을 k진수로 변환
// 결과값에 0을 기준으로 나눠서 소수 개수 찾기

function solution (n, k) {
  function transNumber (n, k) {
    let m = [n % k]
    let a = parseInt(n / k)
    while (true) {
      m.unshift((a % k).toString())
      if (a / k < 1) break
      a = a / k >= 1 ? parseInt(a / k) : a
    }
    return m.join('')
  }
  function checkPrime (num) {
    let left = Array(num)
      .fill(0)
      .map((v, i) => i + 1)
    for (let i = 2; i < num; i++) {
      for (let j = 1; j <= parseInt(num / i); j++) {
        left = left.filter(v => v !== i * j)
      }
    }
    if (left[0] === 1 && left[1] === num) return true
    else return false
  }
  let answer = 0
  transNumber(n, k)
    .split('0')
    .forEach(v => {
      if (v && checkPrime(parseInt(v))) answer += 1
    })
  return answer
}
