import React from 'react';
import './App.css';
import SlotMachine from './SlotMachine'; // Ensure SlotMachine.js exists in the src folder
import ExpenseTracker from './ExpenseTracker';

const App = () => {
  return (
    <div className="app-container">
      <div className="section">
        <SlotMachine />
      </div>
      <div className="section">
        <ExpenseTracker />
      </div>
    </div>
  );
};

export default App;
