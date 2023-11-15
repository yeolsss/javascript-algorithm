function solution(arr) {
  const answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    arr[i] > arr[i - 1] && answer.push(arr[i]);
  }
  return answer;
}

solution([7, 3, 9, 5, 6, 12]); //?
