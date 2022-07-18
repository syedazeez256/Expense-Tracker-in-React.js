import Expenses from "./components/Expenses/Expenses";
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
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { data: expense })
  // );
  return (
    <div>
      <NewExpense />
      <Expenses data={expense} />
    </div>
  );
};

export default App;
