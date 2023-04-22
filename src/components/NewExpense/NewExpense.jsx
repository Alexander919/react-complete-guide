import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";

function NewExpense({onAddExpense}) {
    const handleAddExpense = (expense) => {
        onAddExpense({
            ...expense,
            id: Math.random().toString()
        });
    }
    return (
        <div className="new-expense">
            <ExpenseForm handleAddExpense={handleAddExpense} />
        </div>
    );
}

export default NewExpense;