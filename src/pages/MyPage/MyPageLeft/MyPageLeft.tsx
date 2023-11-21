import React from 'react';

import * as S from './MyPageLeftStyles';
import { Link } from 'react-router-dom';

interface UserInfo {
  imageUrl?: string;
  userName: string;
  userEmail: string;
  userLocal: string;
}

const MyPageLeft: React.FC = () => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  const defaultUser: UserInfo = {
    userName: '회원명',
    userEmail: 'example@goomong.com',
    userLocal: '서울 전체',
  };

  return (
    <S.MyPageLeftStyles>
      <div className="mypage-left-container">
        <div className="title">마이페이지</div>
        <div className="top">
          <div className="image-container">{defaultUser.imageUrl ? <img src={defaultUser.imageUrl} alt="" /> : defaultImage}</div>
          <div className="name">{defaultUser.userName}</div>
          <div className="email">{defaultUser.userEmail}</div>
          <div className="local">
            <svg width="14px" height="16px" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: '#6f7785' }}
                d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z"
              />
              <path style={{ fill: '#6f7785' }} d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z" />
            </svg>
            {defaultUser.userLocal}
          </div>
          <button type="button">판매자로 전환하기</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="title">정보 관리</div>
            <ul>
              <li className="info-set">
                <Link to="/mypage/info">계정 설정</Link>
              </li>
            </ul>
          </div>
          <div className="payment">
            <div className="title">결제 관리</div>
            <ul>
              <li className="payment-history">
                <Link to="/mypage/payment">결제내역</Link>
              </li>
              <li className="point">
                <Link to="/mypage/point">포인트</Link>
              </li>
            </ul>
          </div>
          <div className="active">
            <div className="title">활동 관리</div>
            <ul>
              <li className="board-history">
                <Link to="/mypage/board">작성한 글</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </S.MyPageLeftStyles>
  );
};

export default MyPageLeft;