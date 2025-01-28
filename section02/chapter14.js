// # async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 Promise를 반환하도록 반환해주는 키워드

async function getData() {
  return {
    name: "ㅇㅇㅇ",
    id: "winterlood",
  };
}

// console.log(getData());

// --------
// 애초에 Promise를 반환하는 함수라면 async가 하는 역할을 하지 않지만, Promise가 없다면 async가 Promise가 반환되도록 한다.
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "ㅇㅇㅇ",
        id: "winterlood",
      });
    }, 1500);
  });
}
// console.log(getData());

// # await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// async - await 를 쓰기 전에는 .then을 사용해서 값을 가져와야 했음..
// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

// => async - await을 이용해 비동기 작업을 마치 동기 작업을 처리하는듯이 수행할 수 있다.
async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
