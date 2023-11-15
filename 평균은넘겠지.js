let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let data = input[i].split(' ').map(Number);
  let length = data[0];
  let sum = 0;
  for (let j = 1; j <= length; j++) {
    sum += data[j];
  }

  let average = sum / length;
  let cnt = 0;
  for (let j = 1; j <= length; j++) {
    if (data[j] > average) {
      cnt += 1;
    }
  }

  console.log(`${(cnt / n * 100).toFixed(3)}`);
}

