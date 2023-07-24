import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
    count: 0,
    email: "",
    tel: "",
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const inputCountHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      count: event.target.value,
    }));
  };

  const inputEmailHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const inputTelHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      tel: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
      count: 0,
      email: "",
      tel: "",
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          <div className="new-payment__control">
            <label>수량</label>
            <input
              type="number"
              min="0"
              max="100"
              onChange={inputCountHandler}
              value={objectState.count}
            />
          </div>
          <div className="new-payment__control">
            <label>이메일</label>
            <input
              type="email"
              onChange={inputEmailHandler}
              value={objectState.email}
            />
          </div>
          <div className="new-payment__control">
            <label>휴대폰 번호</label>
            <input
              type="tel"
              onChange={inputTelHandler}
              value={objectState.tel}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
