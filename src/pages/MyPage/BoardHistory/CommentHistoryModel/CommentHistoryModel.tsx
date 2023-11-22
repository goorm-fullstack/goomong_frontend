import React, { useEffect, useState } from 'react';

import * as S from './CommentHistoryModelStyles';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination/Pagination';
import { Cookies } from 'react-cookie';
import { CommentData } from '../../../../interface/Interface';
import Instance from '../../../../util/API/axiosInstance';
import { formattingDate } from '../../../../util/func/functions';
import { NoItem } from '../../../../Style/CommonStyles';

const CommentHistoryModel: React.FC = () => {
  const [selectedComment, setSelectedComment] = useState<number | null>(null);
  const [editingComment, setEditingComment] = useState<number | null>(null);
  const [comments, setComments] = useState<CommentData[]>(); // 데이터 상태 관리
  const [editContent, setEditContent] = useState<string>(''); // 수정 중인 댓글 내용 상태
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState<number>(1); // 전체 페이지 수
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const cookies = new Cookies();
  const memberPk = cookies.get('id');

  // 댓글 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/comments/${memberPk}?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => {
        const data = response.data;
        setComments(data);
        if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage, memberPk]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleAccordion = (index: number) => {
    setSelectedComment(selectedComment === index ? null : index);
    setEditingComment(null);
  };

  const handleEditClick = (index: number, currentContent: string) => {
    setEditingComment(index);
    setEditContent(currentContent);
  };

  const handleSaveEdit = (id: number) => {
    const foundComment = comments?.find((comment) => comment.id === id);

    let updatedComment;
    if (foundComment?.parentCommentId === null) {
      updatedComment = {
        memberId: memberPk,
        postId: foundComment?.postId,
        content: editContent,
      };
    } else {
      updatedComment = {
        memberId: memberPk,
        postId: foundComment?.postId,
        parentCommentId: foundComment?.parentCommentId,
        content: editContent,
      };
    }

    Instance.put(`/api/comments/comment/${id}`, updatedComment)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteComment = (id: number) => {
    const isConfirm = window.confirm('삭제하시겠습니까?');
    if (isConfirm) {
      Instance.delete(`/api/comments/comment/softdel/${id}`)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
        {comments?.length === 0 && (
          <ul className="comment-history-item">
            <NoItem>작성한 댓글이 없습니다.</NoItem>
          </ul>
        )}
        {comments &&
          comments.map((item, index) => (
            <React.Fragment key={index}>
              <ul className="comment-history-item">
                <li>
                  <Link to={`/community/detail/${item.postId}`}>{item.postTitle}</Link>
                </li>
                <li onClick={() => toggleAccordion(item.id)} style={{ whiteSpace: 'pre-line' }}>
                  {item.content}
                </li>
                <li>{item.memberId}</li>
                <li>{formattingDate(item.regDate)}</li>
              </ul>
              {selectedComment === item.id && (
                <div className="accordion-content">
                  {editingComment === item.id ? (
                    <>
                      <textarea defaultValue={editContent} onChange={(e) => setEditContent(e.target.value)} />
                      <button type="button" onClick={() => handleSaveEdit(item.id)}>
                        완료
                      </button>
                    </>
                  ) : (
                    <>
                      {item.content}
                      <div className="btns">
                        <button type="button" onClick={() => handleEditClick(item.id, item.content)}>
                          수정
                        </button>
                        <button type="button" onClick={() => deleteComment(item.id)}>
                          삭제
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
      <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
    </S.CommentHistoryModelStyles>
  );
};

export default CommentHistoryModel;
