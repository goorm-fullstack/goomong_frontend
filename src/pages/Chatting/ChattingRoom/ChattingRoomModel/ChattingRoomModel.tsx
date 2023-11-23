import React, { useState } from 'react';

import * as S from './ChattingRoomModelStyles';
import { formattingDate } from '../../../../util/func/functions';

interface RoomModel {
  roomId: string;
  roomName: string;
  lastMessage: string;
  itemDto: any;
  lastDate: Date;
  isSelected: boolean;
  onRoomClick: () => void;
}

const ChattingRoomModel: React.FC<RoomModel> = ({ roomId, roomName, lastMessage, itemDto, lastDate, isSelected, onRoomClick }) => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="22px" height="20px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  return (
    <S.ChattingRoomModelStyles>
      <div className={`room-model-container ${isSelected ? 'selected' : ''}`} onClick={onRoomClick}>
        <div className="image-container">{defaultImage}</div>
        <div className="right">
          <div className="top">
            <span className="nickname">{roomName}</span>
            <span className="date">{formattingDate(lastDate)}</span>
          </div>
          <div className="content-shorts">{lastMessage}</div>
        </div>
      </div>
    </S.ChattingRoomModelStyles>
  );
};

export default ChattingRoomModel;
