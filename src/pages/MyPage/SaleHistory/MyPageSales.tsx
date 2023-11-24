import React, { useState } from 'react';
import * as S from './MyPageSalesStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import Pagination from '../../../components/Pagination/Pagination';

interface OrderDetail {
  productInfo: string;
  orderState: string;
  money: number;
  date: string;
}

interface Order {
  doingOrder: number;
  completeOrder: number;
  orderDetail: OrderDetail[];
}

const MyPageSales: React.FC = () => {
  const orderData: Order = {
    doingOrder: 1110,
    completeOrder: 1110,
    orderDetail: [
      { productInfo: '상품 정보입니다.', orderState: '진행중', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '완료', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '취소', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '진행중', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '완료', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '취소', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '진행중', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '완료', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '취소', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '진행중', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '완료', money: 333333, date: '2023.11.28' },
      { productInfo: '상품 정보입니다.', orderState: '취소', money: 333333, date: '2023.11.28' },
    ],
  };

  const formatNumber2 = (num: number): string => {
    return num.toLocaleString();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(orderData.orderDetail.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orderData.orderDetail.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <S.MyPageSalesStyles>
      <Header />
      <div className="mypage-payment-container">
        <MyPageLeft />
        <div className="payment-container">
          <div className="title">
            판매내역
            <div className="small">판매 내역을 관리할 수 있어요</div>
          </div>
          <div className="total-order">
            <ul>
              <li>
                진행중 <span className="number">{formatNumber2(orderData.doingOrder)}</span>개
              </li>
              <li>
                판매한 재능 수 <span className="number second">{formatNumber2(orderData.completeOrder)}</span>개
              </li>
            </ul>
          </div>
          <ul className="list-title">
            <li>재능 정보</li>
            <li>등록일</li>
            <li>금액</li>
            <li>진행 상태</li>
          </ul>

          {currentItems.map((item, index) => (
            <ul key={index} className="order-history-item">
              <li>타입: {item.productInfo}</li>
              <li>{item.date}</li>
              <li>{item.money}</li>
              <li>{item.orderState}</li>
            </ul>
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
      <Footer />
    </S.MyPageSalesStyles>
  );
};

export default MyPageSales;
