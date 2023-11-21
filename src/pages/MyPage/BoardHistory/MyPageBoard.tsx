import React, { useState } from 'react';

import * as S from './MyPageBoardStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import BoardHistoryModel from './BoardHistoryModel/BoardHistoryModel';
import CommentHistoryModel from './CommentHistoryModel/CommentHistoryModel';
import Footer from '../../../components/layout/Footer/Footer';

interface LikeModel {
  type: string;
  title: string;
  writer: string;
  date: number;
}
interface BoardModel {
  type: string;
  title: string;
  writer: string;
  date: number;
}
interface CommentModel {
  type: string;
  title: string;
  writer: string;
  date: number;
}

interface MyBoard {
  like: LikeModel[];
  board: BoardModel[];
  comment: CommentModel[];
}

const MyPageBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'like' | 'board' | 'comment'>('like');
  const myboardData: MyBoard = {
    like: [
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '좋아요 누른 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
    ],
    board: [
      { type: '쓴 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '쓴 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '쓴 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '쓴 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
    ],
    comment: [
      { type: '댓글 단 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '댓글 단 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '댓글 단 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { type: '댓글 단 게시글 type', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
    ],
  };

  const handleCategoryClick = (category: 'like' | 'board' | 'comment') => {
    setSelectedCategory(category);
  };

  // 선택된 카테고리에 따라 다른 컴포넌트 렌더링
  const renderContent = () => {
    if (selectedCategory === 'comment') {
      // 'comment' 카테고리 선택 시 CommentHistoryModel 렌더링
      return <CommentHistoryModel />;
    } else {
      // 'like' 또는 'board' 카테고리 선택 시 BoardHistoryModel 렌더링
      return <BoardHistoryModel data={myboardData[selectedCategory]} />;
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
            <li className="like" onClick={() => handleCategoryClick('like')}>
              좋아요
            </li>
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
