text = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ']

## .strip() : 앞뒤 공백 제거
##ord() : 문자 -> 숫자
##chr() : 숫자 -> 문자
## replace('a','b') : a를 b로 대체

l=[];
for i in text:
  l.append(chr(int(i.strip().replace(' ','').replace('+','1').replace('-','0'),2)));

## join 함수는 매개변수로 들어온 리스트에 있는 요소 하나하나를 합쳐서 하나의 문자열로 바꾸어 반환하는 함수입니다.
## .join(리스트)''.join(리스트)를 이용하면 매개변수로 들어온 ['a', 'b', 'c'] 이런 식의 리스트를 'abc'의 문자열로 합쳐서 반환해주는 함수인 것입니다.
## - '구분자'.join(리스트)'구분자'.join(리스트)를 이용하면 리스트의 값과 값 사이에 '구분자'에 들어온 구분자를 넣어서 하나의 문자열로 합쳐줍니다.'_'.join(['a', 'b', 'c']) 라 하면 "a_b_c" 와 같은 형태로 문자열을 만들어서 반환해 줍니다.

print(''.join(l))

## 한줄로 표시하기
print(''.join([chr(int(i.strip().replace(' ','').replace('+','1').replace('-','0'),2)) for i in text]))

## zfill(원하는 자릿수) : 기본 0으로 자리값을 채워준다 / 이진 연산에 많이 쓰인다. 
print('111'.zfill(10))

sample = [i.strip().replace(' ','').replace('+','1').replace('-','0') for i in text]

## map(function, 순회가능한 객체)

## 람다
print(''.join(list(map(lambda x : chr(int(x, 2)), sample))))

## 함수
def f(x):
  return chr(int(x,2))

print(''.join(list(map(f,sample))))