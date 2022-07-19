import Expenses from "./components/Expenses/Expenses";
import ExpenseFilter from "./components/NewExpense/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expense = [
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
  const addExpense = (expenses) => {
    console.log("Data entered");
    console.log(expenses);
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
