import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef(); //2
  const [enteredName, setEnteredName] = useState(" "); //1
  const [enterendNameIsValid, setEnteredNameIsValid] = useState(false); //4
  const [enteredNameIsTouched, setenteredNameIsTouched] = useState(false); //5 처음 enteredName이 touch X => false

  //input창의 값을 바꿀 때마다 그 값을 enteredName에 적절하게 변화 시켜주는 역할
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("enteredName", enteredName);

    setenteredNameIsTouched(true);

    //3 enteredName이 빈 값인 경우 제출 안되게
    if (enteredName.trim() === "") {
      console.log("submit fail");
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true); //enteredName이 값을 가지고 있다
    setEnteredName("");
  };

  //3 에러 메시지를 보여주는 경우, true -> 메시지 노출
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
