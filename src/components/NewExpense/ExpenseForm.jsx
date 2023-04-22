import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({handleAddExpense}) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
   };

   const btnClick = (e) => {
        e.preventDefault();
        handleAddExpense({title, amount, date: new Date(date)});
        
        setTitle("");
        setAmount(0);
        setDate("");
   };

    return (
        <form action="" onSubmit={btnClick}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={title} onChange={titleChangeHandler} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={amount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={date} onChange={dateChangeHandler} type="date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;