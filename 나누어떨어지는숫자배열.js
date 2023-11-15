/* 약수의 개수와 덧셈
*  두 정수 left와 right가 매개변수로 주어집니다.
*  left부터 right까지의 모든 수들 중에서,
*  약수의 개수가 짝수인 수는 더하고,
*  약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
*
* */

function solution(arr, divisor) {
  let answer = arr.reduce((acc, cur) => {
    if (cur % divisor === 0) {
      acc.push(cur);
    }
    return acc;
  }, []).sort((a, b) => a - b);

  if(answer.length === 0) answer.push(-1);

  return answer;
}

solution([5, 9, 7, 10], 5); //?
solution([3,2,6]	, 10); //?
