let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = 0;
let max = 0;
for (let i = 0; i <= input.length; i++) {
  if (max < Number(input[i])) {
    max = input[i];
    answer = i;
  }
}
console.log(max)
console.log(answer+1);