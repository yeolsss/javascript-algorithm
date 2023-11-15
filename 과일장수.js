/**
 * 과일 장수
 * 사과 상태는 1~k점
 * k점이 최상품 1점이 최하품
 * - 한 상자에 사과를 m개씩 담아 포장
 * - 상자에 담긴 사과 중 가장 낮은 점수가 p(1<=p<=k)점인 경우
 *   사과 한 상자의 가격은 p*m이다.
 * 예) k=3, m=4, 사과 7개의 점수가 [1,2,3,1,2,3,1] 이라면,
 * 다음과 같이 [2,3,2,3]으로 구성된 사과 상자 1개를 만들어 판매 하여 최대 이익을 얻는다.
 * 최저 사과 점수 x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
 *
 * 사과 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어 졌을 때,
 * 과일 장수가 얻을 수 있는 최대 이익을 return
 */

// function solution(k, m, score) {
//   let answer = 0;
//   let cnt = ~~(score.length / m);
//   if (cnt <= 0) return 0;
//   let index = 0;

//   // 상자 loop
//   while (index < cnt) {
//     // 상자 생성 및 가격
//     // 상자는 m개씩 끊는데 그 중 가장 큰점수들을 가져야한다.
//     let tempArr = [];
//     for (let i = 0; i < m; i++) {
//       // 현재 최대값
//       let max = Math.max(...score);
//       score.splice(score.indexOf(max), 1);
//       tempArr[i] = max;
//     }
//     answer += Math.min(...tempArr) * m;
//     index++;
//   }

//   return answer;
// }

function solution(k, m, score) {
  let answer = 0;
  let cnt = ~~(score.length / m);
  if (cnt <= 0) return 0;
  let index = 0;
  score.sort((a, b) => b - a);
  // 상자 loop
  while (index < cnt) {
    let loopCnt = index * m;
    let min = score[loopCnt + (m - 1)];
    answer += min * m;
    index++;
  }
  return answer;
}
// solution(3, 4, [1, 2, 3, 1, 2, 3, 1]); //?
solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]); //?
