import react, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: "",
  //     enteredDate: "",
  //     enteredAmount: "",
  //   });

  const ChangeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: e.target.value,
    // });
    // setEnteredInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };
  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: e.target.value,
    // });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={handleForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={ChangeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
