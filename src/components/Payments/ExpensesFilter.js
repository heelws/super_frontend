import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>priceFilter</label>
        <input
          id="inputFilter"
          type="range"
          min="0"
          max="300"
          onChange={dropdownChangeHandler}
        ></input>
      </div>
    </div>
  );
};

export default ExpensesFilter;
