import React from 'react';

import * as S from './ChattingStyles';
import Header from '../../components/layout/Header/Header';
import ChattingRoom from './ChattingRoom/ChattingRoom';
import Footer from '../../components/layout/Footer/Footer';
import ChattingUI from './ChattingUI/ChattingUI';

interface Opponent {
  imageUrl?: string;
  nickname: string;
  product: string;
  money: number;
  date: string;
  content: string[];
}

interface UIModel {
  opponent: Opponent;
  bigDate: string;
  nowDate: string;
  content: string[];
}

const Chatting: React.FC = () => {
  const chattingUIData: UIModel = {
    opponent: {
      nickname: '마켓',
      product: '이거 구매했어요 상품명',
      money: 500000,
      date: '11월 13일 10:10',
      content: ['첫 번째 메시지', '두 번째 메시지', '세 번째 메시지'],
    },
    bigDate: '2023.11.14',
    nowDate: '11월 14일 10:10',
    content: ['첫 번째 메시지', '두 번째 메시지', '세 번째 메시지'],
  };
  return (
    <S.ChattingStyles>
      <Header />
      <div className="chatting-container">
        <ChattingRoom />
        <ChattingUI
          opponent={chattingUIData.opponent}
          product={chattingUIData.opponent.product}
          bigDate={chattingUIData.bigDate}
          nowDate={chattingUIData.nowDate}
          content={chattingUIData.content}
        />
      </div>

      <Footer />
    </S.ChattingStyles>
  );
};

export default Chatting;
