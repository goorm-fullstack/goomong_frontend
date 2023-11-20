import React, { useState, useEffect } from 'react';

import * as S from './CSFaqStyles';
import CSHeader from '../CSHeader/CSHeader';
import { Link, useParams } from 'react-router-dom';
import CSFooter from '../CSFooter/CSFooter';
import Pagination from '../../../components/Pagination/Pagination';
import { QnaCategoryData, QuestionData } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import { NoItem } from '../../../Style/CommonStyles';

const CSFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleFaqSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  //아코디언 메뉴 로직
  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [qnaData, setQnaData] = useState<QuestionData[]>(); // 질문 데이터
  const [totalPage, setTotalPage] = useState<number>(); // 전체 페이지 수
  const [categorys, setCategorys] = useState<QnaCategoryData[]>(); // 카테고리 데이터
  const category = useParams().category;

  // 질문 데이터 가져오기
  useEffect(() => {
    if (category === 'all') {
      Instance.get(`/api/qnas/questions?size=${itemsPerPage}&page=${currentPage}`)
        .then((response) => {
          const data = response.data;
          setQnaData(data);
          if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Instance.get(`/api/qnas/notdeleted/category/${category}?size=${itemsPerPage}&page=${currentPage}`)
        .then((response) => {
          const data = response.data;
          setQnaData(data);
          if (data.length > 0) setTotalPage(data[0].pageInfo.totalPage);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentPage, category]);

  // 카테고리 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/categorys/notdeleted/name/QNA`)
      .then((response) => {
        const data = response.data;
        setCategorys(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [qnaData]);

  return (
    <S.CSFaqStyles>
      <CSHeader />
      <div className="faq-container">
        <div className="faq-location">
          <div className="left">
            <div className="total-location">
              <Link to="/cs/home">구몽 고객센터</Link>
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
            <li className={category === 'all' ? 'active' : ''}>
              <Link to={'/cs/faq/all'}>전체</Link>
            </li>
            {categorys &&
              categorys.map((item, index) => (
                <li key={index} className={category === item.categoryName ? 'active' : ''}>
                  <Link to={`/cs/faq/${item.categoryName}`}>{item.categoryName}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="accordion-menu">
          {qnaData?.length === 0 && <NoItem>등록된 QnA가 없습니다.</NoItem>}
          {qnaData &&
            qnaData.map((faq, index) => (
              <div key={index}>
                <button onClick={() => toggleItem(index)} className="title-btn">
                  [{faq.categoryName}]{faq.title}
                </button>
                <div className={`faq-content-list ${openIndex === index ? 'visible' : ''}`} style={{ whiteSpace: 'pre-line' }}>
                  {faq.content}
                </div>
              </div>
            ))}
          <Pagination currentPage={currentPage} totalPages={totalPage ? totalPage : 1} onPageChange={handlePageChange} />
        </div>
      </div>
      <CSFooter />
    </S.CSFaqStyles>
  );
};

export default CSFaq;
