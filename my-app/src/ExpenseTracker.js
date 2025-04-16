import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseDisplay = ({ expenses, onDelete }) => {
  return (
    <div className="expense-display">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.category}: ${expense.amount}</span>
            <button className="delete-button" onClick={() => onDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const addExpense = () => {
    if (amount && category) {
      setExpenses([...expenses, { amount, category }]);
      setAmount('');
      setCategory('');
    }
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="add-button" onClick={addExpense}>
          Add Expense
        </button>
      </div>
      <ExpenseDisplay expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
};

export default ExpenseTracker;
