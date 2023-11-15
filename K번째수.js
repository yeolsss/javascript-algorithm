/** K번째수
 * array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]
 * 1에서 나온 배열을 정렬 하면 [2, 3, 5, 6]
 * 2에서 나온 배열 3번째 숫자는 5
 * 배열 array, [i, j, k]를 원소로 가진 2차원 배열
 * commands가 매개변수로 주어질 때,
 * commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온
 * 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */

function solution(array, commands) {
  let answer = [];
  let n = commands.length;

  // commands를 반복
  for (let x = 0; x < n; x++) {
    // 반복하면서 구조분해 할당으로 배열의 값을 i, j, k로 할당
    let [i, j, k] = commands[x];

    // array에 slice(i - 1, j)로 배열을 자르고 자른 값을 오름차순 정렬
    let result = array.slice(i - 1, j).sort((a, b) => a - b);
    // [5, 2, 6, 3]

    // k의 값이 인덱스이므로 -1해서 찾아 answer에 push
    answer.push(result[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

function solution2(array, commands) {
  // 기본값
  return commands.reduce((acc, cur) => {
    let [i, j, k] = cur;
    let result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];

    acc.push(result);

    return acc;
  }, []);
}

console.log(
  solution2(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
