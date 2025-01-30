import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부 자바스크립트 표현식만 넣을 수 있다.
// 삼항 연산자나 변수의 이름처럼 특정 값으로 평가될 수 있는 코드(if문, for문 안됨)
// 2. 숫자, 문자역, 배열 값만 렌더링된다.(boolean, undefined, null은 오류는 발생하지 않지만, 화면에 렌더링도 안됨/객체는 화면에 바로 렌더링 되지 않고 값을 뺴와서 해야함)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
  const user = {
    name: "Ddd",
    isLogin: true,
  };

  // 방법 1 - if문 사용
  if (user.isLogin) {
    return (
      <div
        // # css 사용 방법: 방법1 - className 사용
        // HTML에서는 class라고 하지만.
        // JSX에서는 자바스크립트와 HTML을 함께 쓰고 있기 때문에 자바크립트 예약어는 class를 쓸 수 없다.
        className="logout"

        // # css 사용 방법: 방법2 - style 사용
        // style={{
        //   backgroundColor: "red",
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  // 방법 2 - 삼항연산자 사용
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
