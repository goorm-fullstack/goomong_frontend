import React from 'react';
import * as S from './ProductStyles';
import { Link } from 'react-router-dom';
interface ProductProps {
  imageUrl: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
  review: number;
}

const Product: React.FC<ProductProps> = ({ imageUrl, sellerName, productName, price, rating, review }) => {
  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  return (
    <S.Product>
      <Link to="#null">
        <div className="product">
          <div className="image-container">
            <Link to="/item/detail/1">{/* <img src={imageUrl} alt={productName} className="product-image" /> */}</Link>
          </div>
          <div className="product-info">
            <div className="product-left">
              <div className="seller-name">{sellerName}</div>
              <div className="product-name">
                <Link to="/item/detail/1">{productName}</Link>
              </div>
            </div>
            <div className="product-right">
              <div className="product-price">{price}</div>
              <ul className="product-rating-review">
                <li className="product-rating">
                  <span className="rating-star">★</span> <span className="rating">{formatRating(rating)}</span>
                </li>
                <li className="product-review">{review}개의 평가</li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </S.Product>
  );
};

export default Product;
