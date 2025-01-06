// 1. 배열 생성
let arrA = new Array(); // 방법1 : 배열 생성자
let arrB = []; // 방법2: 배열 리터럴 (더 간결하기 때문에 대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);
// 배열에는 타입 상관없이 넣을 수 있다.

// 2. 배열 요소 접근
let item1 = arrC[0]; // 숫자(인덱스)로 접근

arrC[0] = "hello"; // 수정
console.log(arrC);
