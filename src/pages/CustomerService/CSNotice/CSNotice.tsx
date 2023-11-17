import React, { useState } from 'react';

import * as S from './CSNoticeStyles';
import CSHeader from '../CSHeader/CSHeader';
import { Link } from 'react-router-dom';
import CSFooter from '../CSFooter/CSFooter';
import Pagination from '../../../components/Pagination/Pagination';

interface Notice {
  title: string;
  date: string;
}

const CSNotice: React.FC = () => {
  const noticeList: Notice[] = [
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
    {
      title: '콘테스트를 개최하려면 어떻게 해야하나요?',
      date: '2023-11-10',
    },
  ];

  const handleNoticeSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(noticeList.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticeList.slice(indexOfFirstItem, indexOfLastItem);



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
        <div className="cs-notice-content">
          <div className="title">공지사항</div>
          <div className="cs-notice-content">
            <ul className="notice-list">
              {currentItems.map((notice, index) => (
                <li key={index}>
                  [공지사항] {notice.title} [{notice.date}]
                </li>
              ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
      <CSFooter />
    </S.CSNoticeStyles>
  );
};

export default CSNotice;
