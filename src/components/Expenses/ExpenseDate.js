import './ExpenseDate.css';
import React from "react";

const ExpenseDate = (props) => {

    const month = props.passingDate.toLocaleString("en-US", { month: 'long' });
    const day = props.passingDate.toLocaleString("en-US", { day: '2-digit' });
    // const month = props.passingDate.toLocaleString("de-DE", { month: 'long' });
    // const day = props.passingDate.toLocaleString("de-DE", { day: '2-digit' });
    const year = props.passingDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;