import React from 'react';
import * as S from './SlideBoardModelStyles';
import { Link } from 'react-router-dom';

interface SlideBoardModelProps {
  category: string;
  title: string;
  writer: string;
  comment: number;
}

const SlideBoardModel: React.FC<SlideBoardModelProps> = ({ category, title, writer, comment }) => {
  return (
    <S.SlideBoardModelStyles>
      <Link to="#null">
        <div className="sboard-container">
          <div className="sboard-type">{category}</div>
          <div className="sboard-title">{title}</div>
          <div className="sboard-bottom">
            <div className="writer">{writer}</div>
            <div className="comment">
              <svg width="16px" height="14px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="info" />
                <g id="icons">
                  <path
                    d="M20,1H4C1.8,1,0,2.8,0,5v10c0,2.2,1.8,4,4,4v3c0,0.9,1.1,1.3,1.7,0.7L9.4,19H20c2.2,0,4-1.8,4-4V5   C24,2.8,22.2,1,20,1z M14,13H8c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1C15,12.6,14.6,13,14,13z M16,9H8   C7.4,9,7,8.6,7,8c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1C17,8.6,16.6,9,16,9z"
                    id="message"
                    fill="#aab1bc"
                  />
                </g>
              </svg>
              <span className="comment-num">{comment}</span>
            </div>
          </div>
        </div>
      </Link>
    </S.SlideBoardModelStyles>
  );
};

export default SlideBoardModel;
