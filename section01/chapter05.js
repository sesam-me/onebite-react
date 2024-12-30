// 1. Numbe Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity; // 양의 무한값
let mInf = -Infinity; // 음의 무한값 

let nan = NaN; // 불가능한 값

console.log(1 * "hello"); // Nan이 나옴

// 2. String Type
let myName = "ddd";
let myLoncation = "위치";
let introduce = myName + myLoncation;

let introduceText = `${myName}은 ${myLoncation}에 거주합니다.`;
console.log(introduceText);
// 이런걸 템플릿 리터럴 문법이라고 부른다.

// 3. Boolean Type
let isSwitchOn = true;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
// 어떠한 값도 넣지 않았을 때
let none;
console.log(none);

// null vs. undefined Type
// null은 의도적으로 빈값을 넣을 때
// undefied는 진짜 값이 없을 때