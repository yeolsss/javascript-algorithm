/**
 * 재귀문제
 * 1부터 N까지의 합을 계산하는 재귀함수
 * 문자열의 중간 문제
 */

function solution(num) {
  if (num <= 0) return 0;
  let result = num;
  return result + solution(--num);
}

solution(10); //?
solution(5); //?

/**
 * 재귀문제
 *  중간 문자 더하기
 *  예) '12345678'
 * 45271368
 * '45271368'
 **/

function solution2(str) {
  let answer = "";
  // 문자 중앙을 잘라 answer에 합치는 helper function
  function helper(sliceStr) {
    if (sliceStr.length <= 1) {
      answer += sliceStr;
      return;
    }
    let middelIndex =
      sliceStr.length % 2 === 0
        ? ~~(sliceStr.length / 2) - 1
        : sliceStr.length / 2;

    let endNum = middelIndex + (sliceStr.length % 2 === 0 ? 2 : 1);
    let leftStr = sliceStr.slice(0, middelIndex);
    let rightStr = sliceStr.slice(endNum);

    answer += sliceStr.slice(middelIndex, endNum);
    helper(leftStr);
    helper(rightStr);
  }
  helper(str);
  return answer;
}

function solution3(str) {
  function helper(sliceStr) {
    if (sliceStr.length <= 1) {
      // 기저 케이스 잘 작성하셨습니다
      return sliceStr;
    }
    let middelIndex =
      sliceStr.length % 2 === 0
        ? ~~(sliceStr.length / 2) - 1
        : sliceStr.length / 2;

    let endNum = middelIndex + (sliceStr.length % 2 === 0 ? 2 : 1);
    let leftStr = sliceStr.slice(0, middelIndex);
    let rightStr = sliceStr.slice(endNum);

    return (
      helper(leftStr) + sliceStr.slice(middelIndex, endNum) + helper(rightStr)
    );
  }
  return helper(str);
}

let str = "12345678";
solution2(str); //?
