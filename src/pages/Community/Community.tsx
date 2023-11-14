import React, { useState } from 'react';
import * as S from './CommunityStyles';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import NavItem from './CommunityItems/NavItem/NavItem';
import NoticeBoardModel from './CommunityItems/NoticeBoardModel/NoticBoardModel';
import SlideBoardModel from './CommunityItems/BoardModel/SlideBoardModel';
import BoardModel from './CommunityItems/BoardModel/BoardModel';
import { Link } from 'react-router-dom';

import Bg_Black from '../../assets/images/index/bg_black.png';
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
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
    {
      b_category: '게시판 카테고리',
      p_category: '재능 카테고리',
      title: '게시글 제목',
      content: '게시글 내용입니다.',
      local: '서울 전체',
      like: 40,
      comment: 40,
      time: 30,
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 3;

  const pageCount: number = Math.ceil(boardItems.length / itemsPerPage);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems = boardItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <S.CommunityStyles>
      <div className="community">
        <Header />
        <div className="community-container">
          <div className="title">구몽생활</div>

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
                </div>
                <div className="right">
                  <div className="align-standard">
                    정렬 기준
                    <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                      <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="board-list">
                {currentItems.map((item, index) => (
                  <BoardModel
                    key={index}
                    b_category={item.b_category}
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
              <div className="pagination">
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
                  <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                    {number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </S.CommunityStyles>
  );
};

export default Community;
