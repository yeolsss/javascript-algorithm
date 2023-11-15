// 주사위 세개
// 같은 눈이 3개가 나오면 10000+(같은눈)x1000 상금
// 같은 눈이 2개만 나오는 경우 1000+(같은눈)x100 상금
// 모두 다른 눈 (그 중 가장 큰 눈)x100 상금
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [a, b, c] = input[0].split(' ').map(Number);
let answer = 0;
if(a === b && a === c) answer = 10000 + a * 1000;
else if(a === b) answer = 1000 + a * 100;
else if(a === c) answer = 1000 + a * 100;
else if(b === c) answer = 1000 + b * 100;
else answer = Math.max(a, b, c) * 100;

console.log(answer);
