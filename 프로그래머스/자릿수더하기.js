function solution(n) {
  var answer = 0;
  var text = String(n);
  for (let i = 0; i < text.length; i++) {
    answer += parseInt(text[i]);
  }

  return answer;
}

//다른사람의 풀이
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

// n+""을 진행하면 자바스크립트에서는 n이 문자형이된다. 그 후 split으로 쪼개주고 reduce를 사용하여 각 자리 수를 더해준다. 이때 initial value를 0으로 초기화해준 이유는 acc를 정수화 해주기 위함 0을 적지 않고 "parseInt(acc) + parseInt(curr)"도 가능하다.

function solution(n) {
  var a = (n + "").split("");
  var b = 0;
  for (var i = 0; i < a.length; ++i) {
    b += parseInt(a[i]);
  }
  return b;
  //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
}
