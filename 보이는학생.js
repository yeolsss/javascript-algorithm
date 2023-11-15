// n명의 학생을 일렬로 세웠다.
// 학생의 키가 앞에서부터 순서대로 주어진다.
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그래밍.

// ▣ 입력설명
// 첫줄에 n이 입력. 그 다음줄에 n명의 학생의 키가 앞에서부터 순서대로 주어진다.
// ▣ 출력설명
// 선생님이 볼 수 있는 최대학생수를 출력

// 입력 예제 1
// 130 135 148 140 145 150 150 153

// 출력 예제 1
// 설명 : 135, 140, 145, 150, 153이 보인다.

function solution(students) {
  let answer = 1;
  let max = students[0];
  for (let i = 1; i < students.length; i++) {
    if (max < students[i]) {
      max = students[i];
      answer++;
    }
  }
  return answer;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);
