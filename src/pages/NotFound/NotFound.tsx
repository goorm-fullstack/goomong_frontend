import React from 'react';

import * as S from './NotFoundStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';

const NotFound: React.FC = () => {
  return (
    <S.NotFoundStyles>
      <Header />
      <Footer />
    </S.NotFoundStyles>
  );
};

export default NotFound;
