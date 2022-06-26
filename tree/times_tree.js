// 10억명이니 로그시간이 필요 => 이진 탐색

// 우리는 특특정 값을 찾는것이 아니다.
// 우리가 찾는것은 최소 몇 분에 모든 심사가 끝나는가?
// ㄴ 결정 문제 = 이진 탐색 = 파라메트릭 서치

// 제한사항
// 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
// 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
// 심사관은 1명 이상 100,000명 이하입니다.

// 최소 1분에서 10억분 * n(최대시간 * n) 사이
// 면접관들이 몇명을 처리하는가?
// 처리 가능한 입국자가 n보다 작다면 분을 올려야되고, 입국자가 n보다 크다면 분을 낮춰야한다.
// 면접관이 시간대비 몇 명을 처리할 수 있는가?
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

// 예를 들어, 30분이라면 처리 속도가 7인 심사관은 4명, 처리 속도가 10인 심사관은 3명을 처리할 수 있습니다.
// 이 경우 그 합이 7이기 때문에 6명을 처리한다면 걸리는 시간을 조금 더 줄일 수 있지 않을까?로 생각할 수 있으니 right를 mid - 1로 줄입니다.

function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // O(n log n)
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n; // 제일 오래걸리는 시간.

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // sum([시간/ 심사시간])
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    console.log(`left: ${left}, right: ${right}, mid: ${mid}, sum: ${sum}`);
  }

  return left;
}

function solution2(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // 해당시간에 몇명을 처리할 수 있는가.
    let processedNumber = times
      .map((time) => Math.floor(mid / time))
      .reduce((pre, cur) => pre + cur);

    if (processedNumber < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    console.log(
      `left: ${left}, right: ${right}, mid: ${mid}, processedNumber: ${processedNumber}`
    );
  }

  return left;
}

const n = 6;
const times = [7, 10];

console.log(solution2(n, times));
