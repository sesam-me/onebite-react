// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "ㅇㅇㅇ", hobby: "테니스" },
  { name: "ㅅㅅㅅ", hobby: "테니스" },
  { name: "ㄷㄷㄷ", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

// 안에 if문 안쓰고 바로 조건문만 써도 사용 가능
const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);
console.log(tennisPeople2);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  // (item, idx, arr) => {} // 이 부분이 콜백함수임..
  //   console.log(idx);
  return item * 2; // return값도 나옴
});

// map 활용: 겍체에서 이름만 뽑기
let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 "사전순으로" 정렬하는 메서드(숫자의 대소 비교가 아님)
// # 문자 정렬
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

// # 숫자 정렬
// 숫자 정렬을 하고 싶다면 콜백함수에서 정렬 기준을 넘겨줘야함
let arr3_2 = [10, 3, 5];

// # 오름차순
// arr3_2.sort((a, b) => {
//   if (a > b) {
//     // b가 a 앞에 와라(오름차순)
//     return 1; // -> b, a 배치
//   } else if (a < b) {
//     // a가 b앞에 와라
//     return -1; // -> a, b 배치
//   } else {
//     // 두 값의 자리를 바꾸지 마라
//     return 0; // a, b 자리를 그대로 유지지
//   }
// });
// console.log(arr3_2);

// # 내림차순
arr3_2.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라(오름차순)
    return -1; // -> b, a 배치
  } else if (a < b) {
    // a가 b앞에 와라
    return 1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지지
  }
});
console.log(arr3_2);

// 4. toSorted
// sort와 정렬 기능은 똑같음.
// sort는 원본 배열을 정렬함 / toSorted는 정렬된 '새로운 배열'을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를  하나의 문자열로 합쳐서 변환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-"); // 구분자는 ,(콤마)가 아니라 다른 것을 넣고 싶으면, 괄호 안에 넣으면 됨..
console.log(joined);
