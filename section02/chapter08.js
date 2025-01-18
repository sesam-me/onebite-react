// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr1) {
  // function () 매개변수 이렇게 들어오는 거임.. => (현재 매개변수 값, 현재 반복 카운트, 전체 배열)
  //   console.log(idx, item * 2);
});

// 활용
let doubleArr = [];

arr1.forEach((item) => {
  // arr1의 값을 한개씩 넣으면서 for문 돌림
  doubleArr.push(item * 2);
  //   console.log(doubleArr);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude); // >> true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 존재하지 않는다면 -1을 반환함
let arr3 = [1, 2, 3];
const index = arr3.indexOf(2);
// console.log(index); // >> 1

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는(true를 반환하는)
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 만족하는 값이 없으면 -1 반환환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});

// 더 짧게 만드는 방법~~
const findedIndex3 = arr4.findIndex((item) => item === 2);

const findedIndex2 = arr4.findIndex((item) => {
  if (item === 2) return true; // 2개 해놔도 반환값은 가장 빠른 1개만 나옴..
  if (item % 2 !== 0) return true; // item===2를 만족 못했어도, 이미 1이 여기서 만족했기 때문.. 인덱스 값은 0이 나올 것임..
});

// true가 되는 값이 2인데, 2의 인덱스는 1임
// console.log(findedIndex); // >> 1
// console.log(findedIndex2);
// console.log(findedIndex3);

// 인덱스를 찾는 건 동일한데 왜 indexOf랑 findIndex 둘다 필요한가?
// indexOf는 원시 타입의 값이 들어있을 때가 아니라 객체 타입의 값들이 저장된 배열에는 정확한 요소의 위치를 찾아낼 수 없다.

let objArr = [{ name: "ㅇㅇㅇ" }, { name: "ㄴㄴㄴ" }];

// console.log(objArr.indexOf({ name: "ㅇㅇㅇ" })); // >> -1 이 나오면서 못 찾음
// 왜? indexOf는 얖은 비교 사용하기 때문
// console.log(objArr.findIndex((item) => item.name === "ㅇㅇㅇ")); // 콜백 함수를 이용해서 직접 프로퍼티 값을 기준으로 비교할 수 있다.
// 정리: 원시타입 비교할 때는 indexOf // 객체 비교할 때는 findIdex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "ㅇㅇㅇ" }, { name: "ㄴㄴㄴ" }];
const finded = arr5.find((item) => item.name === "ㅇㅇㅇ");
console.log(finded);
