import React, { useState, useEffect } from 'react';
import * as S from './MyPagePaymentStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import Pagination from '../../../components/Pagination/Pagination';
import { commaNumber, formattingDate, getCookie } from '../../../util/func/functions';
import { Item } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import { Link } from 'react-router-dom';

interface OrderDetail {
  id: number;
  orderItem: Item;
  member: any;
  price: number;
  point: number;
  status: string;
  orderNumber: string;
  regDate: Date;
}

interface Order {
  doingOrder: number;
  completeOrder: number;
  orderDetail: OrderDetail[];
}

const MyPagePayment: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [doingOrder, setDoingOrder] = useState(0);
  const [completeOrder, setCompleteOrder] = useState(0);
  const memberId = getCookie('id');

  const orderData: Order = {
    doingOrder: doingOrder,
    completeOrder: completeOrder,
    orderDetail: orderDetails,
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

  const formattingStatus = (status: string) => {
    switch (status) {
      case 'WAITING':
        return '대기';
      case 'CONTINUE':
        return '진행중';
      case 'COMPLETE':
        return '완료';
      case 'REFUND':
        return '환불대기';
      case 'REFUNDED':
        return '환불완료';
    }
  };

  useEffect(() => {
    if (memberId) {
      Instance.get(`/api/order/member/${memberId}/list`).then((response) => {
        console.log(response.data);
        setOrderDetails(response.data);
      });
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < orderDetails.length; i++) {
      if (orderDetails[0].status === 'WAITING') {
        setDoingOrder(doingOrder + 1);
      } else if (orderDetails[0].status === 'COMPLETE') {
        setCompleteOrder(completeOrder + 1);
      }
    }
  }, [orderDetails]);

  return (
    <S.MyPagePaymentStyles>
      <Header />
      <div className="mypage-payment-container">
        <MyPageLeft />
        <div className="payment-container">
          <div className="title">
            구매내역
            <div className="small">구매 내역을 관리할 수 있어요</div>
          </div>
          <div className="total-order">
            <ul>
              <li>
                진행중 <span className="number">{formatNumber2(orderData.doingOrder)}</span>개
              </li>
              <li>
                구매한 재능 수 <span className="number second">{formatNumber2(orderData.completeOrder)}</span>개
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
              <li>타입: {item.orderItem ? item.orderItem.title : ''}</li>
              <li>{formattingDate(item.regDate)}</li>
              <li>{commaNumber(item.price)}원</li>
              <li>{formattingStatus(item.status)}</li>
              <li>
              <Link to="#null">
                <button className='review-reg'>리뷰 작성</button>
              </Link>
            </li>
              
            </ul>
          ))}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
      <Footer />
    </S.MyPagePaymentStyles>
  );
};

export default MyPagePayment;
