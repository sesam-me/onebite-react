import { useState } from "react";
import useInput from "../hooks/userInput";
// # 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState(); // 여긴 안됨..

// 2. 조건부로 호출될 수 없다.

// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
// 메서드명 앞에 'use'를 붙여주면 리액트는 커스텀 훅이라고 판단하게 되어, 다른 리액트 훅을 내부에서 호출한다고 하더라고 오류가 발생하지 않는다.
// function useInput() {
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

const HookExam = () => {
  const state = useState(); // 클래스 컴포넌트는 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능 O

  // 2. 조건부로 호출될 수 없다.
  // -> 왜? 조건문이나 반복문 내부에서 호출하게 되면 서로 다른 hook들의 호출 순서가 엉망이 되어 버리는 현상 발생해서 내부적인 오류가 발생할 수 있다.
  // if (true) {
  //     const state = useState();
  // }

  // 3.
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
