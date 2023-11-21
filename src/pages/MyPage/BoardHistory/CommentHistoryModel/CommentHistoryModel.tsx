import React, { useState } from 'react';

import * as S from './CommentHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';

interface MyCommentModel {
  title: string;
  comment: string;
  writer: string;
  date: string;
  id: number;
}

interface MyCommentModelProps {
  data: MyCommentModel[];
  onUpdateItem: (updatedComment: MyCommentModel) => void; // 추가
}

const CommentHistoryModel: React.FC<MyCommentModelProps> = ({ data, onUpdateItem }) => {
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
  const [editingComment, setEditingComment] = useState<number | null>(null);
  const [comments, setComments] = useState(data); // 데이터 상태 관리
  const [editContent, setEditContent] = useState<string>(''); // 수정 중인 댓글 내용 상태

  const toggleAccordion = (index: number) => {
    setSelectedComment(selectedComment === index ? null : index);
    setEditingComment(null);
  };

  const handleEditClick = (index: number, currentContent: string) => {
    setEditingComment(index);
    setEditContent(currentContent);
  };

  const handleSaveEdit = (id: number) => {
    const foundComment = comments.find((comment) => comment.id === id);

    if (foundComment) {
      const updatedComment = {
        id,
        title: foundComment.title,
        comment: editContent,
        writer: foundComment.writer,
        date: foundComment.date,
      };

      onUpdateItem(updatedComment); // 상위 컴포넌트로 수정된 댓글 전달
    } else {
      console.error('Comment not found');
      // 적절한 오류 처리
    }

    setEditingComment(null); // 수정 모드 해제
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
                {editingComment === index ? (
                  <>
                    <textarea defaultValue={editContent} onChange={(e) => setEditContent(e.target.value)} />
                    <button onClick={() => handleSaveEdit(item.id)}>완료</button>
                  </>
                ) : (
                  <>
                    {item.comment}
                    <button onClick={() => handleEditClick(index, item.comment)}>수정</button>
                  </>
                )}
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
