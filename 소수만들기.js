/**
 * 소수 구하기
 * 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하라.
 * 배열 nums가 매개변수로 주어지고 nums에 있는 숫자들 중 서로 다른 3개를 골라 더해라.
 *
 */

function solution(nums) {
  let numArr = Array(...new Set(nums));

  let answer = 0;
  let tempArr = [];
  for (let i = 0; i < numArr.length - 2; i++) {
    for (let j = i + 1; j < numArr.length - 1; j++) {
      for (let k = j + 1; k < numArr.length; k++) {
        let num = numArr[i] + numArr[j] + numArr[k];
        if (num % 2 !== 0) tempArr.push(num);
      }
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    let temp = 1;
    for (let j = 1; j < tempArr[i] / 2; j++) {
      if (tempArr[i] % j === 0) temp++;
    }
    if (temp === 2) answer++;
  }
  return answer;
}

// solution([1, 2, 3, 4]); //?
solution([1, 2, 7, 6, 4]); //?
