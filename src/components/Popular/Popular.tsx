import React from 'react';
import RankModel from './RankModel/RankModel';
import * as S from './Style';
import { Link } from 'react-router-dom';

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
        { money: '1,341,380,120원', sellerName: '판매자 브랜드명1', imageUrl: 'https://via.placeholder.com/800x300?text=seller+1' },
        { money: '1,341,380,12원', sellerName: '판매자 브랜드명2', imageUrl: 'https://via.placeholder.com/800x300?text=seller+2' },
        { money: '1,341,380,1원', sellerName: '판매자 브랜드명3', imageUrl: 'https://via.placeholder.com/800x300?text=seller+3' },
        { money: '1,341,380원', sellerName: '판매자 브랜드명4', imageUrl: 'https://via.placeholder.com/800x300?text=seller+4' },
        { money: '1,341,38원', sellerName: '판매자 브랜드명5', imageUrl: 'https://via.placeholder.com/800x300?text=seller+5' },
      ],
    },
  ];

  return (
    <S.Popular>
      <div className="popular-container">
        <div className="popular-top">
          <div className="popular-title">인기 판매자 순위 TOP 5</div>
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

        <div className="more-btn">
          <Link to="#null">
            <button type='submit'>
              판매자 더보기
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="48.000000pt"
                height="48.000000pt"
                viewBox="0 0 48.000000 48.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#d3d5da" stroke="none">
                  <path
                    d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                  />
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </S.Popular>
  );
};

export default Popular;
