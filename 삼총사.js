function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number.length - j < 2) {
        break;
      }
      for (let k = j + 1; k < number.length; k++) {
        let sum = number[i] + number[j] + number[k];
        if (sum === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

solution([-2, 3, 0, 2, -5]); //?
solution([-3, -2, -1, 0, 1, 2, 3]); //?
solution([-1, 1, -1, 1]); //?
