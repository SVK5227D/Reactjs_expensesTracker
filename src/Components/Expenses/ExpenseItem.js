import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = props.date;
  // const expenseTitle = props.title;
  // const expensePrice = props.amount;
  // const month = props.date.toLocaleString('en-US',{month:'long' });
  // const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  // const year = props.date.getFullYear();

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toDateString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">&#8377;{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
