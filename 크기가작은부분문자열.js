/**
 * 크기가 작은 부분 문자열
 *
 */
function solution(t, p) {
  let answer = 0;
  let pLength = p.length;
  for (let i = 0; i < t.length; i++) {
    if (i + pLength <= t.length) {
      Number(p) < Number(t.slice(i, i + pLength)) || answer++;
    }
  }
  return answer;
}

solution("3141592", "271"); //?
solution("500220839878", "7"); //?
solution("10203", "15"); //?
