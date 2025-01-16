// 1.콜백함수
function main(value){
    console.log(1);
    console.log(2)
    console.log(value)
}

function sub() {
    console.log("i am sub");
}

main(sub);

// 함수 표현식으로 쓰면?
main(function sub() {
    console.log("i am sub");
})

// 함수 표현식에서는 익명함수로 써도 ㄱㅊ
// 방법 1
main(function () {
    console.log("i am sub");
})

// 방법 2. 조금 더 단축
main(() => {
    console.log("i am sub");
})


// 2. 콜백함수의  활용

// ## 콜백함수 활용 X
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5)
// => 콜백함수를 이용하면 굳이 이렇게 함수를 겹치게 사용할 필요가 없다


// ## 콜백함수 사용 O
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx *2);
});
// 콜백함수를 이용하여 함수 활용이 다양해지고 코드가 더 간결해진다.


// 더 간단하게 표현!
repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx *2);
});