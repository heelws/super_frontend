import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true); //값이 하나라도 들어있으면 true ex)'     dfnlwekcv'
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //값이 '' 경우, 배경 빨간색으로
    if (enteredValue.trim().length === 0) {
      //trim : space로 긴 빈 string 방지
      setIsValid(false); //기본은 true, 유효하지 않을 때, 빈 string이어서 입력이 안될 때 false
      setEnteredValue("");
      return; //return을 하지 않으면 if문을 통과해서 밑에 props까지 가지 때문에 값이 입력됨
    }
    props.onAddGoal(enteredValue);
  };
  // isValid가 아닐 때(빈 string일 때) invalid, 아닐 때는 빈 string
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // 인라인 css
          // style={{
          //   backgroundColor: isValid ? "transparent" : "salmon",
          //   borderColor: isValid ? "#ccc" : "red",
          // }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
