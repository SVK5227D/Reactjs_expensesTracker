// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const listExpenses = [];

function App() {
  const [expenses,setExpense] = useState(listExpenses)
  const addExpenseHandler = expense => {
   setExpense((prevExpense) => {
    return [expense,...prevExpense]
   });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
