import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // props로 받아서 쓰는 곳에서 선언 validateValue 함수가 enteredValue 값을 인자로 받아서 enteredValue 값이 바뀔 때마다 validateValue가 실행이 되게
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
