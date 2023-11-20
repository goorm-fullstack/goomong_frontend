import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './AdminPostDetailStyle';
import * as A from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import Instance from '../../../util/API/axiosInstance';
import { useParams, useNavigate } from 'react-router';
import { commaNumber, detailDate } from '../../../util/func/functions';
import { PostData } from '../../../interface/Interface';
import { getImageFile } from '../../../util/func/functions';
import { CommunityDetailStyles } from '../../CommunityDetail/CommunityDetailStyles';
import { Link } from 'react-router-dom';

const AdminPostDetail: React.FC = () => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="130px" height="130px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  const [postData, setPostData] = useState<PostData>(); // 게시글 데이터
  const [imageUrl, setImageUrl] = useState<string>(); // 게시글 이미지 데이터
  const [memberImageUrl, setMemberImageUrl] = useState<string>(); // 회원 이미지 데이터

  const id = useParams().id;
  const navigation = useNavigate();

  function formatViews(number: number): string {
    if (number >= 10000) {
      const man = number / 10000;
      const rounded = Math.round(man * 10) / 10;
      return rounded.toLocaleString() + '만 회';
    } else return String(commaNumber(number)) + '회';
  }

  // 좋아요 클릭
  const clickLike = () => {
    const likeRequest = {
      memberId: 1, // memberId 가져오는 로직 필요
      postId: id && parseInt(id, 10),
    };
    Instance.post('/api/like/post', likeRequest)
      .then(() => {
        // like 성공했을 때 수행할 로직
      })
      .catch(() => {
        Instance.delete('/api/like/post', { data: likeRequest })
          .then(() => {
            // 좋아요 삭제 완료시 수행할 로직
          })
          .catch((error) => {
            console.error(error);
          });
      });
  };

  // 게시글 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/post/admin/${id}`)
      .then((response) => {
        const data = response.data;
        setPostData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = () => {
      if (postData) {
        if (postData.imageList.length > 0) {
          getImageFile(postData.imageList[0].path)
            .then((response) => {
              setImageUrl(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (postData.memberImageList.length > 0) {
          getImageFile(postData.memberImageList[0].path)
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
  }, [postData]);

  return (
    <A.Admin>
      <AdminHeader />
      <A.Contents>
        <CommunityDetailStyles>
          <div className="community-detail-container">
            <S.BoardModelDetailStyles>
              <div className="board-model-detail-container">
                <div className="board-image-container">{imageUrl ? <img src={imageUrl} alt="" /> : defaultImage}</div>
                <div className="page-location">
                  <div className="big-location">구몽생활</div>
                  <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg" fill="#8e94a0">
                    <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                  </svg>
                  <div className="detail-location">{postData?.postCategory}</div>
                </div>
                <div className="board-title">{postData?.postTitle}</div>
                <div className="writer-container">
                  <div className="writer-image-container">{memberImageUrl ? <img src={memberImageUrl} alt="" /> : defaultImage}</div>
                  <div className="writer-right">
                    <div className="writer-name">{postData?.memberId}</div>
                    <div className="board-time-views">
                      <div className="board-time">{postData && detailDate(postData.regDate)}</div>
                      <div className="board-views">{postData && formatViews(postData.postViews)}</div>
                    </div>
                  </div>
                </div>
                <div className="board-content" style={{ whiteSpace: 'pre-line' }}>
                  {postData?.postContent}
                </div>
                <div className="board-detail-bottom">
                  <div className="board-detail-like">
                    <svg height="13px" viewBox="0 0 24 24" width="14px" xmlns="http://www.w3.org/2000/svg" onClick={clickLike}>
                      <path
                        fill="#aab1bc"
                        d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                      />
                    </svg>
                    {postData && commaNumber(postData.postLikeNo)}
                  </div>
                  <div className="board-detail-comment">
                    <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16px" height="14px">
                      <g id="info" />
                      <g id="icons">
                        <path
                          d="M20,1H4C1.8,1,0,2.8,0,5v10c0,2.2,1.8,4,4,4v3c0,0.9,1.1,1.3,1.7,0.7L9.4,19H20c2.2,0,4-1.8,4-4V5   C24,2.8,22.2,1,20,1z M14,13H8c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1C15,12.6,14.6,13,14,13z M16,9H8   C7.4,9,7,8.6,7,8c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1C17,8.6,16.6,9,16,9z"
                          id="message"
                          fill="#aab1bc"
                        />
                      </g>
                    </svg>
                    {postData && commaNumber(postData.commentNo)}
                  </div>
                </div>
              </div>
            </S.BoardModelDetailStyles>
          </div>
        </CommunityDetailStyles>
      </A.Contents>
      <A.BtnWrapper className="center mt40 mb40">
        <button type="button" className="btn" onClick={() => navigation(-1)}>
          목록
        </button>
      </A.BtnWrapper>
      <AdminSidebar />
    </A.Admin>
  );
};

export default AdminPostDetail;
