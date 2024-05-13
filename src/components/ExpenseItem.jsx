import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>New TV</h2>
        <div className="expense-item__price">€400.50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
