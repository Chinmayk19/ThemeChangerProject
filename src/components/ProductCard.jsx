import React from 'react';

const ProductCard = ({ title, description, image, category, price }) => (
  <div className="card h-100 shadow-sm">
    <div className="card-body d-flex flex-column">
      <div className="mb-2">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="flex-grow-1">
        <p className="card-text small">{description.slice(0, 80)}{description.length > 80 ? '...' : ''}</p>
      </div>
      <div className="mt-2">
        <img
          src={image}
          alt={title}
          className="img-fluid mb-2"
          style={{ maxHeight: '120px', objectFit: 'contain', width: '100%' }}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <div className="small">{category}</div>
        <div className="fw-bold">${price}</div>
      </div>
      <button className="btn btn-primary mt-3">Buy Now</button>
    </div>
  </div>
);

export default ProductCard;
