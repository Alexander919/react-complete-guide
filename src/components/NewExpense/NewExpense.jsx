import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense({ onAddExpense }) {
    const [newExpenseOpened, setNewExpenseOpened] = useState(false);

    const handleAddExpense = (expense) => {
        onAddExpense({
            ...expense,
            id: Math.random().toString()
        });
    };

    let contents = <button onClick={() => setNewExpenseOpened(true)}>Add New Expense</button>;
    if(newExpenseOpened) { 
        contents = <ExpenseForm handleAddExpense={handleAddExpense} handleFormClose={() => setNewExpenseOpened(false)}/>;
    }

    return (
        <div className="new-expense">
            {contents}
        </div>
    );
}

export default NewExpense;