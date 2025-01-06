// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(더 간결하기 때문에 대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정한", // 객체 프로퍼티 (객체 속성)
  age: 27,
  hobby: "테니스",
  extra: {},
  10: 20,
  "like cat": true, // 띄어쓰기가 필요한 key값은 "" 사용
  // key: value 형식
  // key와 value에 타입은 자유롭게 넣을 수 있다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근
// # 방법1:점 표기법, 괄호 표기법
let name = person.name; // "이정한"
let name2 = person.name2; // 존재하지 않는 프로퍼티를 가져오게 되면 undefined가 뜸

// # 방법2: 괄호 표기법
let age = person["age"]; // 대괄호를 사용할 때는 ""를 꼭 사용
console.log(age);
// 활용(동적으로 가져와야할 때 사용)
let property = "hobby";
let hobby = person[property]; // "hobby"값인 "테니스"가 나옴
console.log(hobby);

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "fe developer"; // #방법1: 점 표기법 활용
person["favoriteFood"] = "떡볶이"; // #방법2: 괄호 표기법 활용

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

console.log(person);

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // person 객체안에 name프로퍼티가 들어 있는가 => 존재한다면, true
console.log(result1);
let result2 = "cat" in person; // 존재하지 않는다면 => false
