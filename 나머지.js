let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let set = new Set();
for (let i = 0; i < data.length; i++) {
  set.add(data[i] % 42);
}

console.log(set.size);