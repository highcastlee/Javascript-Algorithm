function solution (id_list, report, k) {
  // 유저별 신고 대상
  const reportPerUser = {}
  const countPerUser = {}
  const resultPerUser = {}
  const result = {}

  report.map(str => {
    const arr = str.split(' ')
    if (reportPerUser[arr[0]]) {
      if (!reportPerUser[arr[0]].includes(arr[1]))
        reportPerUser[arr[0]].push(arr[1])
    } else reportPerUser[arr[0]] = [arr[1]]
  })

  // 유저별 신고 당한 횟수
  for (let value of id_list) {
    countPerUser[value] = []
    resultPerUser[value] = false
    result[value] = 0
  }

  for (let key in reportPerUser) {
    for (let user of reportPerUser[key]) {
      if (!countPerUser[user].includes(key)) {
        countPerUser[user].push(key)
      }
    }
  }
  // 유저별 신고 결과 수
  for (let user in countPerUser) {
    if (countPerUser[user].length >= k) {
      resultPerUser[user] = true
    }
  }

  for (let user in reportPerUser) {
    reportPerUser[user].forEach(str => {
      if (resultPerUser[str]) {
        result[user] += 1
      }
    })
  }
  return Object.values(result)
}
