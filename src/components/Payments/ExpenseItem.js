import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div className="expenses-item__count">{props.count}</div>
        <div className="expenses-item__email">{props.email}</div>
        <div className="expenses-item__tel">{props.tel}</div>
        <button
          className="delete-button"
          onClick={() => props.deleteExpenseItem(props.index)}
        >
          delete
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
