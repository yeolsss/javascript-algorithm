function solution(numbers) {
  let answer = numbers.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0)
  return answer / numbers.length;
}
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])//?