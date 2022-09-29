function solution(n) {
  var answer = 0;
  var 약수 = [];
  for (i = 0; i <= n; i++) {
    if (n % i === 0) {
      약수.push(i);
    }
  }

  for (i = 0; i < 약수.length; i++) {
    answer += 약수[i];
  }

  return answer;
}

//다른 사람의 풀이
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}

// 굳이 배열을 만들지 말고 조건을 만족하는 i의 값일 때 마다 더해주면 보다 더 쉽게 해결이 가능하다.

function solution(n, a = 0, b = 0) {
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}

// 재귀함수와 삼항연산자를 사용한 풀이도 있다.
