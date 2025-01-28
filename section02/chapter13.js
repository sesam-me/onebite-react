// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수를 executor라고 부른다.
//   // 지금 {} 괄호 안에 있는 것 executor라고 부른다.

//   // #상황1: resolve - 비동기 작업 성공으로 처리할 경우
//   //   setTimeout(() => {
//   //     console.log("안녕");
//   //     resolve("성공했음..");
//   //   }, 2000);

//   // #상황2: reject - 비동기 작업 실패로 처리할 경우
//   setTimeout(() => {
//     reject("실패했음..");
//   });
// });

// // 결과 보기
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// # 활용 방법
const promise = new Promise((resolve, reject) => {
  const num = 10;
  setTimeout(() => {
    //num의 타입이 "number"일 경우
    if (typeof num === "number") {
      resolve(num + 10); // >> resolve(10 + 10)
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

// # 활용 방법 1-1 -> promise 결과값을 이용해보기(then 메서드 - resolve(비동기 작업 성공했을 때) 이후 함수)
// resolve의 인수로 전달한 결과 값을 매개 변수로 제공
promise.then((value) => {
  //   console.log(value); // >> 20
});

// reject(비동기 작업 실패패했을 때) 이후
promise.catch((error) => {
  //   console.log(error);
});

// # 활용 방법 1-2 -> Promise Chaining: Promise를 연결한다
// 합치는 것도 가능
// then메서드는 promise를 객체를 그대로 반환하기 때문에 catch 메서드를 함께 쓰느 것도 가능..
promise
  .then((value) => {
    // console.log(value); // >> 20
  })
  .catch((error) => {
    console.log(error);
  });

// # 활용 방법 2 -> num 값을 동적으로 바꿔가면서 사용해보자
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // const num = 10;  // 삭제
    setTimeout(() => {
      //num의 타입이 "number"일 경우
      if (typeof num === "number") {
        resolve(num + 10); // >> 아래의 result값이 = num + 10 이거임..
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

const p = add10(0); // num = 0
p.then((result) => {
  // result = 0(num) + 10
  console.log(result); // >> 10

  const newP = add10(result); // num = 10
  newP.then((result) => {
    // result = 10(num) + 10
    console.log(result); // >> 20

    // 이런 식으로 계속하면 콜백 지옥이 발생함..(계속 들여쓰기 해야함..)
    // Promise는 콜백지옥을 방지하기 위해서 retrun값을 제공? 함
    // 프로미스 객체를 반환하도록 해주면 이제는 이 then 메서드의 결과 값이 이 새로운 프로미스 객체(newP)가 된다.
  });
});

// return 반환
p.then((result) => {
  console.log(result);
  const newP = add10(result);
  return newP; // 여기 return
}).then((result) => {
  console.log(result);
});

// 더 간결하게..
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 여기 retrun값 받아서
  })
  .then((result) => {
    // 여기서 사용
    console.log(result);
    return add10(result); // 여기 retrun값 받아서
  })
  .then((result) => {
    // 여기서 사용
    console.log(result);
    return add10(undefined); // 여기 retrun값 받아서
    // 만약 중간에서 오류가 발생한다면, 어디서 오류가 발생하더라도
    // 마지막 catch메서드가 실행되어서 'num이 숫자가 아닙니다.'메시지가 뜬다.
  })
  .then((result) => {
    // 여기서 사용
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
