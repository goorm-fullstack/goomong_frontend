import React, { useState, useEffect } from 'react';

import * as S from './ChattingRoomStyles';
import ChattingRoomModel from './ChattingRoomModel/ChattingRoomModel';
import Instance from '../../../util/API/axiosInstance';
import { getCookie } from '../../../util/func/functions';

interface RoomModel {
  roomId: string;
  roomName: string;
  lastMessage: string;
  itemDto: any;
  lastDate: Date;
}

interface Props {
  setRoomId: (number: number) => void;
}

const ChattingRoom: React.FC<Props> = ({ setRoomId }) => {
  const [roomListData, setRoomListData] = useState<RoomModel[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const memberId = getCookie('id');

  useEffect(() => {
    Instance.get('/api/chat/' + memberId).then((response) => {
      setRoomListData(response.data);
    });
  }, []);

  const handleRoomClick = (id: number) => {
    setSelectedId(id);
    setRoomId(id);
  };

  return (
    <S.ChattingRoomStyles>
      <div className="chatting-room-container">
        <div className="all-room">전체 채팅</div>
        {roomListData.map((room) => (
          <ChattingRoomModel
            key={room.roomId}
            roomId={room.roomId}
            roomName={room.roomName}
            lastMessage={room.lastMessage}
            itemDto={room.itemDto}
            lastDate={room.lastDate}
            isSelected={Number(room.roomId) === selectedId}
            onRoomClick={() => handleRoomClick(Number(room.roomId))}
          />
        ))}
      </div>
    </S.ChattingRoomStyles>
  );
};

export default ChattingRoom;
