import React, { useState } from 'react';

import * as S from './MyPagePointStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Pagination from '../../../components/Pagination/Pagination';
import Footer from '../../../components/layout/Footer/Footer';

interface PointDetail {
  content: string;
  date: string;
  dueDate: string;
  value: number;
}

interface Point {
  havePoint: number;
  discardPoint: number;
  pointDetail: PointDetail[];
}

const MyPagePoint: React.FC = () => {
  const pointData: Point = {
    havePoint: 1110,
    discardPoint: 1110,
    pointDetail: [
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
      { content: '상세 내용입니다', date: '2023.11.28', dueDate: '2023.10.28~2023.11.28', value: 10000 },
    ],
  };

  const formatNumber2 = (num: number): string => {
    return num.toLocaleString();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(pointData.pointDetail.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pointData.pointDetail.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.MyPagePointStyles>
      <Header />
      <div className="mypage-point-container">
        <MyPageLeft />
        <div className="point-container">
          <div className="title">
            포인트
            <div className="small">내 포인트를 관리할 수 있어요</div>
          </div>
          <div className="total-point">
            <ul>
              <li>
                보유포인트 <span className="number">{formatNumber2(pointData.havePoint)}</span>p
              </li>
              <li>
                이번 달 소멸예정 포인트 <span className="number second">{formatNumber2(pointData.discardPoint)}</span>p
              </li>
            </ul>
          </div>

          <ul className="list-title">
            <li>상세 내용</li>
            <li>등록일</li>
            <li>유효기간</li>
            <li>금액</li>
          </ul>

          {currentItems.map((item, index) => (
            <ul key={index} className="point-history-item">
              <li>타입: {item.content}</li>
              <li>{item.date}</li>
              <li>{item.dueDate}</li>
              <li>{item.value}원</li>
            </ul>
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>

      <Footer />
    </S.MyPagePointStyles>
  );
};

export default MyPagePoint;
