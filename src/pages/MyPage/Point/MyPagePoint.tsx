import React, { useState, useEffect } from 'react';

import * as S from './MyPagePointStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Pagination from '../../../components/Pagination/Pagination';
import Footer from '../../../components/layout/Footer/Footer';
import Instance from '../../../util/API/axiosInstance';
import { Point, PointHistory } from '../../../interface/Interface';
import { formattingDate } from '../../../util/func/functions';
import { Cookies } from 'react-cookie';

const MyPagePoint: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지 상태 저장
  const [totalPage, setTotalPage] = useState<number>(0); // 전체 페이지 수
  const [point, setPoint] = useState<Point>();
  const [pointHistory, setPointHistory] = useState<PointHistory[]>([]);
  const cookies = new Cookies();
  const memberId = cookies.get('id');

  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber - 1);
  };

  useEffect(() => {
    Instance.get(`/api/point/${memberId}`)
      .then((response) => {
        setPoint(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [memberId]);

  console.log(currentPage);

  useEffect(() => {
    Instance.get(`/api/point/${memberId}/history?page=${currentPage}&size=${itemsPerPage}`)
      .then((response) => {
        const data = response.data;
        setPointHistory(data.data);
        if (data.data.length > 0) {
          setTotalPage(data.pageInfo.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [memberId, currentPage]);

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
                보유포인트 <span className="number">{point?.totalPoint ?? 0}</span>p
              </li>
              <li>
                이번 달 소멸예정 포인트 <span className="number second">{point?.expiringPoint ?? 0}</span>p
              </li>
            </ul>
          </div>

          <ul className="list-title">
            <li>상태</li>
            <li>적립</li>
            <li>상세 내용</li>
            <li>주문 번호</li>
            <li>등록일</li>
          </ul>

          {pointHistory.map((item, index) => (
            <ul key={index} className="point-history-item">
              <li>{item.type}</li>
              <li>{item.amount >= 0 ? `+${item.amount}` : item.amount}</li>
              <li>{item.description}</li>
              <li>{item.orderNumber}</li>
              <li>{formattingDate(item.regDate)}</li>
            </ul>
          ))}
          <Pagination currentPage={currentPage + 1} totalPages={totalPage} onPageChange={handlePageChange} />
        </div>
      </div>

      <Footer />
    </S.MyPagePointStyles>
  );
};

export default MyPagePoint;
