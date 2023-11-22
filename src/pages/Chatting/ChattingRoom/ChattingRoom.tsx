import React, { useState } from 'react';

import * as S from './ChattingRoomStyles';
import ChattingRoomModel from './ChattingRoomModel/ChattingRoomModel';

interface RoomModel {
  imageUrl?: string;
  nickName: string;
  date: string;
  contentShorts: string;
  type: string;
  product?: string;
  id: number;
}
const ChattingRoom: React.FC = () => {
  const roomListData: RoomModel[] = [
    { id: 1, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 2, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 3, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 4, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 5, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 6, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 7, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 8, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 9, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 10, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 11, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 12, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
    { id: 13, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '디자인', product: '상품명' },
    { id: 14, nickName: '닉네임', date: '2023.10.18', contentShorts: '채팅내용입니다.', type: '문의' },
  ];

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleRoomClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <S.ChattingRoomStyles>
      <div className="chatting-room-container">
        <div className="all-room">전체 채팅</div>
        {roomListData.map((room) => (
          <ChattingRoomModel
            key={room.id}
            nickName={room.nickName}
            date={room.date}
            contentShorts={room.contentShorts}
            type={room.type}
            product={room.product}
            id={room.id}
            isSelected={room.id === selectedId}
            onRoomClick={() => handleRoomClick(room.id)}
          />
        ))}
      </div>
    </S.ChattingRoomStyles>
  );
};

export default ChattingRoom;
