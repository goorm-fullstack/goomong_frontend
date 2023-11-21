import React, { useState } from 'react';

import * as S from './MyPageBoardStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import BoardHistoryModel from './BoardHistoryModel/BoardHistoryModel';
import CommentHistoryModel from './CommentHistoryModel/CommentHistoryModel';
import Footer from '../../../components/layout/Footer/Footer';

const MyPageBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'like' | 'board' | 'comment'>('board');

  const handleCategoryClick = (category: 'board' | 'comment') => {
    setSelectedCategory(category);
  };

  // 선택된 카테고리에 따라 다른 컴포넌트 렌더링
  const renderContent = () => {
    if (selectedCategory === 'comment') {
      // 'comment' 카테고리 선택 시 CommentHistoryModel 렌더링
      return <CommentHistoryModel />;
    } else {
      // 'board' 카테고리 선택 시 BoardHistoryModel 렌더링
      return <BoardHistoryModel />;
    }
  };

  return (
    <S.MyPageBoardStyles>
      <Header />
      <div className="mypage-board-container">
        <MyPageLeft />
        <div className="board-container">
          <div className="title">
            작성한 글<div className="small">내가 작성한 글을 관리할 수 있어요.</div>
          </div>
          <ul className="top-list">
            <li className="board" onClick={() => handleCategoryClick('board')}>
              내가 남긴 글
            </li>
            <li className="comment" onClick={() => handleCategoryClick('comment')}>
              내가 남긴 댓글
            </li>
          </ul>

          {renderContent()}
        </div>
      </div>
      <Footer />
    </S.MyPageBoardStyles>
  );
};

export default MyPageBoard;
