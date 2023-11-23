import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import * as S from './SellerMapStyles';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import KakaoMap from './KakaoMap';
import MarkerInfoModel from './MarkerInfoModel/MarkerInfoModel';

interface User {
  userPlace?: string;
}

interface Seller {
  sellerId: number;
  sellerPlace: string;
}
interface MapProps {
  user?: User;
  seller: Seller[];
}

interface SellerInfo {
  sellerId: number;
  imageUrl?: string;
  sellerName: string;
  category: string;
  totalTransaction: number;
  totalReview: number;
  star: number;
  intro: string;
}
const SellerMap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const handleSearchTerm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const mapData: MapProps = {
    seller: [
      { sellerId: 2, sellerPlace: '경기도 성남시 분당구 판교로 264' },
      { sellerId: 3, sellerPlace: '경기도 성남시 분당구 판교로 256번길 7' },
      { sellerId: 4, sellerPlace: '경기도 성남시 분당구 판교로228번길 15 윈스동 4F' },
      { sellerId: 5, sellerPlace: '경기도 성남시 삼평동 621' },
    ],
  };

  const markerData: SellerInfo = {
    sellerId: 2,
    sellerName: '판매자명',
    category: '재능 카테고리',
    totalTransaction: 555,
    totalReview: 555,
    star: 4.9,
    intro: '판매자 소개글',
  };
  return (
    <S.SellerMapStyles>
      <Header />
      <div className="seller-map-container">
        <div className="top-nav">
          <Link to="/seller/rank" className="rank">
            랭킹
          </Link>
          <Link to="/seller/all" className="find">
            찾기
          </Link>
        </div>
        <div className="search-container ">
          <form action="submit" className="search-form">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="어떤 서비스가 필요하세요?" />
            <button type="submit" onClick={handleSearchTerm}>
              <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#8e94a0"
                  d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
                />
              </svg>
            </button>
          </form>
        </div>

        <KakaoMap user={mapData.user} seller={mapData.seller} isClicked={setShowDetail} />
        {showDetail && (
          <MarkerInfoModel
            sellerId={markerData.sellerId}
            imageUrl={markerData.imageUrl}
            sellerName={markerData.sellerName}
            category={markerData.category}
            totalTransaction={markerData.totalTransaction}
            totalReview={markerData.totalReview}
            star={markerData.star}
            intro={markerData.intro}
          />
        )}
      </div>
      <Footer />
    </S.SellerMapStyles>
  );
};

export default SellerMap;
