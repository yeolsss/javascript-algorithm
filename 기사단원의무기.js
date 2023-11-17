/**
 * 기사단원의 무기
 * 각 기사에게는 1번부터 number까지 번호가 지정되있다.
 * 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다.
 * 15번으로 지정된 기사단원은 15의 약수가 1, 3, 5, 15로 4개 이므로, 공격력이 4인 무기를 구매
 * 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.
 */

// function solution(number, limit, power) {
//   let answer = 0;
//   for (let i = 1; i <= number; i++) {
//     let cnt = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j === 0) {
//         cnt++;
//       }
//     }
//     cnt <= limit ? (answer += cnt) : (answer += power);
//   }

//   return answer;
// }

function solution(number, limit, power) {
  let answer = 0;
  let divisors = new Array(number + 1).fill(1); // 각 숫자의 약수 개수를 저장하기 위한 배열
  divisors[0] = 0; // 0번 인덱스는 사용하지 않음

  // 에라토스테네스의 체를 변형하여 각 숫자에 대한 약수의 개수를 계산
  for (let i = 2; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      divisors[j]++;
    }
  }

  // 계산된 약수의 개수를 바탕으로 무게 계산
  for (let i = 1; i <= number; i++) {
    answer += divisors[i] <= limit ? divisors[i] : power;
  }
  return answer;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
