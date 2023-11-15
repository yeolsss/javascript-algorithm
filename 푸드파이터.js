// 푸드파이터 문제
/*
*  수들은 1대 1로 대결
*  대결마다 음식의 종류와 양이 바뀝니다.
* 한 선수는 제일 왼쪽에 있는 음식부터 오른쪽
*  다른 선수는 제일 오른쪽에 있는 음식부터 왼쪽으로 순서대로 먹는 방식
* 중앙에는 물을 배치 물을 먼저 먹는 선수가 승리하게 됩니다.
* 조건을 고려하지 않고 음식을 주문하여 몇 개의 음식은 대회에 사용하지 못하게 되었습니다.
*  칼로리가 적은 순서대로 1번 음식을 3개, 2번 음식을 4개, 3번 음식을 6개 준비했으며, 물을 편의상 0번 음식이라고 칭한다면
*두 선수는 1번 음식 1개, 2번 음식 2개, 3번 음식 3개씩을 먹게 되므로 음식의 배치는 "1223330333221"이 됩니다.
*
* 배열의 0번 인덱스는 물의 수 이며 항상 1이다.
*
* */

function solution(food){
  // 한명이 먹을 음식담을 배열
  let foodList = [];

  for (let i = 1; i < food.length; i++) {
    // 음식을 몇번 반복할지 정함
    for (let j = 0; j < ~~(food[i]/2); j++) {
      foodList.push(i);
    }
  }
  // 심플하게 하드코딩 출력!
  return  `${foodList.join('')}0${foodList.reverse().join('')}`;
}
solution([1, 3, 4, 6]);


//----------------------------------------

function solution2(food){
  let length = (food.length*2)-1;
  let answer = [];

  for (let i = length; i >= 0; i--) {
    for (let j = 0; j < ~~(food[i]/2); j++) {
      answer.unshift(i);
    }

  }
  answer = [...answer, 0, ...answer.reverse()]
  return answer.join('');
}

solution2([1, 3, 4, 6]); //?
