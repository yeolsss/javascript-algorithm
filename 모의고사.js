/* 모의고사
수포자들이 찍는 패턴을 배열로 정의
각 수포자가 맞춘 문제 수를 저장할 배열을 초기화
문제를 순회하면서 각 수포자가 맞춘 문제 수를 증가
가장 많은 문제를 맞춘 수포자를 찾습니다.
가장 많은 문제를 맞춘 수포자가 여럿일 경우, 모두 반환
* */

function solution(answers) {
  let patterns = [
    [1, 2, 3, 4, 5],

    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let scores = [0, 0, 0];
  let result = [];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < patterns.length; j++) {
      // answers의 길이가 패턴 길이보다 길어 질때
      //  반복을 하기위해 answers의 반복 횟수
      // patterns가 0번이고 answers가 10번일때 10 % 5 = 0
      // patterns가 0번이고 answers가 11번일때 11 % 5 = 1
      // patterns가 0번이고 answers가 12번일때 12 % 5 = 2
      // 0            [0][0]
      // 0            [0][1]
      // 0            [0][2]
      //  10           [j][0]
      if (answers[i] === patterns[j][i % patterns[j].length]) {
        scores[j]++;
      }
    }
  }

  let maxScore = Math.max.apply(null, scores);
  if (scores[0] === maxScore) {
    result.push(1);
  }
  if (scores[1] === maxScore) {
    result.push(2);
  }
  if (scores[2] === maxScore) {
    result.push(3);
  }
  return result;
}

solution([1, 2, 3, 4, 5]);
