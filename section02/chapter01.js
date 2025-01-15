// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  // ture가 됨..
  console.log("falsy");
}

// 2. truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  // true
  console.log("Truthy");
}

// 3.활용 사례
// 활용 전전
function printName(person) {
  if (person === undefined || person === null) {
    console.log("person의 값이 없음");
  }
  console.log(person.name);
}

let person = { name: "ㅇㅇㅇ" };
printName(person);

// 활용 후(조건문 간결해짐..)
function printName2(person2) {
  // undefind나 null이 들어오면
  if (!person2) {
    // !falthy가 되기 때문에 true가 됨..
    console.log("person의 값이 없음");
  }
  console.log(person.name);
}

let person2 = null;
