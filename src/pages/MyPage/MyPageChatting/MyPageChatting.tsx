import React from 'react';
import * as S from './MyPageChattingStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import Chatting from '../../Chatting/Chatting';
const MyPageChatting = () => {
  return (
    <S.MyPageChattingStyles>
      <Header />
      <div className="mypage-chatting-container">
        <div className="mychatting-container">
          <MyPageLeft />
          <Chatting showLayout={false} />
        </div>
      </div>
      <Footer />
    </S.MyPageChattingStyles>
  );
};

export default MyPageChatting;
