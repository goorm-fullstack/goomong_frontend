import React, { useState, useEffect } from 'react';
import * as S from './Style';
import logo from '../../../assets/images/common/logo.png';
import searchBtn from '../../../assets/svg/ico_search.png';
import Gnb from '../Gnb/Gnb';
import { Link, Route } from 'react-router-dom';

const Header: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const popularSearchTerms: string[] = ['인기검색어1', '인기검색어2', '인기검색어3', '인기검색어4'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popularSearchTerms.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.header>
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
              <input className="search-input" type="text" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
            </div>
            <button type="submit" className="search-button-container">
              <img src={searchBtn} alt="search" className="searchBtn" />
            </button>
          </form>
          <div className="join">
            <ul className="join-list">
              <li className="login">
                <Link to="#null">로그인</Link>
              </li>
              <li className="new-in">
                <Link to="#null">회원가입</Link>
              </li>
              <li className="customer-center">
                <Link to="#null">고객센터</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="gnb">
          <Gnb />
        </div>
      </div>
    </S.header>
  );
};

export default Header;
