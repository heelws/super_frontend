import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //4자리의 연도, number
  });

  // let expensesContent = <p>값이 없습니다</p>;
  // if (filteredExpenses.length > 0) {
  // expensesContent = filteredExpenses.map((item) => (
  // <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  // ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>값이 없습니다</p>
      )}

      {/* 조건이 true면 : 이전을 return하고 false면 : 이후 return */}
    </Card>
  );
};

export default Expenses;
