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

### JAVA독

1. del() : 함수가 아닌 예약어, 리스트의 인덱스를 받아서 삭제하는 명령어이다, 특정의 인덱스를 삭제한 뒤에 리스트 형태의 data를 재조정한다.

```Python
x = [1,2,3,4,5]
y = ['월','화','수','목','금','토','일']

del x[0]
print(x) #x[0]삭제 되서 [2,3,4,5] 출력

del x[3:]
print(x) #x[3] 포함 이후 x[3] 포함 그 뒤로 요소 삭제, ['월요일','화요일','수요일']

```

2. remove : 삭제하려는 인덱스가 아닌 값을 직접 이력하는 함수이다.삭제하려는 값이 리스트 내 2개 이상 존재한다면 앞에 있는 값을 삭제하게 되며 그 후 리스트 형태의 data를 재종하게 된다.

```Python
x = [1,2,3,4,5]

x.remove(2)
print(x) # 리스트내 2가 사라진다

```

3. remove는 O(N) del은 O(1)이므로 del이 더 빠르다
4. loads() : JSON 문자열을 Python의 객체로 변환하기 위해서는 loads() 함수를 사용한다.일반적으로 파일에 저장되어 있는 JSON 문자열을 읽거나, HTTP 요청의 전문(body)을 읽을 때 자주 사용된다.
5. dumps() : 함수: Python 객체를 JSON 문자열로 변환
