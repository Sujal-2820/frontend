import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="cards-container">
      <div className="card">
        <h1>Card 1</h1>
        <div>Desc 1</div>
      </div>
      <div className="card">
        <h1>Card 2</h1>
        <div>Desc 2</div>
      </div> 
      <div className="card">
        <h1>Card 3</h1>
        <div>Desc 3</div>
      </div>
    </div>
  );
}

export default Cards;
