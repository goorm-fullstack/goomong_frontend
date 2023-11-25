import React from 'react';

import * as S from './SellerBrandModelStyles';
import { Link } from 'react-router-dom';
import { commaNumber } from '../../../util/func/functions';

interface SellerBrandProps {
  id: number;
  imageUrl?: string;
  sellerName: string;
  p_category: string;
  content: string;
  totalMoney: number;
  totalReview: number;
  totalTransaction: number;
  star: number;
}

const defaultImage = (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
    <path
      fill="#aab1bc"
      d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
    />
  </svg>
);

const SellerBrandModel: React.FC<SellerBrandProps> = ({
  id,
  imageUrl,
  sellerName,
  p_category,
  content,
  totalMoney,
  totalReview,
  totalTransaction,
  star,
}) => {
  //억,만 단위 표시 , 1000단위 ,찍기
  const formatCurrency = (money: number): string => {
    const billion: number = Math.floor(money / 100000000);
    const tenThousand: number = Math.floor((money % 100000000) / 10000);

    let result: string = '';
    if (billion > 0) {
      result += `${billion}억 `;
    }
    if (tenThousand > 0) {
      result += `${tenThousand.toLocaleString()}만`;
    }
    if (money === null) return '0원';
    else if (money < 10000) return commaNumber(money) + '원';
    return result + '원';
  };

  return (
    <S.SellerBrandModelStyles>
      <Link to={`/seller/detail/${id}`}>
        <div className="seller-brand-model-container">
          <div className="top">
            <div className="image-container">{imageUrl ? <img src={imageUrl} alt="" /> : defaultImage}</div>
          </div>
          <div className="seller-brand-contents">
            <div className="seller-brand-model-seller-info">
              <p className="seller-brand-model-seller-name">{sellerName}</p>
              <ul className="seller-brand-model-category-list">
                <li>{p_category}</li>
              </ul>
            </div>
            <div className="seller-brand-model-content">{content}</div>
            <div className="total-list">
              <span className="money">
                총수익 <span className="number">{formatCurrency(totalMoney)}</span>
              </span>
              <span className="transaction">
                총거래 <span className="number">{totalTransaction === null ? 0 : totalTransaction}건</span>
              </span>
              <div className="bottom">
                <span className="review">
                  총리뷰 <span className="number">{totalReview === null ? 0 : totalReview}개</span>
                </span>
                <span className="star"> ★</span>
                <span className=" star-number">{star === null ? 0 : star.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </S.SellerBrandModelStyles>
  );
};

export default SellerBrandModel;
