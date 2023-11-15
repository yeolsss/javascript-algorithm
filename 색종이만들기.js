/**
 * 색종이 만들기
 * 전체 종이가 모두 같은 색으로 칠해져 있지 않으면 가로와 세로로 중간 부분을 자른다.
 * 정사각형으로 이루어진 정사각형을 다룬다.
 * 우선 정사각형을 무조건 크게 4등분을 시키자.
 * 그리고 잘린 정사각형 내부를 어떤식으로든 색상이 같은지 비교하고
 * 같으면 멈추고 같지 않으면 다시 분할하는 식으로 접근하자.
 */

let input = `8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`
  .toString()
  .split("\n");

let white = 0;
let blue = 0;
let defaultPaperLength = Number(input[0]); //?
let defaultPaper = input.map((item, index) => {
  if (index !== 0) {
    return item;
  }
});
// input을 배열로 ? 문자열로? 음?
function slicePaper(paper, paperLength) {
  // 우선 자를 index설정
  let cutColIndex = paper[0].length / 2;
  let cutLowIndex = ~~(paper.length / 2);
  let endIndex = cutIndex + 1;
  getPaper.slice(cutIndex, endIndex);
}

slicePaper(defaultPaper, defaultPaperLength);
