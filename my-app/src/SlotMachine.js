import React, { useState } from 'react';
import './App.css';

const SlotDisplay = ({ slot1, slot2, slot3 }) => {
  return (
    <div className="slot-display">
      <h2 className="slots">
        {slot1} {slot2} {slot3}
      </h2>
      {slot1 === slot2 && slot2 === slot3 ? (
        <p className="result win">You Win!</p>
      ) : (
        <p className="result lose">Try Again!</p>
      )}
    </div>
  );
};

const SlotMachine = () => {
  const [slots, setSlots] = useState(['🍎', '🍌', '🍒']);
  const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉'];

  const spin = () => {
    setSlots([
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ]);
  };

  return (
    <div className="slot-machine">
      <h1 className="title">🎰 Slot Machine 🎰</h1>
      <SlotDisplay slot1={slots[0]} slot2={slots[1]} slot3={slots[2]} />
      <button className="spin-button" onClick={spin}>
        Spin
      </button>
    </div>
  );
};

export default SlotMachine;
