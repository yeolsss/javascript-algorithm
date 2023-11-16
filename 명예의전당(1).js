/**
 * 명예의 전당(1)
 * 요약 -
 * 각 날짜 별로 가수는 점수를 받으며
 * k라는 queue의 길이를 갖고 queue의 length에 요소가 꽉차면
 * 내부 요소들의 값과 현재 얻은 점수 값이 더 클 경우 최소값을 밀어내고
 * queue에 현재 값을 입력하고 정렬이 되어야된다.
 * 그리고 각 날짜별로 최소값을 출력하는 문제.
 */

// function solution(k, score) {
//   let rankArr = [];

//   return score.reduce((acc, cur) => {
//     if (rankArr.length < k) {
//       rankArr.push(cur);
//     } else {
//       // rankArr length 3보다 크면..
//       // 일단 완탐으로 하자.

//       let prevNum = 0;
//       for (let i = k - 1; i >= 0; i--) {
//         if (rankArr[i] <= cur) {
//           prevNum = rankArr[i];
//           rankArr[i] = cur;
//           cur = prevNum;
//           continue;
//         }
//       }
//     }
//     acc.push(rankArr[0]);
//     return acc;
//   }, []);
// }

function solution(k, score) {
  let rankArr = [];

  return score.reduce((acc, cur) => {
    rankArr.push(cur);
    rankArr.sort((a, b) => a - b);
    if (rankArr.length > k) {
      rankArr.shift();
    }
    acc.push(rankArr[0]);
    return acc;
  }, []);
}

solution(3, [10, 100, 20, 150, 1, 100, 200]); //?
solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]); //?

// 로봇친구가 풀었음..
function solution2(k, score) {
  let rankArr = [];

  return score.reduce((acc, cur) => {
    // 일딴 때려박아
    rankArr.push(cur);
    // 그리고 정렬을 내림차순으로 해
    rankArr.sort((a, b) => b - a);
    if (rankArr.length > k) {
      // 길이가 k보다 길어지면 빼
      rankArr.pop();
    }
    // 그러고 acc에 rankArr의 마지막 인덱스 값을 넣어
    acc.push(rankArr[rankArr.length - 1]);
    // 그걸 리턴해
    return acc;
  }, []);
}
