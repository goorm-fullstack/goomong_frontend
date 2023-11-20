import React, { useState } from 'react';
import Header from '../../components/layout/Header/Header';
import * as S from './SellerMapStyles';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import KakaoMap from './KakooMap';

const SellerMap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearchTerm = (e: React.FormEvent) => {
    e.preventDefault();
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
        <KakaoMap />
      </div>
      <Footer />
    </S.SellerMapStyles>
  );
};

export default SellerMap;
