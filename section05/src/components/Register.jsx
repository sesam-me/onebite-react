import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  //   const [name, setName] = useState("이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  //   console.log(input);

  // onChange함수 중복 줄이기
  // 통합 핸들러 만들기
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //   const onChangeName = (e) => {
  //     setInput(
  //       // 스프레드 연산자
  //       {
  //         ...input, // name말고 다른 값은 그대로 가져와서 set하겠다.
  //         name: e.target.value,
  //       }
  //     );
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({ ...input, birth: e.target.value });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({ country: e.target.value });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({ ...input, bio: e.target.value });
  //   };

  return (
    <div>
      <div>
        <input
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          {/* ## value값으로 저정함.. */}
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
