/** 콜라 문제
 * 빈병 a을 가져다 주면 콜라 b병을 준다.
 * n개를 가져다 주면 몇 병을 받을 수 있을까.
 *
 */

function solution(a, b, n) {
  if (n < a) {
    return 0;
  }
  // n = 총 빈병
  // a = 몇 개줘야 b병 주는지
  // b = a개 빈병 주면 b준다.
  // 남은 빈 병의 개수 더하기
  let result = b * ~~(n / a);
  let rest = n % a;

  return result + solution(a, b, result + rest);
}

solution(2, 1, 20); //?
solution(3, 1, 20); //?
