/**
 * OX 문제 맞거나 틀린 두 경우의 답을 가지는 문제
 * 여러 개의 OX문제로 만들어진 시험에서
 * ! 연속적으로 답을 맞히는 경우 가산점
 * 1번 문제가 맞으면 1점으로 계산
 * ? 연속으로 문제의 답이 맞는 경우
 * ? 두 번째 문제는 2점, 세 번째 문제는 3점, ... k번째 문제는 k점으로 계산한다.
 * ? 틀린 문제는 0점으로 계산
 */

function solution(arr) {
  let answer = 0;
  let prevCheck = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      prevCheck = 0;
      continue;
    }
    prevCheck++;
    answer += prevCheck;
  }

  return answer;
}

// console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
// reduce로 풀이
function solution2(arr) {
  let cnt = 0;
  return arr.reduce((acc, cur) => {
    cur === 0 ? (cnt = 0) : cnt++;
    acc += cnt;
    return acc;
  }, 0);
}

console.log(solution2([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
