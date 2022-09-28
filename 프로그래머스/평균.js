function solution(arr) {
  var answer = 0;
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (answer = sum / arr.length);
}

// 다른풀이
function solution(arr) {
  return array.reduce((a, b) => a + b) / arr.length;
}

//reduce() : 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다. 위에서는 배열의 각 a + b를 반환
