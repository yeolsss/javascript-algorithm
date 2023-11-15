function solution(n) {
  return [...n+''].reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
}

solution(123); //?
solution(987); //?

