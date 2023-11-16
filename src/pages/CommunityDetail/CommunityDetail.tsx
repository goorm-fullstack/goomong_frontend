import React, { useState } from 'react';
import * as S from './CommunityDetailStyles';
import Header from '../../components/layout/Header/Header';
import BoardModelDetail from './BoardModelDetail/BoardModelDetail';
import CommentModel from './CommentModel/CommentModel';
import { Comment } from './CommentModel/CommentModel';
import Footer from '../../components/layout/Footer/Footer';

const boardItem = {
  boardCategory: '게시판 카테고리',
  boardTitle: '게시글 제목',
  writerName: '작성자명',
  boardTime: 30,
  views: 11000,
  boardComment: 40,
  boardContent: '게시글 내용입니다~~~',
  boardLike: 40,
};

const CommunityDetail: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment: Comment = {
        writer: '작성자명',
        content: comment,
        commentId: Math.random().toString(),
        parentId: null,
        replies: [],
        time: 30,
        like: 40,
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  // 대댓글 추가 처리
  const addReply = (content: string, parentId: string) => {
    if (content.trim()) {
      const newReply: Comment = {
        writer: '답글 작성자명',
        content,
        commentId: Math.random().toString(),
        parentId,
        replies: [],
        time: 30,
        like: 40,
      };
      setComments((prevComments) => {
        const updatedComments = prevComments.map((comment) =>
          comment.commentId === parentId ? { ...comment, replies: [...(comment.replies || []), newReply] } : comment
        );
        console.log(updatedComments); // 업데이트된 댓글 배열을 로깅
        return updatedComments;
      });
    }
  };
  return (
    <S.CommunityDetailStyles>
      <Header />
      <div className="community-detail-container">
        <BoardModelDetail
          boardCategory={boardItem.boardCategory}
          boardTime={boardItem.boardTime}
          boardComment={boardItem.boardComment}
          boardContent={boardItem.boardContent}
          boardLike={boardItem.boardLike}
          boardTitle={boardItem.boardTitle}
          views={boardItem.views}
          writerName={boardItem.writerName}
        />
        <div className="comment-container">
          <form onSubmit={handleCommentSubmit}>
            <div className="comment-text">댓글</div>
            <input type="text" className="comment-text-box" value={comment} onChange={(e) => setComment(e.target.value)} />
            <div className="comment-bottom">
              <span className="warn-text">
                <svg width="12px" height="11px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      fill="#6f7785"
                      d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
                악성,비방성 댓글은 관리자에 의해 경고없이 삭제될 수 있으며, 이용이 제한될 수 있습니다.
              </span>
              <button type="submit" className="comment-submit-btn">
                등록
              </button>
            </div>
          </form>
          {comments.map((comment) => (
            <CommentModel key={comment.commentId} comment={comment} addReply={addReply} />
          ))}
        </div>
      </div>
      <Footer />
    </S.CommunityDetailStyles>
  );
};

export default CommunityDetail;
