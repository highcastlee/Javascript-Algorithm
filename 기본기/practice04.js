const str = 'yeongmin'

console.log(solution(str))

function solution (s) {
  let store = []
  let maxLen = 0
  for (let i = 0; i < s.length; i++) {
    if (store.includes(s[i])) {
      let restartIdx = store.indexOf(s[i]) + 1
      maxLen = Math.max(maxLen, store.length)
      store = store.slice(restartIdx)
    }
    store.push(s[i])
  }
  return Math.max(maxLen, store.length)
}
