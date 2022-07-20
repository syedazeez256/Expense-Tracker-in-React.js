import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/NewExpense/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: 294.97,
    date: new Date(2021, 2, 13),
  },
  {
    id: 3,
    title: "New Desk",
    amount: 100.12,
    date: new Date(2021, 9, 10),
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const addExpense = (expenses) => {
    setExpense((prevExpens) => {
      return [expenses, ...prevExpens];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { data: expense })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses data={expense} />
    </div>
  );
};

export default App;
