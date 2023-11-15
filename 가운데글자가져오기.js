function solution(s) {
  let answer = "";
  const index = Math.floor(s.length / 2); //?
  if (s.length % 2 === 1) answer = s.substring(index, index + 1);
  else answer = s.substring(index - 1, index + 1);

  return answer;
}

console.log(solution("abcgwqerde"));
