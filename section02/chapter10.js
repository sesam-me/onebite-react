// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// 매개변수 아무것도 안주면 현재시간 나옴..
console.log(date1);

let date2 = new Date("2000/01/01/10:10:10"); // "/" 대신 ".", "-" 다 가능.
let date3 = new Date(2000, 1, 1, 10, 10, 10); // , 도 가능
// 시간은 : 을 써야함..
console.log(date2);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// "1970.01.01 00시 00분 00초"는 UTC라고 부름
// UTC: 세계 모든 나라가 표준으로 사용하는 시간이 시각되는 지점
let ts1 = date1.getTime(); // 현재 시간의 타임스탬프
console.log(ts1); // ms로 나옴
let date4 = new Date(ts1); // 타임스탬프에 해당하는 시간으로 Date객체 생성

console.log(date1, date4); // 날짜를 확인해보면, 현재 시간과 타임스탬프로 구한 시간이 동일한 것을 확인할 수 있다.

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 주의: month는 0부터 시작이다(1월은 0이다.) 그래서 +1을 해서 사용하면 보기 좋다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기s
// 위에처럼 get을 set으로 바꿔주면 된다.
date1.setFullYear(2023);
date1.setMonth(2); // 주의: month는 0부터 시작이다(1월은 0이다.) 그렇다면 2는 3월이다.
date1.setDate(14);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); // 시분초를 제외하고 현재날짜만 보여주고 싶을 때
console.log(date1.toLocaleDateString()); // 영어말고 현지화된 시간 포맷으로 출력
