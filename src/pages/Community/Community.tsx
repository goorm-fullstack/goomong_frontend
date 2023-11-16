import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as S from './CommunityStyles';
import * as C from '../../Style/CommonStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import NavItem from './CommunityItems/NavItem/NavItem';
import NoticeBoardModel from './CommunityItems/NoticeBoardModel/NoticBoardModel';
import SlideBoardModel from './CommunityItems/BoardModel/SlideBoardModel';
import BoardModel from './CommunityItems/BoardModel/BoardModel';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import { CommunityData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { getImageFile, detailDate } from '../../util/func/functions';

const Community: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTerm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const boardCategories = [{ title: '전체' }, { title: '게시판 카테고리' }, { title: '카테고리1' }, { title: '카테고리2' }];

  const noticeBoard = {
    type: '공지사항',
    title: '구몽생활 가이드라인',
    writer: 'goomong',
    comment: 40,
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const boardSlideItems = [
    { category: '게시글 1의 카테고리입니다.', title: '게시글 1의 제목입니다.', writer: '이 게시글의 작성자 입니다.', comment: 40 },
    { category: '게시글 2의 카테고리입니다.', title: '게시글 2의 제목입니다.', writer: '이 게시글의 작성자 입니다.', comment: 40 },
    { category: '게시글 3의 카테고리입니다.', title: '게시글 3의 제목입니다.', writer: '이 게시글의 작성자 입니다.', comment: 40 },
    { category: '게시글 4의 카테고리입니다.', title: '게시글 4의 제목입니다.', writer: '이 게시글의 작성자 입니다.', comment: 40 },
    { category: '게시글 5의 카테고리입니다.', title: '게시글 5의 제목입니다.', writer: '이 게시글의 작성자 입니다.', comment: 40 },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % boardSlideItems.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? boardSlideItems.length - 1 : prevIndex - 1));
  };

  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [communityData, setCommunityData] = useState<CommunityData[]>(); // 커뮤니티 게시판 데이터
  const [totalData, setTotalData] = useState<number>(0); // 전체 데이터 수
  const [totalPage, setTotalPage] = useState<number>(0); // 전체 페이지
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지 데이터
  const itemsPerPage = 5; // 페이지당 표시할 아이템 수

  // 페이지 변경 함수
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 커뮤니티 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/posts/notdeletedtype/COMMUNITY?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => {
        const data = response.data;
        setCommunityData(data);
        if (data.length > 0) {
          setTotalData(data[0].pageInfo.totalElements);
          setTotalPage(data[0].pageInfo.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (communityData) {
        const urls = await Promise.all(
          communityData.map((community) => {
            if (community.imageList.length > 0) return getImageFile(community.imageList[0].path);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [communityData]);

  return (
    <S.CommunityStyles>
      <div className="community">
        <Header />
        <C.Container>
          <C.PageTitle>구몽생활</C.PageTitle>

          <div className="search-container">
            <form action="submit" className="search-form">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="궁금하신 내용을 키워드 또는 #태그로 검색해보세요."
              />
              <button type="submit" onClick={handleSearchTerm}>
                <svg height="24px" width="24px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#8e94a0"
                    d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="content-container">
            <div className="left-nav">
              <ul className="category-list">
                {boardCategories.map((boardCategories, index) => (
                  <NavItem key={index} title={boardCategories.title} />
                ))}
              </ul>
            </div>
            <div className="board-content">
              <div className="slide-top">
                <div className="hot-title">지금 가장 HOT한 소식</div>
                <div className="slide-btn">
                  <button onClick={prevSlide} style={slideIndex === 0 ? { opacity: 0.5, cursor: 'default' } : {}} disabled={slideIndex === 0}>
                    <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256" transform="rotate(180 256 256)" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    style={slideIndex === boardSlideItems.length - 2 ? { opacity: 0.5, cursor: 'default' } : {}}
                    disabled={slideIndex === boardSlideItems.length - 2}>
                    <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="board-content-top">
                <NoticeBoardModel type={noticeBoard.type} title={noticeBoard.title} writer={noticeBoard.writer} comment={noticeBoard.comment} />
                <div className="hot-slide">
                  {boardSlideItems.map((item, index) => (
                    <div
                      key={index}
                      style={{ display: index === slideIndex || index === (slideIndex + 1) % boardSlideItems.length ? 'block' : 'none' }}>
                      <SlideBoardModel category={item.category} title={item.title} writer={item.writer} comment={item.comment} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="align-menu">
                <div className="left">
                  <div className="left-category">
                    재능 카테고리
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                  <div className="left-local">
                    지역 선택
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                  <div className="align-standard">
                    정렬 기준
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                </div>

                <div className="right">
                  <Link to="/write">
                    <button type="button" className="write-btn">
                      작성하기
                    </button>
                  </Link>
                </div>
              </div>

              <div className="board-list">
                {communityData?.length === 0 && <C.NoItem>등록된 게시글이 없습니다.</C.NoItem>}
                {communityData &&
                  communityData.map((item, index) => (
                    <BoardModel
                      key={index}
                      id={item.id}
                      p_category={item.postCategory}
                      title={item.postTitle}
                      content={item.postContent}
                      local={item.memberAddress}
                      like={item.postLikeNo}
                      comment={item.commentNo}
                      time={detailDate(item.regDate)}
                      isLastItem={index === communityData.length - 1}
                      imageURL={imageUrls && imageUrls[index]}
                    />
                  ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
            </div>
          </div>
        </C.Container>
        <Footer />
      </div>
    </S.CommunityStyles>
  );
};

export default Community;
