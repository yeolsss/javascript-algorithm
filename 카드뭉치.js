/**
 * 카드 뭉치
 *
 * 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
 * 한 번 사용한 카드는 다시 사용할 수 없습니다.
 * 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
 * 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
 *
 *
 * */

function solution(cards1, cards2, goal) {
  // 초기값 설정
  let answer = "Yes";

  // goal의 배열만큼 반복
  for (let i = 0; i < goal.length; i++) {
    // 찾는 값이 있는지 찾는 indexOf
    let card1 = cards1.indexOf(goal[i]); //?
    let card2 = cards2.indexOf(goal[i]); //?

    // 만약 현재 찾는 값이 cards1, cards2에 둘 다 첫 번째에 없거나 다른 인덱스에 있다면 return
    if (card1 !== 0 && card2 !== 0) return (answer = "No");

    // 찾는 문자열이 있다면 shift로 배열에서 빼기
    if (card1 === 0) cards1.shift();
    if (card2 === 0) cards2.shift();
  }
  return answer;
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
); //?

solution(
  ["i", "drink", "water"],
  ["to", "want"],
  ["i", "want", "to", "drink", "water"]
); //?
