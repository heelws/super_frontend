//adduser.js practice/4-3
import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const entereUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || entereUserAge.trim().length === 0) {
      setError({
        title: "유효하지 않은 입력값",
        message: "유효한 나이와 이름을 입력해주세요 (빈 값이 아닌).",
      });
      return;
    }
    if (+entereUserAge < 1) {
      setError({
        title: "유효하지 않은 나이",
        message: "유효한 나이를 입력해주세요 (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, entereUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자 이름</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">나이</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
