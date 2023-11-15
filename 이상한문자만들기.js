function solution(s) {
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [...arr[i]].reduce((acc, cur, index) => {
      acc += index === 0 || index % 2 ===0 ? cur.toUpperCase() : cur.toLowerCase();
      return acc;
    }, '')
  }
  return arr.join(' ');
}

solution("try hello world"); //?

