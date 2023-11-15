/* 최대공배수와 최소공배수
 * 두 수를 받아 두 수의 최대 공약수와 최소공배수를 반환
 */
function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  let r = a % b;

  while (r > 0) {
    a = b;
    b = r;
    r = a % b;
  }

  const g = b;
  const l = (n * m) / g;
  return [g, l];
}

solution(3, 12); //?

// copilot
function solution2(n, m) {
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a; //?
  }
  const g = gcd(n, m);
  const l = (n * m) / g; //?
  return [g, l];
}
