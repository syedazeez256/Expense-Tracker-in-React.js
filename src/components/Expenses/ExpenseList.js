import react from "react";
import "./ExpenseList.css";
import ExpenseItems from "./ExpenseItems";

const ExpenseList = (props) => {
  let expenseContent = <p>No Results found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;