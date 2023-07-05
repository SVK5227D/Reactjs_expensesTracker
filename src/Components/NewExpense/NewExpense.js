import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseData = (newValue) => {
    const expenseData = {
      ...newValue,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const addExpenseButtonHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          cancelExpense={stopEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
