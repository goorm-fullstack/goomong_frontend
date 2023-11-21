import React, { useState } from 'react';

import * as S from './MyPageBoardStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import BoardHistoryModel from './BoardHistoryModel/BoardHistoryModel';
import CommentHistoryModel from './CommentHistoryModel/CommentHistoryModel';
import Footer from '../../../components/layout/Footer/Footer';

interface BoardModel {
  type: string;
  title: string;
  writer: string;
  date: number;
  id: number;
}
interface CommentModel {
  title: string;
  comment: string;
  writer: string;
  date: string;
}

interface MyBoard {
  board: BoardModel[];
  comment: CommentModel[];
}

const MyPageBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'board' | 'comment'>('board');
  const myboardData: MyBoard = {
    board: [
      { id: 1, type: '쓴 게시글 type1', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { id: 2, type: '쓴 게시글 type2', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { id: 3, type: '쓴 게시글 type3', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
      { id: 4, type: '쓴 게시글 type4', title: '구몽 생활 게시글 제목', writer: '작성자', date: 30 },
    ],
    comment: [
      {
        title: '게시글 제목',
        comment:
          '내가 쓴 댓글 내용입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다입니다',
        writer: '작성자',
        date: '30',
      },
      { title: '게시글 제목', comment: '내가 쓴 댓글 내용입니다입니다입니다입니다', writer: '작성자', date: '30' },
      { title: '게시글 제목', comment: '내가 쓴 댓글 내용입니다입니다입니다입니다', writer: '작성자', date: '30' },
    ],
  };

  const handleCategoryClick = (category: 'board' | 'comment') => {
    setSelectedCategory(category);
  };

  //삭제로직
  const [boardData, setBoardData] = useState(myboardData.board);

  const deleteBoardItem = (itemId: number) => {
    const updatedBoardData = boardData.filter((item) => item.id !== itemId);
    setBoardData(updatedBoardData);
  };

  // 선택된 카테고리에 따라 다른 컴포넌트 렌더링
  const renderContent = () => {
    if (selectedCategory === 'comment') {
      // 'comment' 카테고리 선택 시 CommentHistoryModel 렌더링
      return <CommentHistoryModel data={myboardData[selectedCategory]} />;
    } else if (selectedCategory === 'board') {
      // 'board' 카테고리 선택 시 BoardHistoryModel 렌더링
      return <BoardHistoryModel data={boardData} onDeleteItem={deleteBoardItem} />;
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
