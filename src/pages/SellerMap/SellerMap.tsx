import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import * as S from './SellerMapStyles';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import KakaoMap from './KakaoMap';
import MarkerInfoModel from './MarkerInfoModel/MarkerInfoModel';

interface User {
  userPlace: string;
}

interface Seller {
  sellerId: number;
  sellerPlace: string;
}
interface MapProps {
  user?: User;
  seller?: Seller[];
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
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const mapData: MapProps = {
    seller: [
      { sellerId: 2, sellerPlace: '경기도 성남시 분당구 판교로 264' },
      { sellerId: 3, sellerPlace: '경기도 성남시 분당구 판교로 256번길 7' },
      { sellerId: 4, sellerPlace: '경기도 성남시 분당구 판교로228번길 15 윈스동 4F' },
      { sellerId: 5, sellerPlace: '경기도 성남시 삼평동 621' },
      { sellerId: 6, sellerPlace: '경기도 성남시 분당구 삼평동 726' },
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
        <KakaoMap
          user={mapData.user ? mapData.user : { userPlace: '경기도 성남시 분당구 판교로 242 PDC A동 902호' }}
          seller={mapData.seller}
          isClicked={setShowDetail}
        />
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
