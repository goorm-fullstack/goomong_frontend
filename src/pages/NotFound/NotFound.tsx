import React from 'react';

import * as S from './NotFoundStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <S.NotFoundStyles>
      <Header />
      <div className="not-found-container">
        <div className="one">404</div>
        <div className="two">페이지를 찾을 수 없습니다.</div>
        <div className="three">
          <p>페이지가 존개하지 않거나, 사용할 수 없는 페이지 입니다.</p>
          <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요</p>
        </div>
        <Link to="/">
          <button type="button">홈으로</button>
        </Link>
      </div>
      <Footer />
    </S.NotFoundStyles>
  );
};

export default NotFound;
