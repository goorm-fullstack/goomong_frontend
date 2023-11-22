import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './CommunityDetailStyles';
import Header from '../../components/layout/Header/Header';
import BoardModelDetail from './BoardModelDetail/BoardModelDetail';
import CommentModel from './CommentModel/CommentModel';
import Footer from '../../components/layout/Footer/Footer';
import { useParams } from 'react-router';
import { CommentData, PostData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { detailDate, getImageFile } from '../../util/func/functions';
import { NoItem } from '../../Style/CommonStyles';
import { Cookies } from 'react-cookie';

const CommunityDetail: React.FC = () => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<CommentData[]>();
  const [communityData, setCommunityData] = useState<PostData>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [memberImageUrl, setMemberImageUrl] = useState<string>();
  const id = useParams().id;
  const cookies = new Cookies();

  // 커뮤니티 게시글 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/post/${id}`)
      .then((response) => {
        const data = response.data;
        setCommunityData(data);
        setComments(data.commentList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // 댓글 작성
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cookies.get('id') === undefined) {
      alert('로그인 후 이용하실 수 있습니다.');
      window.location.href = '/login';
    } else {
      if (comment.trim() && id) {
        const newComment = {
          memberId: cookies.get('id'),
          content: comment,
          postId: parseInt(id, 10),
        };
        Instance.post(`/api/comments/comment`, newComment)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
        setComment('');
      }
    }
  };

  // 대댓글 추가 처리
  const addReply = (content: string, parentId: number) => {
    if (cookies.get('id') === undefined) {
      alert('로그인 후 이용하실 수 있습니다.');
      window.location.href = '/login';
    } else {
      if (content.trim() && id) {
        const newReply = {
          memberId: cookies.get('id'),
          postId: parseInt(id, 10),
          content: content,
          parentCommentId: parentId,
        };

        Instance.post(`/api/comments/comment`, newReply)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = () => {
      if (communityData) {
        if (communityData.imageList.length > 0) {
          getImageFile(communityData.imageList[0].path)
            .then((response) => {
              setImageUrl(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (communityData.memberImageList.length > 0) {
          getImageFile(communityData.memberImageList[0].path)
            .then((response) => {
              setMemberImageUrl(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    };

    fetchImages();
  }, [communityData]);

  return (
    <S.CommunityDetailStyles>
      <Header />
      <div className="community-detail-container">
        {communityData && (
          <BoardModelDetail
            boardCategory={communityData.postCategory}
            boardTime={detailDate(communityData.regDate)}
            boardComment={communityData.commentNo}
            boardContent={communityData.postContent}
            boardLike={communityData.postLikeNo}
            boardTitle={communityData.postTitle}
            views={communityData.postViews}
            writerName={communityData.memberId}
            boardImage={imageUrl}
            writerImage={memberImageUrl}
          />
        )}
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
          {comments?.length === 0 && <NoItem>등록된 댓글이 없습니다.</NoItem>}
          {comments && comments.map((comment) => <CommentModel key={comment.id} comment={comment} addReply={addReply} />)}
        </div>
      </div>
      <Footer />
    </S.CommunityDetailStyles>
  );
};

export default CommunityDetail;
