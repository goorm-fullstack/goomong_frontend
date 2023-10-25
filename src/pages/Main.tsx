import React from 'react';
import * as S from './Style';
import Header from '../components/layout/Header/Header';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import HotItem from '../components/HotItem/HotItem';
import Bg_Green from '../assets/images/index/bg_green.png';
import Bg_Blue from '../assets/images/index/bg_blue.png';
import Bg_Black from '../assets/images/index/bg_black.png';
import Review from '../components/Review/Review';
import Popular from '../components/Popular/Popular';
import Footer from '../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <S.main>
      <div className="main">
        <Banner />
        <Category />
        <HotItem />
        <div className="green-bg">
          <img src={Bg_Green} alt="bg-green" />
          <div className="bg-text">구몽에서 국내 최고의 재능 판매자에게</div>
          <div className="bg-text bg-second-text">
            <strong>무료 견적</strong>을 받아보세요
          </div>
          <Link to="#null">
            <button className="bg-btn">견적요청 바로가기</button>
          </Link>
        </div>
        <Review />
        <div className="blue-bg">
          <img src={Bg_Blue} alt="bg-blue" />
          <div className="bg-text">구몽 회원가입 하면</div>
          <div className="bg-text bg-second-text">
            <strong>100,000포인트</strong>를 드려요!
          </div>
          <Link to="#null">
            <button className="bg-btn">회원가입 바로가기</button>
          </Link>
        </div>
        {/* <Popular /> */}
        <div className="black-bg">
          <img src={Bg_Black} alt="bg-black" />
          <div className="bg-text">
            구몽에 <strong>판매자 등록</strong>하고
          </div>
          <div className="bg-text bg-second-text">수익을 만들어 보세요.</div>
          <Link to="#null">
            <button className="bg-btn">판매자 등록하기</button>
          </Link>
        </div>
        {/* <Footer /> */}
      </div>
    </S.main>
  );
}

export default Main;
