import React from 'react';
import * as S from './MyPagePaymentStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';

const MyPagePayment: React.FC = () => {
  return (
    <S.MyPagePaymentStyles>
      <Header />
      <div className="mypage-payment-container">
        <MyPageLeft />
        <div className="payment-container">
          <div className="title">
            결제내역
            <div className="small">결제 내역을 관리할 수 있어요</div>
          </div>
        </div>
      </div>
    </S.MyPagePaymentStyles>
  );
};

export default MyPagePayment;
