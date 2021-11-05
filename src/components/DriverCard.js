import React from 'react';
import BusIcon from '../assets/icons/busList.png';
import './DriverCard.css';

export default function DriverCard({ carNumber, nickname, name }) {
  return (
    <div className="card-container">
      <div className="icon-container">
        <img src={BusIcon} alt="bus icon" style={{ height: 14, width: 14 }} />
      </div>
      <div className="details-container">
        <p className="text-header">{carNumber}</p>
        <p className="text-body">{`${name} (${nickname}) `}</p>
      </div>
    </div>
  );
}
