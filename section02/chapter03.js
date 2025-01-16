// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three);
// >> 1, 2, 3

let [one2, two2, three2] = arr;
console.log(one2, two2);
// >> 1, 2

let [one3, two3, three3, four3] = arr;
console.log(one3, two3, three3, four3); // 존재하지 않는 것을 받으면 undefined가 뜸..
// >> 1, 2, 3, undefined

let [one4, two4, three4, four4 = 4] = arr;
console.log(one4, two4, three4, four4);

// 2. 객체의 구조 분해 할당
let person = {
  name: 'ooo',
  age: 27,
  hobby: '테니스',
};

// let { name, age, hobby, extra } = person;
console.log(name, age, hobby, extra);

let {
  age: myAge, // age를 myAge로 받고 싶을 때
  hobby,
  name,
  extra = 'hello',
} = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = (person) => {};

func(person);

// 중괄호를 이용해서 매개 변수를 받는다.
// 객체를 이용했기 때문에 이렇게 받을 수 있음..
const func2 = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
