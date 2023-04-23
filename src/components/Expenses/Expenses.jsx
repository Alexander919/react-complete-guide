import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const onYearChange = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = expenses
        .filter(exp => exp.date.getFullYear() === filteredYear);

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={onYearChange} defaultYear={filteredYear} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;