import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Login.module.css";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(); //자식 컴포넌트에서 ref 새로 선언

  //창 focus하는 함수, active 로직이 ref를 핸들링하는 로직
  const active = () => {
    inputRef.current.focus();
  };

  //active 동작하게 해주는, ref에서 focus할 때 active 함수 실행할 수 있게
  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef} //
      />
    </div>
  );
});

export default Input;
