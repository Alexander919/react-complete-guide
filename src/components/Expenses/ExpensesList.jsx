import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses }) {

    if(!expenses.length) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    const items = expenses.map(exp => <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} /> )

    return (
        <ul className="expenses-list">
            {items}
        </ul>
    );
}

export default ExpensesList;