import React, { useState } from 'react';
import '../../../style/global.css';
import './Gnb.css';

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="gnb-container">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {isOpen && (
          <ul className="menu-items">
            <li className="burger-btn">
              <div className="burger-local-btn">지역별</div>
              <div className="burger-service-btn">서비스별</div>
            </li>
            <li>
              <ul className="local-menu">
                <li>서울특별시</li>
                <li>경기도</li>
                <li>대구광역시</li>
                <li>부산광역시</li>
                <li>인천광역시</li>
                <li>광주광역시</li>
                <li>대전광역시</li>
                <li>울산광역시</li>
                <li>강원도</li>
                <li>충청북도</li>
                <li>충청남도</li>
                <li>경상북도</li>
                <li>경상남도</li>
                <li>전라북도</li>
                <li>전라남도</li>
                <li>제주도</li>
              </ul>
            </li>
          </ul>
        )}
      </div>
      <div className="left">
        <div className="left-menu">
          <ul className="ll-menu">
            <li>전체 카테고리</li>
            <li>재능 마켓</li>
            <li>재능 교환</li>
            <li>재능 기부</li>
          </ul>
          <ul className="lr-menu">
            <li className="lr-find">재능 판매자 찾기</li>
            <li>견적 요청</li>
            <li>구몽 생활</li>
            <li>고객 후기</li>
          </ul>
        </div>
      </div>
      {/* lift */}
      <div className="right">
        <div className="right-txt">재능을 판매하고 수익을 만들어 보세요!</div>
        <button className="right-btn">판매자 등록하기</button>
      </div>
    </div>
  );
};

export default Gnb;
