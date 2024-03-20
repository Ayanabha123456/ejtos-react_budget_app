import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("Budget value exceeds 20000!!")
        }
        else if(event.target.value < totalExpenses)
        {
            alert("Budget value is lower than spending!!")
        }
        else{
        setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{newBudget}</span>
<input type="number" step="10"  value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
