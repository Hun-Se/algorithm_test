## 배운점

### 암호해독

1. `.strip()` : 앞뒤 공백 제거
2. `ord()` : 문자 -> 숫자
3. `chr()` : 숫자 -> 문자
4. `replace('a','b')` : a를 b로 대체
5. join 함수

- `join` 함수는 매개변수로 들어온 리스트에 있는 요소 하나하나를 합쳐서 하나의 문자열로 바꾸어 반환하는 함수다.
- `''.join(리스트)`를 이용하면 매개변수로 들어온 ['a', 'b', 'c'] 이런 식의 리스트를 'abc'의 문자열로 합쳐서 반환해주는 함수다.
- `구분자'.join(리스트)`를 이용하면 리스트의 값과 값 사이에 '구분자'에 들어온 구분자를 넣어서 하나의 문자열로 합쳐준다.'\_'.join(['a', 'b', 'c']) 라 하면 "a_b_c" 와 같은 형태로 문자열을 만들어서 반환해 준다.

6. `zfill(원하는 자릿수)` : 기본 0으로 자리값을 채워준다 / 이진 연산에 많이 쓰인다.

```Python
print('111'.zfill(10))
## 결과 : 0000000111
```

7. map(function, 순회가능한 객체)

- 람다

```Python
sample = [i.strip().replace(' ','').replace('+','1').replace('-','0') for i in text]
print(''.join(list(map(lambda x : chr(int(x, 2)), sample))))
## 결과: JEJU
```

- 함수

```Python
sample = [i.strip().replace(' ','').replace('+','1').replace('-','0') for i in text]
def f(x):
  return chr(int(x,2))

print(''.join(list(map(f,sample))))
## 결과: JEJU
```
