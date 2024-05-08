import React from 'react';
import './dau.css'; // Importa l'estil CSS

const Dau = ({ value }) => {
  let colorClass = '';
  switch (value) {
    case 1:
      colorClass = 'Dau--1'; // Utilitza les classes definides en dau.css
      break;
    case 2:
      colorClass = 'Dau--2';
      break;
    case 3:
      colorClass = 'Dau--3';
      break;
    case 4:
      colorClass = 'Dau--4';
      break;
    case 5:
      colorClass = 'Dau--5';
      break;
    case 6:
      colorClass = 'Dau--6';
      break;
    default:
      colorClass = 'Dau--default'; // Defineix una classe per a valors inesperats
  }

  return <div className={`Dau ${colorClass}`}>{value}</div>; // Aplica les classes combinades
};

export default Dau;
