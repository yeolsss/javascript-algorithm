// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
// 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let max = -111;
let min = 11111111111;
for (let i = 1; i <= n; i++) {
  let num = arr[i];
  if(max < num) max = num;
  if(min > num) min = num;
}

console.log(`${min} ${max}`);
