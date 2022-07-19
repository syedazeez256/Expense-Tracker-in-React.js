import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import react, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filteredYearHandler}
        />
        <ExpenseItems
          title={props.data[0].title}
          amount={props.data[0].amount}
          date={props.data[0].date}
        />
        <ExpenseItems
          title={props.data[1].title}
          amount={props.data[1].amount}
          date={props.data[1].date}
        />
        <ExpenseItems
          title={props.data[2].title}
          amount={props.data[2].amount}
          date={props.data[2].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
