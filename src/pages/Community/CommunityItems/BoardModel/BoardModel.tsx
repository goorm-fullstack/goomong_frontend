import React from 'react';
import * as S from './BoardModelStyles';
import { Link } from 'react-router-dom';

interface BoardModelProps {
  imageURL?: string;
  b_category: string;
  p_category: string;
  title: string;
  content: string;
  local: string;
  like: number;
  comment: number;
  time: number;
  isLastItem?: boolean;
  clickLike?: boolean;
}

const BoardModel: React.FC<BoardModelProps> = ({
  imageURL,
  b_category,
  p_category,
  title,
  content,
  local,
  like,
  comment,
  time,
  isLastItem = false,
}) => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="130px" height="130px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );
  return (
    <S.BoardModelStyles $isLastItem={isLastItem}>
      <Link to="/community_detail">
        <div className="board-model-container">
          <div className="board-model-right">
            <div className="board-model-image-container">{imageURL ? <img src={imageURL} alt="" /> : defaultImage}</div>
            <div className="board-model-image-right">
              <ul className="board-model-category-list">
                <li>{b_category}</li>
                <li>{p_category}</li>
              </ul>
              <div className="board-model-title">{title}</div>
              <div className="board-model-content">{content}</div>
              <div className="board-model-local">{local}</div>
              <div className="board-model-bottom">
                <div className="board-model-like">
                  <svg height="13" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#aab1bc"
                      d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                    />
                  </svg>
                  {like}
                </div>
                <div className="board-model-comment">
                  <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16px" height="14px">
                    <g id="info" />
                    <g id="icons">
                      <path
                        d="M20,1H4C1.8,1,0,2.8,0,5v10c0,2.2,1.8,4,4,4v3c0,0.9,1.1,1.3,1.7,0.7L9.4,19H20c2.2,0,4-1.8,4-4V5   C24,2.8,22.2,1,20,1z M14,13H8c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1C15,12.6,14.6,13,14,13z M16,9H8   C7.4,9,7,8.6,7,8c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1C17,8.6,16.6,9,16,9z"
                        id="message"
                        fill="#aab1bc"
                      />
                    </g>
                  </svg>
                  {comment}
                </div>
              </div>
            </div>
          </div>
          <div className="board-model-time">{time}분전</div>
        </div>
      </Link>
    </S.BoardModelStyles>
  );
};

export default BoardModel;
