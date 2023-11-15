/* 부족한 금액 계산하기
* count 만큼 타는데
* 한번 탈 때 마다 타는 횟수만큼 가격을 곱한다.
* 그리고 들고 있는 돈이랑 사용한 돈을 비교해서 얼마 모자란지 알아내라.
* */

function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i; //?
  }
  return answer < money ? 0 : answer - money;
}

solution(3, 20, 4); //?

//?