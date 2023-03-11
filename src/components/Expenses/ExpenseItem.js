import './ExpenseItem.css'
import React from 'react';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const expenseDate = new Date(2023, 2, 29);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.97;

    return (
        <div className='expense-item'>
            <ExpenseDate passingDate={props.date} />
            <div className='expense-item__description'>
                <h2 className=''>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;