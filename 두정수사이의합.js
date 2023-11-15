/* 문제 설명
    두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
    예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  let startNum = 0,
    endNum = 0;
  if (a > b) {
    startNum = b;
    endNum = a;
  } else {
    startNum = a;
    endNum = b;
  }

  let answer = 0;
  for (let i = startNum; i <= endNum; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
