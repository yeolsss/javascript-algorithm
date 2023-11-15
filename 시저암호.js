/**
 * 시저 암호
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고한다.
 * "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 된다.
 * "z"는 1만큼 밀면 "a"가 된다.
 * ! 문자열 s와 거리 n을 입력 받아 s를 n만큼 민 암호문을 만드는 함수
 *
 * ? 제한 조건
 * 공백은 아무리 밀어도 공백
 * s는 알파벳 소문자, 대문자, 공백으로 이루어짐
 * n은 1이상 25이하인 자연수
 */
function solution(s, n) {
  // 공백은 항상 공백
  if (s === "") return "";

  // 문자열을 배열로 바꿈
  let strArr = s.split("");
  return strArr
    .reduce((acc, cur) => {
      if (cur === " ") {
        acc.push(" ");
      } else {
        // 대문자 확인
        let regexp = new RegExp("[A-Z]", "g");
        let type = cur.match(regexp);
        let temp = type
          ? cur.toLowerCase().charCodeAt() + n
          : cur.charCodeAt() + n;
        acc.push(
          type
            ? String.fromCharCode(((temp - 97) % 26) + 97).toUpperCase()
            : String.fromCharCode(((temp - 97) % 26) + 97)
        );
      }
      return acc;
    }, [])
    .join("");
}

function solution2(s, n) {
  var result = "";
  let caesarNum = n % 26;
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    var code = sArr[i].charCodeAt();
    if (code === 32) {
      result += sArr[i];
      continue;
    }
    if (code >= 65 && code <= 90) {
      code = code + caesarNum > 90 ? code + caesarNum - 26 : code + caesarNum;
      sArr[i] = String.fromCharCode(code);
      result += sArr[i];
      continue;
    }
    if (code >= 97 && code <= 122) {
      code = code + caesarNum > 122 ? code + caesarNum - 26 : code + caesarNum;
      sArr[i] = String.fromCharCode(code);
      result += sArr[i];
      continue;
    }
  }
  return result;
}

// 문자열을 유니코드로 변경 후 n값 만큼 더한 숫자가 소문자 z의 유니코드값보다 클 때
// a로 돌아가야하기 때문에 유니코드값 + n에서 97(소문자 a의 유니코드값)을 빼고
// 소문자 알파벳 갯수(25)에 +1한 값으로 나머지연산을 한다.
// 이렇게 되면 소문자 문자열 숫자보다 커지더라도 소문자 a의 유니코드 값으로 돌아서 n만큼 증가 시킬 수 있다.
(123 - 97) % 26;

solution("AB", 1); // 'BC'
solution("a B z", 4); //?.
solution2("a B z", 4); //?.
solution("z", 1); // 'a'
