let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

console.log(solution(input))

function solution (input) {
  let stack = []
  let result = 0
  for (let s of input) {
    let before = 0
    if (s === ')') {
      while (stack.length !== 0) {
        let top = stack.pop()
        if (top === '(') {
          if (before === 0) stack.push(2)
          else stack.push(2 * before)
          break
        } else if (top === '[') {
          return 0
        } else before += parseInt(top)
      }
    } else if (s === ']') {
      while (stack.length !== 0) {
        let top = stack.pop()
        if (top === '[') {
          if (before === 0) stack.push(3)
          else stack.push(3 * before)
          break
        } else if (top === '(') {
          return 0
        } else before += parseInt(top)
      }
    } else {
      stack.push(s)
    }
  }

  for (let i of stack) {
    if (['(', '['].includes(i)) {
      return 0
    } else {
      result += i
    }
  }
  return result
}

// 핵심 : stack에서 완성된 괄호를 숫자로 변경하는게 아이디어.

// ), ] 나타날 때 숫자 변환 실행
// - 중요 조건: ) 나타났을 때, ( 보다 [ 가 더 가까이 있으면 올바른 괄호열이 아님. 종료.
//          (반대도 마찬가지)
// - before는 해당 여는 괄호가 나오기 전까지 stack 값들의 합
//   다음 닫는 괄호 찾을 때는 before 초기화된 상태 (stack에 숫자로 들어갔으니)
// - 해당 괄호 닫히면 while문 break
// - 남은 stack에 여는 괄호 남아있으면 올바른 괄호열 아님. 종료.
