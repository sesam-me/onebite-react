// 1. 함수 표현식
function funcA() {
    console.log("funcA")
}

let varA = funcA; // 함수를 변수에 담을 수 있음
varA() // 그럼 이렇게 변수를 함수처럼 부를 수 있음

//--------------------------------------------------

// # 간단하게, 변수를 선언하면서 함수를 바로 담아버릴 수도 있음
let varB = function funcB() {
    console.log("funcB")
}

varB();
// funcB(); // 이런 함수는 함수처럼 불러서 사용할 수 없기 때문에 -> 함수명(funcB)이 없어도 됨(익명함수)

//---------------------------------------------------

// # 함수 표현식으로 만들 함수들은 값으로써 취급이 되기 때문에 '호이스팅'이 되지 않는다.
varB_2() // 이건 안불러와 짐..


// # 익명함수 예시
let varB_2 = function () { // 익명함수
    console.log("funcB")
}


// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC());

