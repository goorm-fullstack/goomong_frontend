import React from 'react';
import * as S from './ProductStyles';
import { Link } from 'react-router-dom';

interface ProductProps {
  id?: number;
  imageUrl?: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
  review: number;
}

const Product: React.FC<ProductProps> = ({ id, imageUrl, sellerName, productName, price, rating, review }) => {
  const formatRating = (rating: number) => {
    return rating.toFixed(1);
  };

  //1000단위에 ,찍기
  const formatNumber2 = (num: string): string => {
    return num.toLocaleString();
  };

  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  return (
    <S.Product>
      <Link to={`/item/detail/${id}`}>
        <div className="product">
          <div className="image-container">{imageUrl ? <img src={imageUrl} alt="" /> : defaultImage}</div>
          <div className="product-info">
            <div className="product-left">
              <div className="seller-name">{sellerName}</div>
              <div className="product-name">{productName}</div>
            </div>
            <div className="product-right">
              <div className="product-price">{formatNumber2(price)}</div>
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
