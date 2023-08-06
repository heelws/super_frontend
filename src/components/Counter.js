//counter.js
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};
  //counter를 이 counter 컴포넌트로 가져와야 함
  const counter = useSelector((state) => state.counter); //3
  const dispatch = useDispatch(); //4

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandelr = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={decrementHandelr}>-1</button>
    </main>
  );
};

export default Counter;
