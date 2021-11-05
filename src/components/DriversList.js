import React from 'react';
import { drivers } from '../data/driver.json';
import DriverCard from './DriverCard';
import './DriversList.css'

export default function DriversList() {
  return (
    <div className='list-container'>
      {drivers.map(({ carNumber, nickname, name }) => (
        <DriverCard key={`${carNumber} ${nickname}`} {...{ carNumber, nickname, name }} />
      ))}
    </div>
  );
}
