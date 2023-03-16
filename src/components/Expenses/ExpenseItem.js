import './ExpenseItem.css'
import React, { useState } from 'react';
import Card from '../UI/card';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 2, 29);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.97;

    const [oldTitle, newTitle] = useState(props.title)

    const clickHandler = () => {
        newTitle('Clicked!')
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate passingDate={props.date} />
            <div className='expense-item__description'>
                <h2 className=''>{oldTitle}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;