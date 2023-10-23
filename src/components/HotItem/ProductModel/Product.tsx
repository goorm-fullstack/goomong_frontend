import React from 'react';
import '../../../style/global.css';
import './Product.css';

interface ProductProps {
  imageUrl: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
}

const Product: React.FC<ProductProps> = ({ imageUrl, sellerName, productName, price, rating }) => {
  return (
    <div className="product">
      {/* <img src={imageUrl} alt={productName} className="product-image" /> */}
      <div className="product-image">Image</div>
      <div className="product-info">
        <div className="product-left">
          <div className="seller-name">{sellerName}</div>
          <div className="product-name">{productName}</div>
        </div>
        <div className="product-right">
          <div className="product-price">{price}</div>
          <div className="product-rating">{'★'.repeat(rating)}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
