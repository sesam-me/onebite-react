// math 모듈
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// # CJS 방법
// 모듈을 내보내겠다.
// module.exports = {
//   add,
//   sub,

//   // add : add, // key : vaule => add(value)를 add(key)로 내보내겠다. 둘이 같을 때는 add 이렇게 하나만 써도 됨..
//   // sub : sub,
// };

// # EMS 방법
// export { add, sub }; // 한번에 export하기(낱개로도 가능.)
