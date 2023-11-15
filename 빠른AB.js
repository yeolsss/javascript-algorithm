let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let answer = '';
for (let i = 1; i < n; i++) {
  let [a, b] = input[i].split(' ')
  answer += `${Number(a) + Number(b)} \n`;
}

console.log(answer);