// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// 1.2 for of 반복문: 배열에서만 사용 가능(비슷한 for in은 객체에서만 사용 가능)
for (let item of arr) {
  //   console.log(item[0]);  // 이건 undefined로 나옴..
  //   console.log(item);
}

// 배열 인덱스와 for of 반복문의 차이점은 배열인덱스를 사용하면 나중에 인덱스로 뭔가 할 수 있음..

// 2. 객체 순회
let person = {
  name: "ㅇㅇㅇ",
  age: 27,
  hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys); // keys 값만 반환

for (let key of keys) {
  // 인덱스쓰고 싶으면 기본 for문 사용하면 됨..
  const value = person[key]; // 이렇게 하면 vaule값도 가져올 수 있음..
  //   console.log(key, value);
}

// 2.2 Object.vaules
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let vaules = Object.values(person);
console.log(vaules);

for (let value of vaules) {
  console.log(value);
}

// 2.3 for in: for of와 비슷, 객체만들 위해 존재하는 특수한 반복문
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
