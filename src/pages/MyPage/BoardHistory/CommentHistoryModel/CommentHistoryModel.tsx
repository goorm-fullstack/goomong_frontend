import React, { useState } from 'react';

import * as S from './CommentHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';

interface MyCommentModel {
  title: string;
  comment: string;
  writer: string;
  date: string;
}

interface MyCommentModelProps {
  data: MyCommentModel[];
}

const CommentHistoryModel: React.FC<MyCommentModelProps> = ({ data }) => {
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

  const [selectedComment, setSelectedComment] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setSelectedComment(selectedComment === index ? null : index);
  };

  return (
    <S.CommentHistoryModelStyles>
      <div className="comment-history-model">
        <ul className="list-title">
          <li>게시글 제목</li>
          <li>댓글 내용</li>
          <li>작성자</li>
          <li>등록일</li>
        </ul>
        {currentItems.map((item, index) => (
          <React.Fragment key={index}>
            <ul className="comment-history-item">
              <li>
                <Link to="#null"></Link>댓글 달린 게시글 제목: {item.title}
              </li>
              <li onClick={() => toggleAccordion(index)}>{item.comment}</li>
              <li>{item.writer}</li>
              <li>{item.date}분전</li>
            </ul>
            {selectedComment === index && (
              <div className="accordion-content">
                {item.comment}
                <button>수정</button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </S.CommentHistoryModelStyles>
  );
};

export default CommentHistoryModel;
