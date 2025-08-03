const ProductCard = ({ title, description, image, category, price }) => (
  <div className="card shadow-sm" style={{height:"400px"}}>
    <div className="card-body d-flex flex-column product-card-body">
      <h5 className="card-title mb-2">{title}</h5>
      <p className="card-text small mb-2 product-description">{description.slice(0, 100)}</p>
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={title}
          className="img-fluid product-image"
          loading="lazy"
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="small">{category}</div>
          <div className="fw-bold">${price}</div>
        </div>
        <button className="btn btn-primary w-100">Buy Now</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
