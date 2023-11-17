import React, { useLayoutEffect, useState } from 'react';

import * as S from './CommentModelStyles';
import { CommentData } from '../../../interface/Interface';
import { detailDate, getImageFile } from '../../../util/func/functions';
import Instance from '../../../util/API/axiosInstance';

interface CommentModelProps {
  comment: CommentData;
  addReply: (content: string, parentId: number) => void;
}

const CommentModel: React.FC<CommentModelProps> = ({ comment, addReply }) => {
  const [replyContent, setReplyContent] = useState<string>();
  const [reply, setReply] = useState<CommentData[]>();
  const [imageUrl, setImageUrl] = useState<string>();

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent) {
      addReply(replyContent, comment.id);
      setReplyContent('');
    }
  };

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = () => {
      if (comment) {
        if (comment.memberImageList.length > 0) {
          getImageFile(comment.memberImageList[0].path)
            .then((response) => {
              setImageUrl(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    };

    fetchImages();
    setReply(comment.childrenComment);
  }, [comment]);

  const clickLike = () => {
    const likeRequest = {
      memberId: 1,
      commentId: comment.id,
    };
    Instance.post('/api/like/comment', likeRequest)
      .then(() => {
        // 좋아요 클릭 성공 시 실행할 로직
      })
      .catch(() => {
        Instance.delete('/api/like/comment', { data: likeRequest })
          .then(() => {
            // 좋아요 취소 성공 시 실행할 로직
          })
          .catch((error) => {
            console.error(error);
          });
      });
  };

  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="42px" height="42px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  return (
    <S.CommentModelStyles>
      <div className="comment-container">
        <div className="comment-top">
          <div className="writer-image-container">{imageUrl ? <img src={imageUrl} alt="" /> : defaultImage}</div>
          <div className="right">
            <div className="comment-writer">{comment.memberId}</div>
            <div className="comment-time">{detailDate(comment.regDate)}</div>
          </div>
        </div>
        <div className="comment-content">{comment.content}</div>
        <div className="comment-bottom">
          <div className="comment-like">
            <svg height="13px" viewBox="0 0 24 24" width="14px" xmlns="http://www.w3.org/2000/svg" onClick={clickLike}>
              <path
                fill="#aab1bc"
                d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
              />
            </svg>
            {comment.likeNo}
          </div>
        </div>
        {comment.parentId === null && (
          <form onSubmit={handleReplySubmit} className="reply-form">
            <input type="text" value={replyContent} onChange={(e) => setReplyContent(e.target.value)} placeholder="답글을 입력하세요." />
            <button type="submit">답글 달기</button>
          </form>
        )}
        <div className="reply-container">{reply && reply.map((reply) => <CommentModel key={reply.id} comment={reply} addReply={addReply} />)}</div>
      </div>
    </S.CommentModelStyles>
  );
};

export default CommentModel;
