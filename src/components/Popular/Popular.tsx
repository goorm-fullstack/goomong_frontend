import React from 'react';
import RankModel from './RankModel/RankModel';
import '../../Style/global.css';
import './Popular.css';

interface SellerInfo {
  money: string;
  sellerName: string;
  imageUrl: string;
}

interface CategoryRank {
  category: string;
  sellers: SellerInfo[];
}

const Popular: React.FC = () => {
  const rankData: CategoryRank[] = [
    {
      category: '카테고리명',
      sellers: [
        { money: '1,341,380,120원', sellerName: '판매자 브랜드명1', imageUrl: 'path/to/image1.jpg' },
        { money: '1,341,380,12원', sellerName: '판매자 브랜드명2', imageUrl: 'path/to/image2.jpg' },
        { money: '1,341,380,1원', sellerName: '판매자 브랜드명3', imageUrl: 'path/to/image3.jpg' },
        { money: '1,341,380원', sellerName: '판매자 브랜드명4', imageUrl: 'path/to/image4.jpg' },
        { money: '1,341,38원', sellerName: '판매자 브랜드명5', imageUrl: 'path/to/image5.jpg' },
      ],
    },
  ];

  return (
    <div className="popular-container">
      <h2>인기 판매자 순위 TOP 5</h2>
      <div className="popular-sub-title">상위 카테고리에서 가장 많이 판매한 인기 판매자에요.</div>
      <div className="ranking-container">
        {rankData.map((rank, index) => (
          <RankModel key={index} category={rank.category} sellers={rank.sellers} />
        ))}
        {rankData.map((rank, index) => (
          <RankModel key={index} category={rank.category} sellers={rank.sellers} />
        ))}
        {rankData.map((rank, index) => (
          <RankModel key={index} category={rank.category} sellers={rank.sellers} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
