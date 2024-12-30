// 1. if 조건문 (if문)
let num  = 10;

if (num >=10) {
    console.log("num은 10이상합니다.")
    console.log("조건이 참입니다.")
}
else if (num >= 3) {
    console.log("조건이 3이상 입니다.")
}
else {
    console.log("조건이 거짓입니다.")
}


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog" : {
        console.log("개");
        break;
    }
    case "bare" : {
        console.log("곰");
        break;
    }
    default: {
        console.log("그런 동물은 모릅니다.")
    }
}