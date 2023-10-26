import React from 'react';

import GoldMedal from '../../../assets/svg/ico_gold.png';
import SilverMedal from '../../../assets/svg/ico_silver.png';
import BronzeMedal from '../../../assets/svg/ico_bronze.png';
import * as S from './Style';
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
              <img src={sellers[0].imageUrl} alt={sellers[0].sellerName} className="seller-image" />
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
              <img src={sellers[1].imageUrl} alt={sellers[1].sellerName} className="seller-image" />
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
              <img src={sellers[2].imageUrl} alt={sellers[2].sellerName} className="seller-image" />
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
              <img src={sellers[3].imageUrl} alt={sellers[3].sellerName} className="seller-image" />
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
              <img src={sellers[4].imageUrl} alt={sellers[4].sellerName} className="seller-image" />
            </div>
          </div>
        </Link>
      </div>
    </S.RankModelStyle>
  );
};

export default RankModel;
