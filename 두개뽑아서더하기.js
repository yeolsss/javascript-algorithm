/**
 * 두 개 뽑아서 더하기
 * 정수 배열 numbers가 주어짐
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑음
 * 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return
 */

function solution(numbers) {
  let answer = numbers.reduce((acc, cur, index) => {
    for (let j = index + 1; j < numbers.length; j++) {
      acc.push(cur + numbers[j]);
    }
    return acc;
  }, []);

  answer = Array.from(new Set(answer));
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
