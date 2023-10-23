import React, { useState, useEffect } from 'react';
import '../../../style/global.css';
import './Header.css';
import logo from '../../../assets/images/common/logo.png';
import searchBtn from '../../../assets/svg/ico_search.png';
import Gnb from '../Gnb/Gnb';

const Header: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false); // 검색창 포커스 상태
  const popularSearchTerms: string[] = ['인기검색어1', '인기검색어2', '인기검색어3', '인기검색어4'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popularSearchTerms.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <div className="header-top">
        <h1>
          <img src={logo} alt="logo" className="header-logo" />
        </h1>
        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <div className="search-input-container">
            {!isFocused && (
              <div className="search-term" key={currentIndex}>
                <span className="term-number">{currentIndex + 1}.</span>
                {popularSearchTerms[currentIndex]}
              </div>
            )}
            <input
              className="search-input"
              type="text"
              onFocus={() => setIsFocused(true)} // 포커스될 때 상태 변경
              onBlur={() => setIsFocused(false)} // 포커스 해제될 때 상태 변경
            />
          </div>
          <button type="submit" className="search-button-container">
            <img src={searchBtn} alt="search" className="searchBtn" />
          </button>
        </form>
        <div className="join">
          <ul className="join-list">
            <li className="login">로그인</li>
            <li className="new-in">회원가입</li>
          </ul>
        </div>
      </div>
      <div className="gnb">
        <Gnb />
      </div>
    </div>
  );
};

export default Header;
