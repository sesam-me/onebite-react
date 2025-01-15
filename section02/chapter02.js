function retrunFalse() {
  console.log("False 함수");
  return false;
}

function retrunTrue() {
  console.log("True 함수");
  return true;
}

// # 예시 1
// 첫 번째 피연산자가 이미 flase이기 때문에, 두번째 피연산자에는 접근조차 하지 않는다.
// retrunTrue()함수를 호출조차 되지 않음..
console.log(retrunFalse() && retrunTrue());
// 단락 평가 O
// >> False 함수, false
// true값은 안나옴

console.log(retrunTrue() && retrunFalse());
// 단락 평가 X
// >> True 함수 true False 함수 false  -> 이렇게 다 나옴옴

console.log(retrunTrue() || retrunFalse());
// 단락 평가 O
// >> True 함수 true

// # 예시 2
// falsy한 값, truthy한 값에도 적용된다.
function retrunFalthy() {
  console.log("Falthy 함수");
  return undefined;
}

function retrunTruthy() {
  console.log("Truthy 함수");
  return undefined;
}

console.log(retrunTruthy() || retrunFalthy());
// 단락 평가 O
// retrunTruthy만 나오고 호출 끝.

// # 단락 평가 활용 사례
// 활용 전
function printName1(person) {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
}

// 활용  후 1: 활용 전의 if 조건문 없어도 된다!
function printName2(person) {
  console.log(person && person.name);
}

printName2(); // >> undefined
printName2({ name: "ㅇㅇㅇ" }); // >> ㅇㅇㅇ

// 활용 후 2
function printName3(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName3(); // >> "person의 값이 없음"
// 1) undifined는 falthy한 값
// 2) const name = undifined가 됨..(이미 false이기 때문에 뒤에 값은 의미 없음..어차피 false 단락 평가)
// 3) consol.log(undifined || "person의 값이 없음" - true) -> 이렇게 되기 때문에 "person의 값이 없음" 이게 나옴..

printName3({ name: "ㅇㅇㅇ" }); // >> ㅇㅇㅇ
// 1) const name = person - truthy한 값 && person.name -> truthy한 값으로 person.name이 나옴..
// 2) console.log(name -> truthy한 값 || "person의 값이 없음" - truthy한 값)
// -> 단락 평가로 인해 앞에 값이 나옴(ㅇㅇㅇ)
