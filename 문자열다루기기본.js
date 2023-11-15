/* 문자열 다루기 기본
* 문자열 s의 길이가 4 혹은 6이고,
* 숫자로만 구성돼있는지 확인해주는 함수,
* solution을 완성하세요.
* 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
* 문자열 길이가 4 혹은 6
* 숫자로만 구성돼있는지 확인해주는 함수?
*
* */

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    const regex = /[a-z]/gi;
    return !regex.test(s);
  }
  return false;
}

solution('342345')  //?

// gpt
function solution2(s) {
  const length = s.length;
  const regex = /^\d+$/;

  return (length === 4 || length === 6) && regex.test(s);
}