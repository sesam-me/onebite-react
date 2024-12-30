// 함수
function getArea(width, height) {
    function another() { // 중첩함수도 가능함
        console.log("another");
    }

    another();
    let area = width + height;

    return area;
    console.log("여긴 안나옴") // return에서 끝나기 때문에 여기는 안나온다..
}

let area1 = getArea(10, 20);
let area2 = agetArea(20, 30);

// 호이스팅 -> 끌어올리다라는 뜻
// 호출되는 곳보다 선언이 뒤에 있어도 '호이스팅'되기 때문에 상관없음..