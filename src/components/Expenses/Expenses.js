import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import react, { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearExpense = props.data.filter((year) => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  const filteredYearHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filteredYearHandler}
          />
          <ExpenseList items={filteredYearExpense} />
        </Card>
      </li>
    </div>
  );
};
export default Expenses;
