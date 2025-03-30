import React, { useState } from 'react';

// SlotDisplay component (Props Component)
const SlotDisplay = ({ slot1, slot2, slot3 }) => {
  return (
    <div>
      <h2>
        {slot1} {slot2} {slot3}
      </h2>
      {slot1 === slot2 && slot2 === slot3 ? (
        <p>You Win!</p>
      ) : (
        <p>Try Again!</p>
      )}
    </div>
  );
};

// SlotMachine component (State Component)
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
    <div>
      <h1>Slot Machine</h1>
      <SlotDisplay slot1={slots[0]} slot2={slots[1]} slot3={slots[2]} />
      <button onClick={spin}>Spin</button>
    </div>
  );
};

export default SlotMachine;
