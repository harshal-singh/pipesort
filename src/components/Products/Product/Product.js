import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="Product">
      <div className="Product__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="Product__details">
        <div className="mt-4 mb-3">
          <h4 className="Product__name">{product.title}</h4>
          <h5 className="Product__category">- {product.category}</h5>
        </div>
        <div className="d-flex align-items-baseline justify-content-between">
          <span className="Product__rating">⭐ {product.rating.rate}</span>
          <span className="Product__price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};
export default Product;
