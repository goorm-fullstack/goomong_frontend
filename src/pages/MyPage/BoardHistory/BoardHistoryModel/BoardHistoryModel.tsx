import React, { useState } from 'react';

import * as S from './BoardHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';

interface BoardModel {
  type: string;
  title: string;
  writer: string;
  date: number;
  id: number;
  content?: string;
}

interface BoardHistoryModelProps {
  data: BoardModel[];
  onDeleteItem: (itemId: number) => void;
}

const BoardHistoryModel: React.FC<BoardHistoryModelProps> = ({ data, onDeleteItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(data.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  //삭제 확인
  const handleDelete = (itemId: number) => {
    // 사용자에게 삭제 의사를 확인
    const isConfirmed = window.confirm('이 항목을 삭제하시겠습니까?');
    if (isConfirmed) {
      onDeleteItem(itemId);
    }
  };

  return (
    <S.BoardHistoryModelStyles>
      <div className="board-history-model">
        <ul className="list-title">
          <li>게시글 종류</li>
          <li>게시글 제목</li>
          <li>작성자</li>
          <li>등록일</li>
          <li>수정 / 삭제</li>
        </ul>
        {currentItems.map((mypageitem, index) => (
          <div key={index} className="board-history-item">
            <Link to="#null">타입: {mypageitem.type}</Link>
            <Link to="#null">{mypageitem.title}</Link>
            <Link to="#null">{mypageitem.writer}</Link>
            <Link to="#null">{mypageitem.date}분전</Link>
            <div className="button-container">
              <Link to="/write" state={{ mypageitem: mypageitem }}>
                <button>수정</button>
              </Link>

              <button onClick={() => handleDelete(mypageitem.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.BoardHistoryModelStyles>
  );
};

export default BoardHistoryModel;
