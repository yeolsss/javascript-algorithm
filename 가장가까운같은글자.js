/** 가장 가까운 같은 글자
 * 문자열 s 주어짐
 * 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 출력
 * 예) s='banana'라고 할 때 각 글자들을 왼쪽부터 오른쪽으로 읽어 나간다.
 *
 * b는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
 * a는 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
 * n은 처음 나왔기 때문에 자신의 앞에 같은 글자가 없습니다. 이는 -1로 표현합니다.
 * a는 자신보다 두 칸 앞에 a가 있습니다. 이는 2로 표현합니다.
 * n도 자신보다 두 칸 앞에 n이 있습니다. 이는 2로 표현합니다.
 * a는 자신보다 두 칸, 네 칸 앞에 a가 있습니다. 이 중 가까운 것은 두 칸 앞이고, 이는 2로 표현합니다.
 */

function solution(s) {
  let answer = [];
  let obj = {};

  answer = [...s].reduce((acc, cur, index) => {
    acc.push(obj[cur] !== undefined ? index - obj[cur] : -1);
    obj[cur] = index;
    return acc;
  }, []);

  return answer;
}

solution("banana");
solution("foobar");
solution("foddddobar"); //?
