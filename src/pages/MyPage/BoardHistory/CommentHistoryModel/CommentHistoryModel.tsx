import React from 'react';

import * as S from './CommentHistoryModelStyles';

const CommentHistoryModel: React.FC = () => {
  return (
    <S.CommentHistoryModelStyles>
      <div className="comment-history-model">
        <ul className="list-title">
          <li>게시글 제목</li>
          <li>댓글</li>
          <li>작성자</li>
          <li>등록일</li>
        </ul>
      </div>
    </S.CommentHistoryModelStyles>
  );
};

export default CommentHistoryModel;
