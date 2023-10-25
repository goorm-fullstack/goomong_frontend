import React from 'react';

import GoldMedal from '../../../assets/svg/ico_gold.png';
import SilverMedal from '../../../assets/svg/ico_silver.png';
import BronzeMedal from '../../../assets/svg/ico_bronze.png';

import '../../../Style/global.css';
import './RankModel.css';

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
    <div className="rank-model-container">
      <div className="rank-model-title">판매 금액 1위 {category}</div>
      <div className="top1">
        <img src={GoldMedal} alt="GoldMedal" className="medal-img" />
        <div className="money-seller-name">
          <div className="money">{sellers[0].money}</div>
          <div className="seller-name">{sellers[0].sellerName}</div>
        </div>
      </div>
      <div className="top2">
        <img src={SilverMedal} alt="SilverMedal" className="medal-img" />
        <div className="money-seller-name">
          <div className="money">{sellers[1].money}</div>
          <div className="seller-name">{sellers[1].sellerName}</div>
        </div>
      </div>
      <div className="top3">
        <img src={BronzeMedal} alt="BronzeMedal" className="medal-img" />
        <div className="money-seller-name">
          <div className="money">{sellers[2].money}</div>
          <div className="seller-name">{sellers[2].sellerName}</div>
        </div>
      </div>
      <div className="top4">
        <span className="rank-4">4</span>
        <div className="money-seller-name">
          <div className="money">{sellers[3].money}</div>
          <div className="seller-name">{sellers[3].sellerName}</div>
        </div>
      </div>
      <div className="top5">
        <span className="rank-5">5</span>
        <div className="money-seller-name">
          <div className="money">{sellers[4].money}</div>
          <div className="seller-name">{sellers[4].sellerName}</div>
        </div>
      </div>
    </div>
  );
};

export default RankModel;
