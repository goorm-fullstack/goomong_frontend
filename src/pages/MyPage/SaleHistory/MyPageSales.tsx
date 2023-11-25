import React, { useEffect, useState } from 'react';
import * as S from './MyPageSalesStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import Pagination from '../../../components/Pagination/Pagination';
import { Item } from '../../../interface/Interface';
import { commaNumber, formattingDate, getCookie } from '../../../util/func/functions';
import Instance from '../../../util/API/axiosInstance';
import OrderDetail from '../../Order/OrderDetail';

interface Order {
  doingOrder: number;
  completeOrder: number;
  orderDetail: Item[];
}

const MyPageSales: React.FC = () => {
  const [doingOrder, setDoingOrder] = useState(0);
  const [completeOrder, setCompleteOrder] = useState(0);
  const [items, setItem] = useState<Item[]>([]);
  const memberId = getCookie('id');

  const orderData: Order = {
    doingOrder: doingOrder,
    completeOrder: completeOrder,
    orderDetail: items,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(orderData.orderDetail.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (memberId) {
      Instance.get(`/api/member/id/${memberId}`).then((response) => {
        console.log(response.data);
        setItem(response.data.itemList);
      });
    }
  }, [memberId]);

  const formattingStatus = (status: string) => {
    switch (status) {
      case 'SALE':
        return '판매';
      case 'GIVE':
        return '기부';
      case 'WANTED':
        return '구인';
      case 'EXCHANGE':
        return '교환';
    }
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
                등록한 재능 <span className="number">{commaNumber(items.length)}</span>개
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
              <li>타입: {item ? item.title : ''}</li>
              <li>{formattingDate(item.regDate)}</li>
              <li>{commaNumber(item.price)}원</li>
              <li>{formattingStatus(item.status)}</li>
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
