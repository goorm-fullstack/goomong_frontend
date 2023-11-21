import React from 'react';

import * as S from './ChattingStyles';
import Header from '../../components/layout/Header/Header';
import ChattingRoom from './ChattingRoom/ChattingRoom';

const Chatting: React.FC = () => {
  return (
    <S.ChattingStyles>
      <Header />
      <div className="chatting-container">
        <ChattingRoom />
      </div>
    </S.ChattingStyles>
  );
};

export default Chatting;
