import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
      count: 1,
      email: "super@super.com",
      tel: "010-1111-2222",
    },
  ]);

  // 추가 : 기존에 있던 state 값을 가지고 있는 상태로
  const getPaymentFormData = (data) => {
    console.log("data", data);
    console.log("expenses", expenses);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        count: data.count,
        email: data.email,
        tel: data.tel,
      },
      ...expenses, // 배열을 스프레드 연산자로 여러개가 있는 경우 요소들을 하나하나 처리할 수 있도록
    ]);
  };

  // 매개변수 id : primary key(특정 데이터베이스를 구별해줄 수 있는 유니크한 키값)
  const deleteExpenseItem = (index) => {
    //filter,slice는 array 메서드
    //1. filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환, id값 사용
    // const newFilteredArray = expenses.filter((item) => item.id !== id); // 해당 id값이 아닌 것들만 filter를 해서 볼 수 있게
    // setExpenses(newFilteredArray);
    //2. slice : 어떤 배열의 시작부터 끝까지에 대한 얕은 복사본을 새로운 배열 객체로 반환, index값 사용
    //[0,1,2,3, ... , index, index+1, ... ,n-1]
    //[0,1,2,3, ... , index-1, index+1, ... ,n-1]
    //[0,1,2,3, ... , index-1] [index+1, ... ,n-1]
    const beforeArray = expenses.slice(0, index);
    const afterArray = expenses.slice(index + 1); //끝은 생량 가능
    setExpenses([...beforeArray, ...afterArray]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

export default App;
