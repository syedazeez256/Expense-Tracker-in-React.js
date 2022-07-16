import ExpenseItems from "./components/ExpenseItems";

function App() {
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is paragraph !</p>
      <ExpenseItems
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;
