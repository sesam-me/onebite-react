// EMS 방법
import { add, sub } from "./math.js"; // 확장자까지 필수로 적어줘야 함..
import mul from "./math.js"; // 'export default'로 하면 따로 import한다.

// import mul, { add, sub } from "./math.js"; // 합치기도 가능

// // 구조 할당 방법
// // const { add, sub } = require("./math.js");
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2)); // import할 때 불러질 메서드명도 바꿀 수 있다.

// # 라이브러리 import
import randomcolor from "randomcolor"; // 라이브러리는 경로를 명시하는게 아니라 라이브러리명만 명시하면 된다.

const color = randomcolor();
console.log(color);
