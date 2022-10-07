function solution(s) {
  var answer = true;
  const arr = [...s];
  let p = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "p" || arr[i] === "P") {
      p++;
    } else if (arr[i] === "y" || arr[i] === "Y") {
      y++;
    }
  }

  if (p !== y) {
    answer = false;
  }

  return answer;
}

// 다른 사람의 풀이
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// 다른 사람 풀이
function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    if (cur === "p") return acc + 1;
    else if (cur === "y") return acc - 1;
    return acc;
  }, 0)
    ? false
    : true;
}
