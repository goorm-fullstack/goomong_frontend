import React, { useState, useEffect } from 'react';
import * as S from './CSNoticeStyles';
import CSHeader from '../CSHeader/CSHeader';
import CSFooter from '../CSFooter/CSFooter';
import { Link, useParams } from 'react-router-dom';
import { PostData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import { formattingDate } from '../../../util/func/functions';
import { NoItem } from '../../../Style/CommonStyles';

const CSNoticeDetail: React.FC = () => {
  const [noticeData, setNoticeData] = useState<PostData>(); // 공지사항 데이터
  const [randomData, setRandomData] = useState<PostData[]>(); // 랜덤 데이터
  const id = useParams().id;

  const handleNoticeSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // 공지사항 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/post/${id}`)
      .then((response) => {
        const data = response.data;
        setNoticeData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // 랜덤 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/random/${id}`)
      .then((response) => {
        const data = response.data;
        setRandomData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <S.CSNoticeStyles>
      <CSHeader />
      <div className="cs-notice-container">
        <div className="notice-location">
          <div className="left">
            <div className="total-location">
              <Link to="/cs/home">구몽 고객센터</Link>
            </div>
            <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg" fill="#8e94a0">
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
            <div className="small-location">공지사항</div>
          </div>
          <div className="search-bar">
            <form onSubmit={handleNoticeSearchSubmit}>
              <input type="text" placeholder="검색" />
            </form>
            <button className="search-btn" type="submit">
              <svg fill="#dbdee2" height="19px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="19px" xmlns="http://www.w3.org/2000/svg">
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="notice-detail-container">
          <div className="notice-detail-content">
            <div className="notice-title">
              [공지사항] {noticeData && noticeData.postTitle} [{noticeData && formattingDate(noticeData.regDate)}]
            </div>
            <div className="notice-content">{noticeData && noticeData.postContent}</div>
          </div>
          <div className="other-notice-container">
            <div className="other-notice-title">이 게시판의 다른 글</div>
            <ul className="other-notice-list">
              {randomData?.length === 0 && <li>등록된 게시글이 없습니다.</li>}
              {randomData &&
                randomData.map((notice, index) => (
                  <li key={index}>
                    <Link to={`/cs/notice/${notice.id}`}>{notice.postTitle}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <CSFooter />
    </S.CSNoticeStyles>
  );
};
export default CSNoticeDetail;
