import React from 'react';

const Card = ({ title, description, children }) => (
  <div className="card h-100">
    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{title}</h5>
      <p className="card-text flex-grow-1">{description}</p>
      {children}
    </div>
  </div>
);

export default Card;
