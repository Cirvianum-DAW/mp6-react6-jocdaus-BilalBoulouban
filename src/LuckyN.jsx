// LuckyN.jsx
import React, { useState } from 'react';
import Dice from './Dice';

const LuckyN = () => {
  const [rolls, setRolls] = useState([]);

  const handleRollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setRolls([...rolls, roll]);
  }

  return (
    <div className="lucky-n">
      <Dice dice={rolls} />
      <button onClick={handleRollDice}>Tirar Daus</button>
    </div>
  );
};

export default LuckyN;

