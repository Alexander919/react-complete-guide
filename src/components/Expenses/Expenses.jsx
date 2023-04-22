import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const onYearChange = (year) => {
        setFilteredYear(year);
    };

    const items = expenses.filter(exp => {
        if(filteredYear === "") return true; 
        return exp.date.getFullYear().toString() === filteredYear
    }).map((exp, i) => {
        // console.log(typeof exp.date.getFullYear(), typeof filteredYear);
        return <ExpenseItem key={i} title={exp.title} amount={exp.amount} date={exp.date} />
    });
    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={onYearChange} defaultYear={filteredYear} />
            {items}
        </Card>
    );
}

export default Expenses;