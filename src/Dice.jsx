// Dice.jsx
import React from 'react';
import Dau from './Dau';

const Dice = ({ dice }) => {
  return (
    <div>
      {dice.map((v, index) => (
        <Dau key={index} value={v} />
      ))}
    </div>
  );
};

export default Dice;
