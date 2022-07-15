import "./ExpenseItems.css";
function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.98</div>
      </div>
    </div>
  );
}

export default ExpenseItems;