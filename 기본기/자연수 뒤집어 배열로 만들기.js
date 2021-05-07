function solution (n) {
  const answer = []
  for (let value of String(n)) {
    answer.push(Number(value))
  }
  answer.reverse()
  return answer
}
