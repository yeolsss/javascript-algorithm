function solution(s){
  const setArr = new Set(s); //?
  return Array.from(setArr).join('');
}

solution("ksedrkskdd"); //?

function solution2(s){
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if(i === s.indexOf(s[i])) answer+=s[i];
  }
  return answer;
}
solution2("ksedrkskdd"); //?
