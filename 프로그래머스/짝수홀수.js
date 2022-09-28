function solution(num) {
  var answer = "";
  if (num % 2 == 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

//다른사람의 풀이
function solution(num) {
  return num % 2 ? "Even" : "Odd";
}

// num % 2 가 false인 것을 이용하고 삼항연산자로 한줄로 표현이 가능하다.
