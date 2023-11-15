/* 행렬의 덧셈
* 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과를 출력
*
* */

function solution(arr1, arr2) {
  return arr1.reduce((acc, cur, index) => {
    for (let i = 0; i < arr2[index].length; i++) {
      acc[index].push(cur[i] + arr2[index][i]);
    }
    return acc;
  }, Array.from({length: arr1.length}, ()=>[]));
}

// function solution(arr1, arr2) {
//   return arr1.map((row, i) => row.map((value, j) => value + arr2[i][j]));
// }

console.log(solution([[1, 2, 3], [2, 3, 3]], [[3, 4, 3], [5, 6, 4]]));
// solution([[1], [2]], [[3], [4]]); //?
