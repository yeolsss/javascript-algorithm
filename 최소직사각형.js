/*
* 문제 설명
*  명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
*  다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서,
*  작아서 들고 다니기 편한 지갑을 만들어야 합니다.
*  이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
* 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.
*
* */

/*[10, 7],
* [12, 3]  >         3, 12
* [8, 15],
* [14, 7], > 7,  14
* [5, 15]
* 14   15  > 12 , 15   10 15
*
* */

function solution(sizes) {
  // return sizes.reduce((a,c) => {
  //     let [w,h] = c;
  //     if(w < h) {
  //         [w,h] = [h,w]
  //     }
  //     a.width = Math.max(a.width,w);
  //     a.height = Math.max(a.height,h);
  //     a.max = Math.max(a.max, a.width * a.height);
  //     return a
  // },{width:0,height:0,max:0}).max;

  const n = sizes.length;
  let ret = Infinity;
  function find(depth,cand) {
    if(depth === n) {
      let maxWidth = 0, maxHeight = 0;
      for(let i = 0;i<n;i++) {
        maxWidth = Math.max(maxWidth,cand[i][0]);
        maxHeight = Math.max(maxHeight,cand[i][1]);
      }
      ret = Math.min(ret,maxWidth * maxHeight);
      return
    }
    find(depth + 1, cand.concat([sizes[depth]]));
    const reverse = [...sizes[depth]].reverse();
    find(depth + 1, cand.concat([reverse]));
  }
  find(0,[]);
  return ret;

}

solution([[60, 50], [30, 70], [60, 30], [80, 40]]);
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]);
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]);