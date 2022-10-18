function solution(x) {
  let sum = 0;
  let a = String(x).split("");

  for (let i = 0; i < a.length; i++) {
    sum += Number(a[i]);
  }
  return x % sum === 0 ? true : false;
}
