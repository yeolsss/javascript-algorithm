/**
 *문제 설명
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * 예를 들어 18의 자릿수 합은 1+8=9이고,
 * 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 */

function solution(x) {
  let answer = true;

  let count = [...(x + "")].reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);

  if (x % count !== 0) {
    answer = !answer;
  }
  return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
