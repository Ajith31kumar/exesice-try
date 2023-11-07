import React from 'react';

function PriceCard(props) {
  return (
    <div className="price-card">
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <ul>
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>{props.button}</button>
    </div>
  );
}

export default PriceCard;
