// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

solution(70);
console.log("🚀 ~ file: 각도기.js:19 ~ solution(70);:", solution(70));
solution(91);
console.log("🚀 ~ file: 각도기.js:21 ~ solution(91);:", solution(91));
solution(180);
console.log("🚀 ~ file: 각도기.js:23 ~ solution(180);:", solution(180));
