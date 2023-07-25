import React, { useState } from "react";
import { styled } from "styled-components";

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
      <FormControl>
        <FormControlLabel>목표</FormControlLabel>
        <FormControlInput
          type="text"
          onChange={goalInputChangeHandler}
          isValid={isValid}
          // 인라인 css
          // style={{
          //   backgroundColor: isValid ? "transparent" : "salmon",
          //   borderColor: isValid ? "#ccc" : "red",
          // }}
        />
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
//style이 된 component
const FormControl = styled.div`
  margin: 0.5rem 0;
`;
const FormControlLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;
const FormControlInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  ${(props) =>
    !props.isValid &&
    `
  background-color: salmon;
  border-color: red;
  `}
`;
