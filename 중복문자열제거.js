function solution(arr) {
  return Array.from(new Set(arr));
}

solution(['good', 'time', 'good', 'time', 'student']);//?


function solution2(arr) {
  let answer = [];
  for (let i = 0; i <arr.length; i++) {
    if(arr.indexOf(arr[i]) === i) answer.push(arr[i]);
  }
  return answer;
}

solution2(['good', 'time', 'good', 'time', 'student']);//?

3 === 3 || 3!==3//?