import { useReducer } from "react";

// # 3번: 상태를 어떻게 변화시킬지 적용
// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  //   if (action.type === "INCREASE") {
  //     return state + action.data; // return만 해주면 값은 자동으로 state값으로 반영된다.
  //   } else if (action.type === "DECREASE") {
  //     return state - action.data;
  //   }

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0); // # 1번: useReducer 생성
  // 컴포넌트 내부에서 dispatch함수를 호출하게 되면, 상태 변화가 요청이 되고,
  // useReducer는 상태 변화를 실제로 처리하게 될 함수를 호출한다.
  // 상태 변화를 실제로 처리하게 될 함수는 직접 만들어야 한다.
  // useReducer(상태 변화를 실제로 처리하게 될 함수, state의 초기값)

  const onClickPlus = () => {
    // # 2번: dispatch의 액션 명시
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체체
    dispatch({
      // 안에 있는걸 action객체라고 부름.. 위에
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
