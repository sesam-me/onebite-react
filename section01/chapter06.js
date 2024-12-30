// 1. 묵시적 형변환
// 자바스크립트 엔진이 알아서 형변환
let num = 10;
let str = "20";

const result = num + str;
// console.log(result); // "1020" 문자열로 형변환


// 2. 명시적 형병환
// 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개";
let strToNum2_1 = Number(str2)
let strToNum2_2 = parseInt(str2); // 문자열 포함된 숫자를 숫자로 형변환 할 때..숫자가 앞으로 나와있는 값이 앞에 있는게 좋음
console.log(strToNum2_1);
console.log(strToNum2_2);


// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");