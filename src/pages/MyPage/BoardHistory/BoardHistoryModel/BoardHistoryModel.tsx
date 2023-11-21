import React, { useState } from 'react';

import * as S from './BoardHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';

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
interface BoardHistoryModelProps {
  data: (LikeModel | BoardModel)[];
}

const BoardHistoryModel: React.FC<BoardHistoryModelProps> = ({ data }) => {
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

  return (
    <S.BoardHistoryModelStyles>
      <div className="board-history-model">
        <ul className="list-title">
          <li>게시글 종류</li>
          <li>게시글 제목</li>
          <li>작성자</li>
          <li>등록일</li>
        </ul>
        {currentItems.map((item, index) => (
          <Link to="#null">
            <ul key={index} className="board-history-item">
              <li>타입: {item.type}</li>
              <li>{item.title}</li>
              <li>{item.writer}</li>
              <li>{item.date}분전</li>
            </ul>
          </Link>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.BoardHistoryModelStyles>
  );
};

export default BoardHistoryModel;
