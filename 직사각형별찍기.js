/* 직사각형 별찍기
*
* 두 개의 정수 n, m이 주어진다.
*  별 문자를 이용해 가로 길이가 n
*  세로의 길이가 m인 직사각형 만들기
* */

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  let answer = '';
  for (let i = 0; i < b; i++) {
    answer += '*'.repeat(a).toString();
    if (i < b){
      answer += '\n';
    }
  }
  console.log(answer);
});