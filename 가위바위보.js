/**
 * 가위 바위 보
 * A, B 두 사람이 가위바위보 게임을 한다.
 * 총 N번의 게임을 하고 A가 이기면 A를 출력
 * B가 이기면 B를 출력
 * 비기면 D 출력
 * 가위, 바위, 보 / 1: 가위, 2: 바위, 3: 보
 * 기준을 잡아라 기준을
 */

function solution(a, b) {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    // 같으면 비긴다. D출력
    if (a[i] === b[i]) {
      answer += "D\n";
      continue;
    }
    // a가 이기는 상황을 if로
    if (a[i] === 1 && b[i] === 3) {
      answer += "A\n";
    } else if (a[i] === 2 && b[i] === 1) {
      answer += "A\n";
    } else if (a[i] === 3 && b[i] === 2) {
      answer += "A\n";
    } else {
      answer += "B\n";
    }
  }

  return answer;
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]); //?
console.log(
  "🚀 ~ file: 가위바위보.js:36 ~ solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);:",
  solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])
);
