import React from 'react';

import * as S from './MyPagePointStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';

interface PointProps {
  havePoint: number;
  discardPoint: number;
}

const MyPagePoint: React.FC = () => {
  const pointData: PointProps = {
    havePoint: 1110,
    discardPoint: 1110,
  };

  return (
    <S.MyPagePointStyles>
      <Header />
      <div className="mypage-point-container">
        <MyPageLeft />
        <div className="point-container">
          <div className="title">
            포인트
            <div className="small">내 포인트를 관리할 수 있어요</div>
          </div>
          <div className="total-point"></div>
        </div>
      </div>
    </S.MyPagePointStyles>
  );
};

export default MyPagePoint;
