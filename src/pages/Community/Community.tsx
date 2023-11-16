import React, { useState } from 'react';
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

  const boardItems = [
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(boardItems.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boardItems.slice(indexOfFirstItem, indexOfLastItem);

  //////////////////////////0백엔드 연동시 필요한 부분//////////////////////////
  // const [notices, setNotices] = useState<Notice[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(10); // 초기값, 백엔드에서 받아올 수도 있음

  // useEffect(() => {
  //   // 백엔드에서 데이터 가져오기
  //   const fetchData = async () => {
  //     try {
  //       // 백엔드 API 호출
  //       const response = await fetch(`백엔드 URL?page=${currentPage}&limit=${itemsPerPage}`);
  //       const data = await response.json();

  //       setNotices(data.items); // 현재 페이지 아이템
  //       setTotalPages(data.totalPages); // 총 페이지 수
  //       setItemsPerPage(data.itemsPerPage); // 페이지당 아이템 수
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage, itemsPerPage]);

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

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
                {currentItems.map((item, index) => (
                  <BoardModel
                    key={index}
                    p_category={item.p_category}
                    title={item.title}
                    content={item.content}
                    local={item.local}
                    like={item.like}
                    comment={item.comment}
                    time={item.time}
                    isLastItem={index === currentItems.length - 1}
                  />
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          </div>
        </C.Container>
        <Footer />
      </div>
    </S.CommunityStyles>
  );
};

export default Community;
