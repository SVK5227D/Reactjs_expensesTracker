import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Filter/ExpensesFilter";
import "./Expense.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [yearSelected, setyearSelected] = useState("2023");

  const filterHandler = (selectedYear) => {
    console.log("onchange called");
    setyearSelected(selectedYear);
  };

  const filterExpense = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onChangeFilter={filterHandler}
        />
        <ExpenseChart expenses={filterExpense}/>
        {filterExpense.length === 0 ? (
          <p className="expenses-list__fallback">No expenses found.</p>
        ) : (
          filterExpense.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              date={expenses.date}
              title={expenses.title}
              amount={expenses.amount}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
