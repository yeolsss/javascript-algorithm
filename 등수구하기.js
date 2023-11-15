/**
 * n명의 학생의 국어점수가 입력되면
 * 각 학생의 등수를 입력된 순서대로 출력
 */

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([92, 92, 92, 100, 67]));
