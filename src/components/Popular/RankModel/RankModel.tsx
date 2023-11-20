import React from 'react';

import GoldMedal from '../../../assets/svg/rank/ico_gold.png';
import SilverMedal from '../../../assets/svg/rank/ico_silver.png';
import BronzeMedal from '../../../assets/svg/rank/ico_bronze.png';
import * as S from './RankModelStyles';
import { Link } from 'react-router-dom';

interface SellerInfo {
  money: string;
  sellerName: string;
  imageUrl: string;
}

interface RankProps {
  category: string;
  sellers: SellerInfo[];
}

const RankModel: React.FC<RankProps> = ({ category, sellers }) => {
  return (
    <S.RankModelStyle>
      <div className="rank-model-container">
        <div className="rank-model-title">판매 금액 1위 {category}</div>
        <Link to="#null">
          <div className="top1">
            <img src={GoldMedal} alt="GoldMedal" className="medal-img" />
            <div className="money-seller-name">
              <div className="money">{sellers[0].money}</div>
              <div className="seller-name">{sellers[0].sellerName}</div>
            </div>
            <div className="image-container">
              {/* <img src={sellers[0].imageUrl} alt={sellers[0].sellerName} className="seller-image" /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#eaecee">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </div>
          </div>
        </Link>
        <Link to="#null">
          <div className="top2">
            <img src={SilverMedal} alt="SilverMedal" className="medal-img" />
            <div className="money-seller-name">
              <div className="money">{sellers[1].money}</div>
              <div className="seller-name">{sellers[1].sellerName}</div>
            </div>
            <div className="image-container">
              {/* <img src={sellers[1].imageUrl} alt={sellers[1].sellerName} className="seller-image" /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#eaecee">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="#null">
          <div className="top3">
            <img src={BronzeMedal} alt="BronzeMedal" className="medal-img" />
            <div className="money-seller-name">
              <div className="money">{sellers[2].money}</div>
              <div className="seller-name">{sellers[2].sellerName}</div>
            </div>
            <div className="image-container">
              {/* <img src={sellers[2].imageUrl} alt={sellers[2].sellerName} className="seller-image" /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#eaecee">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="#null">
          <div className="top4">
            <span className="rank-4">4</span>
            <div className="money-seller-name">
              <div className="money">{sellers[3].money}</div>
              <div className="seller-name">{sellers[3].sellerName}</div>
            </div>
            <div className="image-container">
              {/* <img src={sellers[3].imageUrl} alt={sellers[3].sellerName} className="seller-image" /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#eaecee">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="#null">
          <div className="top5">
            <span className="rank-5">5</span>
            <div className="money-seller-name">
              <div className="money">{sellers[4].money}</div>
              <div className="seller-name">{sellers[4].sellerName}</div>
            </div>
            <div className="image-container">
              {/* <img src={sellers[4].imageUrl} alt={sellers[4].sellerName} className="seller-image" /> */}
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#eaecee">
                <path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </S.RankModelStyle>
  );
};

export default RankModel;
