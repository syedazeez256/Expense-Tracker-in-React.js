import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import react, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpense = props.data.filter((year) => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filteredYearHandler}
        />
        <ExpenseChart expenses={filteredYearExpense} />
        <ExpenseList items={filteredYearExpense} />
      </Card>
    </div>
  );
};
export default Expenses;
