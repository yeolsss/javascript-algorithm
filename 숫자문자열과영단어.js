/** 숫자 문자열과 영단어
 * 1478 → "one4seveneight"
 * 234567 → "23four5six7"
 * 10203 → "1zerotwozero3"
 */

function solution(s) {
  // 정규식에 사용할 obj
  const wordToNum = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  return Number(
    s.replace(
      /zero|one|two|three|four|five|six|seven|eight|nine/gi,
      (match) => wordToNum[match.toLowerCase()]
    )
  );
}

solution("one4seveneight"); //?
