# 배운점

1. 짝수홀수

- num % 2 가 false인 것을 이용하고 삼항연산자로 한줄로 표현이 가능하다.

2. 평균

- reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다. 위에서는 배열의 각 a + b를 반환

3. 약수의합

- 나눴을때 0이 남으면 해당 수는 약수이다.
- 배열을 굳이 만들지 않고 풀 수 있다.
- 재귀함수와 삼항연산자를 사용한 풀이도 있다.

4. 자릿수더하기

- n+""을 진행하면 자바스크립트에서는 n이 문자형이된다.
- split으로 문자열을 쪼갤 수 있다.
- reduce를 사용하여 각 자리 수를 더해준다. 이때 initial value를 0으로 초기화해준 이유는 acc를 정수화 해주기 위함 0을 적지 않고 "parseInt(acc) + parseInt(curr)"도 가능하다.

5. 정수 제곱근 구하기

- `Number.isInteger(value)`을 사용하면 value가 정수면 true값을 return하고 정수가 아니면 false값을 return 한다.
- `Math.sqrt(value)`를 사용하면 value의 제곱근이 return 된다.
- `Math.pow(a,b)`를 사용하면 a에 b제곱한 값이 return 된다.
- `Math.sqrt(value)%1 === 0`를 이용해 정수인지 아닌지 판별 할 수 있다.
- `value**2`를 사용하면 value를 제곱한다. (\*\*b: b만큼 제곱)

6. 자연수뒤업어서배열로바꾸기

- `split("")`을 사용하면 문자열을 한글자씩 쪼개서 배열로 만들 수 있다.
- `reverse()`를 사용하면 배열을 뒤집을 수 있다.
- `map(i => funtion(i))` map을 사용하여 배열을 순회하는 함수를 만들 수 있다.
- `paresInt(string), Number(string)`을 사용하면 문자열을 숫자로 바꿀 수 있다.

7. 문자열 내 P와 y의 갯수 구하기

- `toUpperCase`/ `toLowerCase`를 사용하여 문자열을 대/소문자로 만들 수 있다.
- `arr.reduce(callback[, initialValue])` 사용:
- callback:
  배열에 각요소에 실행 할 함수 이다.

  1. accumulator:
     누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값이다.

  2. currentValue
     처리할 현재 요소.

  3. currentIndex Optional
     처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작한다.

  4. initialValue Optional
     callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
