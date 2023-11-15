import React, { useState } from 'react';

import * as S from './CSFaqStyles';
import CSHeader from '../CSHeader/CSHeader';
import { Link } from 'react-router-dom';
import Logo_White from '../../../assets/images/common/logo_white.png';

interface FaqProps {
  title: string;
  content: string;
  category: string;
}
const CSFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleFaqSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const faqItems: FaqProps[] = [
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용1',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용2',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용3',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용4',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      content: '내용5',
      category: '분류',
    },
  ];

  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 10;

  const pageCount: number = Math.ceil(faqItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = faqItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };
  return (
    <S.CSFaqStyles>
      <CSHeader />
      <div className="faq-container">
        <div className="faq-location">
          <div className="left">
            <div className="total-location">
              <Link to="/cs_home">구몽 고객센터</Link>
            </div>
            <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg" fill="#8e94a0">
              <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
            </svg>
            <div className="small-location">자주하는 질문</div>
          </div>
          <div className="search-bar">
            <form onSubmit={handleFaqSearchSubmit}>
              <input type="text" placeholder="검색" />
            </form>
            <button className="search-btn" type="submit">
              <svg fill="#dbdee2" height="19px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="19px" xmlns="http://www.w3.org/2000/svg">
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-title">자주하는 질문</div>
          <ul className="category-list">
            <li className="active">마케팅</li>
            <li>전자책</li>
            <li>영어 번역</li>
            <li>전자책</li>
            <li>전자책</li>
          </ul>
          <div className="accordion-menu">
            {currentItems.map((item, index) => (
              <div key={index}>
                <button onClick={() => toggleItem(index)} className="title-btn">
                  [{item.category}]{item.title}
                </button>
                <div className={`faq-content-list ${openIndex === index ? 'visible' : ''}`}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
              {number}
            </button>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-right">
            <div className="footer-top">
              <img src={Logo_White} alt="logo" />
            </div>
            <ul className="footer-top-left-list">
              <li>
                팀명 <span></span> 파이널 스터디 2조 R=VD
              </li>
              <li>
                팀장 <span></span> 이동규
              </li>
              <li>
                사업자등록번호 <span></span> 126-87-39200
              </li>
              <li>
                통신판매업번호 <span></span> 제2019-성남분당B0224호
              </li>
              <li>
                주소 <span></span> 경기도성남시분당구 판교로 242 PDC 902호
              </li>
            </ul>
          </div>
          <div className="footer-left">
            <ul className="footer-left-list">
              <li>
                <Link to="#null">공지 사항</Link>
              </li>
              <li>
                <Link to="#null">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="#null">이용약관</Link>
              </li>
              <li>
                <Link to="/admin">관리자 로그인</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </S.CSFaqStyles>
  );
};

export default CSFaq;
