// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 다른 객체를 생성해서 할당하는 건 오류남..
animal = { a: 1 }; // 상수객체는 다시 바꿀 수 없음 => 고로 이건 오류남..

// 하지만, 이건 가능함
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 왜? 사수라는건 새로운 값을 할당하지 못하는 변수임..
// 아예 새로운 값을 할당하는 것은 문제가 되지만,..
// 저장되어 있는 값에 프로퍼티를 추가하는 방식은 문제가 안됨..

// 2. 메서드
// -> 값이 함수인 프로퍼티
const person = {
  name: "이정한",
  sayHi: function () {
    console.log("안녕");
  },

  // 익명함수
  function() {
    console.log("안녕");
  },

  // 화살표 함수
  sayHi1: () => {
    console.log("안녕");
  },

  // 메서드 선언
  sayHi1() {
    console.log("안녕");
  },
};

// 함수 호출
person.sayHi(); // 점 표기법으로 함수 호출
person["sayHi"]; // 괄호 표기법으로 함수 호출
