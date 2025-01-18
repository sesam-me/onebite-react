// 1. Spread 연산자
// -> Spead : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr1배열을 arr2배열에 넣고 싶을 때
let arr2_1 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
// 이런식으로 할 수 있지만, arr[1]값이 사라질 수도 있는거임.
// 가장 큰 문제는 하나하나씩 넣어주기 귀찮다는거임!!!

// 해결: spread연산자 활용
// ...arr1: arr1을 ...(흩뿌려주겠다!!)
let arr2_2 = [4, ...arr1, 5, 6];

// # 활용1: 객체에서도 활용 가능
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1, // obj1을 흩뿌려주겠다
  c: 3,
  d: 4,
};

console.log(obj2);

// # 활용2: 함수에서 활용 가능
function funcA(p1, p2, p3) {
  // 매개변수 3개를 받는다.
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// 여러개의 매개변수를 받아야 할 때 배열 형태로 한 방에 여러 개의 매개변수를 받아올 수 있음
// ** rest가 아니라 다른 변수명을 써도 된다!! ...처럼 점 3개만 붙으면 rest 매개변수라는 의미가 된다.
function funcB(...rest) {
  // 한 방에 매개변수를 받겠다!
  // 매개변수를 정의하는 공간인 소괄호 안에서 사용이 되었기 때문에, spread연산자가 아니라 rest 매개변수라는 점을 주의!
  console.log(rest);
}

funcB(...arr1);

// # 활용1
function funcC(one, two, ...rest) {
  // 한 방에 매개변수를 받겠다!
  // 매개변수를 정의하는 공간인 소괄호 안에서 사용이 되었기 때문에, spread연산자가 아니라 rest 매개변수라는 점을 주의!
  console.log(one); // 첫 번째 매개변수를 꼭 다른 이름으로 받고 싶다고 하면, one을 추가해서 받으면됨..이후 나머지가 rest에 들어간다
  console.log(two); // 두 번째 매개변수를 받고 보여줌!
  console.log(rest);
}

funcC(...arr1);

// #주의
// ...rest의 의미가 나머지 매개변수를 다 받겠다. 라는 뜻이라서
// ...rest 뒤에는 매개변수가 더 이상 올 수없다.
// function funcD(one, ...rest, three) {
//     console.log(one);
//     console.log(rest);
//   }

//   funcD(...arr1);
