import React, { useEffect, useState } from 'react';

import * as S from './SellerRankStyles';
import Header from '../../components/layout/Header/Header';
import { Link } from 'react-router-dom';
import RankModel from '../../components/Popular/RankModel/RankModel';
import Footer from '../../components/layout/Footer/Footer';
import Bg_Black from '../../assets/images/index/bg_black.png';

interface SellerInfo {
  money: string;
  sellerName: string;
  imageUrl: string;
}

interface CategoryRank {
  category: string;
  sellers: SellerInfo[];
}

interface SellerListInfo {
  imageUrl?: string;
  category: string;
  sellerName: string;
  totalMoney: number;
  totalReview: number;
  totalTransaction: number;
  star: number;
}

const SellerRank: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number>(0);

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

  const sellerData: SellerListInfo[] = [
    { category: '재능 카테고리', sellerName: '판매자명', totalMoney: 255220000, totalReview: 555, totalTransaction: 555, star: 4.89999 },
    { category: '재능 카테고리', sellerName: '판매자명', totalMoney: 255220000, totalReview: 555, totalTransaction: 555, star: 4.6 },
    { category: '재능 카테고리', sellerName: '판매자명', totalMoney: 255220000, totalReview: 555, totalTransaction: 555, star: 4.6 },
    { category: '재능 카테고리', sellerName: '판매자명', totalMoney: 255220000, totalReview: 555, totalTransaction: 555, star: 4.6 },
    { category: '재능 카테고리', sellerName: '판매자명', totalMoney: 255220000, totalReview: 555, totalTransaction: 555, star: 4.6 },
  ];

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
    setCurrentMonth(date.getMonth() + 1);
  }, []);
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  const formatRating = (star: number) => {
    return star.toFixed(1);
  };

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
    return result + '원';
  };
  return (
    <S.SellerRankStyles>
      <Header />
      <div className="seller-rank-container">
        <div className="top-nav">
          <Link to="/seller-rank" className="rank">
            랭킹
          </Link>
          <Link to="/seller-find" className="find">
            찾기
          </Link>
        </div>
        <div className="rank-content">
          <div className="title">
            {currentYear}년 {currentMonth}월 판매자 순위 TOP 5
          </div>
          <div className="rank-model">
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
          <div className="bottom">
            <div className="top">TOP 10</div>
            <div className="align-menu">
              <div className="left">
                <div className="left-category">
                  재능 카테고리
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                    <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </div>
                <div className="left-local">
                  지역 선택
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                    <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </div>
              </div>
              <div className="right">
                <div className="align-standard">
                  정렬 기준
                  <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                    <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                </div>
              </div>
            </div>
            <div className="seller-list">
              {sellerData.map((item, index) => (
                <div className={`seller-list-item ${index === sellerData.length - 1 ? 'last-item' : ''}`} key={index}>
                  <Link to="#null">
                    <div className="image-container">{item.imageUrl ? <img src={item.imageUrl} alt="" /> : defaultImage}</div>
                    <div className="right">
                      <div className="category">{item.category}</div>
                      <div className="seller-name">{item.sellerName}</div>
                      <div className="total-list">
                        <span className="money">
                          총수익<span className="number">{formatCurrency(item.totalMoney)}</span>
                        </span>
                        <span className="transaction">
                          총거래<span className="number">{item.totalTransaction}</span>
                        </span>
                        <span className="review">
                          총리뷰<span className="number">{item.totalReview}</span>
                        </span>
                        <span className="star">★</span>
                        <span className=" star-number">{formatRating(item.star)}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="black-bg">
        <img src={Bg_Black} alt="bg-black" />
        <div className="main-bg-text">
          <div className="text">
            <div className="bg-text">
              구몽에 <strong>판매자 등록</strong>하고
            </div>
            <div className="bg-text bg-second-text">수익을 만들어 보세요.</div>
          </div>
          <div className="btn">
            <Link to="#null">
              <button type="submit" className="bg-btn">
                판매자 등록하기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </S.SellerRankStyles>
  );
};

export default SellerRank;
