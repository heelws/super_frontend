//simpleInput practice/5_1
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(" ");
  const [enterendNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setenteredNameIsTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setenteredNameIsTouched(true);

    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
    } else setEnteredNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("enteredName", enteredName);

    setenteredNameIsTouched(true);

    // enteredName이 빈 값인 경우 제출 안되게
    if (enteredName.trim() === "") {
      console.log("submit fail");
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    setEnteredName("");
  };

  const nameInputBluerHandler = (event) => {
    console.log("event onBlur");
    setenteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
  };

  // 에러 메시지를 보여주는 경우, true -> 메시지 노출
  const nameInputIsInvalid = !enterendNameIsValid && enteredNameIsTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">당신의 이름은?</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          //form에 초점을 주고 잃을 때 판단할 수 있는 이벤트 리스너 : onBlur
          onBlur={nameInputBluerHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">이름값은 빈 값이 아니어야 합니다.</p> //4
        )}
      </div>
      <div className="form-actions">
        <button>제출하기</button>
      </div>
    </form>
  );
};

export default SimpleInput;
