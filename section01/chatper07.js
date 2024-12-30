// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;

// 3. 복합 대입 연산자
// 복합 = 대입 + 산술
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
++num8;
num8++;

console.log(--num8); // 전위 연산 : 이 연산 전에 수행됨..그래서 결과값이 바로 적용되어서 보임
console.log(num8--); // 후위 연산 : 이 연산이 끝나고 나서 수행됨..그래서 결과값이 다음에 적용 됨
console.log(num8);

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);


// 6. 비교 연산자
let comp1 = 1 === 2; // === 는 타입까지 비교함.. ==는 타입은 비교안함
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 >= 1;

