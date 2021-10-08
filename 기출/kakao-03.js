// 주차장의 요금표와 차량이 들어오고(입차) 나간(출차) 기록이 주어졌을 때, 차량별로 주차 요금을 계산

// test case 1
// fees (기본 시간(분)   기본 요금(원)   단위 시간(분)   단위 요금(원))
// [180, 5000, 10, 600]

// records(시각(시:분)   차량번호 내역)
// ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]

// result(차량 번호 오름차순으로 주차 요금 결과)
// [14600, 34400, 5000]

function solution (fees, records) {
  const [dfTime, dfFee, unitTime, unitFee] = fees
  const resultFee = {}

  const data = {}
  records.forEach(str => {
    const sData = str.split(' ')
    let time = sData[0].split(':').map(Number)
    time = time[0] * 60 + time[1]
    if (!(data[sData[1]] && Object.keys(data[sData[1]]).includes(sData[2]))) {
      data[sData[1]] = { ...data[sData[1]], [sData[2]]: [time] }
    } else {
      data[sData[1]][sData[2]].push(time)
    }

    resultFee[sData[1]] = dfFee
  })
  for (let key in data) {
    const lastTime = 23 * 60 + 59
    if (!data[key]['OUT']) data[key]['OUT'] = [lastTime]
    else if (data[key]['OUT'].length < data[key]['IN'].length)
      data[key]['OUT'].push(lastTime)
  }

  for (let key in data) {
    const left =
      data[key]['OUT'].reduce((acc, cur) => acc + cur) -
      data[key]['IN'].reduce((acc, cur) => acc + cur)
    dfTime >= left
      ? (resultFee[key] = dfFee)
      : (resultFee[key] =
          dfFee + Math.ceil((left - dfTime) / unitTime) * unitFee)
  }
  const answer = []
  for (let key of Object.keys(resultFee).sort()) {
    answer.push(resultFee[key])
  }
  return answer
}
