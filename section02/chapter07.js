// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
// const newLength = arr1.push(4, 5, 6); // 길이를 반환함
// console.log(newLength); // >> 6

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

// console.log(popedItem); // 뽑힌 아이템 >> 3
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
// const shiftedItem = arr3.shift(); // 맨 앞자리에 있는 아이템 나옴 >> 1
// console.log(shiftedItem, arr3);

// 4. unshifs
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength = arr4.unshift(0); // 맨 앞에 0을 추가하겠다.
// console.log(newLength); // 반환값은 길이임 >> 4
// console.log(arr4);

// push, pop보다 shift, unshift 메서드가 느리다..
// -> 왜? push, pop은 가장 마지막에 한 값으로 하는 거임. shift, unshift는 맨 앞값이라서 뒤에서 부터 앞까지 다 읽어온 다음에 처리해야함.

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5); // 2번째 부터 4번째까지 잘라내기(2 <= x < 5), 마지막은 +1해서 적어줘야함..
const sliced2 = arr5.slice(2); // 마지막 매개변수를 안써주면, 마지막까지 잘라냄.
console.log(arr5); // 값이 배열에 바로 저장되는 것은 아님님
console.log(sliced);
console.log(sliced2);

let sliced3 = arr5.slice(-2); // 뒤에서부터 2개만 잘라냄냄
console.log(sliced3);

// 주의: 앞에서 부터 자를 때(양수를 넣을 때)는 인덱스로 한다.
// 뒤에서 부터 자를 때는(음수를 넣을 때)는 자를 개수로 한다.

// 5. concat
// 2개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
