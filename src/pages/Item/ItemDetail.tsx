import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';
import { blob } from 'stream/consumers';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import * as C from '../../Style/CommonStyles';
import * as S from './Style';
import ReviewModel from '../../components/Review/ReviewModel/ReviewModel';
import Pagination from '../../components/Pagination/Pagination';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../components/Banner/Banner';
import Sort from '../../components/Sort/Sort';

interface Item {
  id: number;
  title: string;
  member: any;
  price: number;
  thumbNailList: Array<any>;
  itemCategories: Array<any>;
  reviewList: Array<any>;
  askList: Array<any>;
  rate: number;
  stauts: string;
}

const item = {
  id: 1,
  title: '상품명',
  member: '',
  price: 5431212,
  thumbNailList: [],
  itemCategories: [],
  reviewList: [],
  askList: [],
  rate: 11,
  stauts: '',
};

const reviewSlideItems = [
  {
    writer: '닉네임1',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임2',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임3',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임4',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임5',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
  {
    writer: '닉네임6',
    date: '2023.10.18',
    rating: 5,
    category: '디자인',
    productName: '이거 구매했어요 상품명',
    content:
      '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  },
];

const imageUrls = ['#', '#', '#'];

const settings = {
  className: 'center',
  centerMode: true,
  centerPadding: '0px',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};

export default function ItemDetail() {
  const [showDetail, setShowDetail] = useState<boolean>(true);
  const [showQna, setShowQna] = useState<boolean>(false);
  const [showReview, setshowReview] = useState<boolean>(false);

  const toggleVisibility = (type: string) => {
    setShowDetail(false);
    setShowQna(false);
    setshowReview(false);

    switch (type) {
      case 'detail':
        setShowDetail(true);
        break;
      case 'qna':
        setShowQna(true);
        break;
      case 'review':
        setshowReview(true);
        break;
    }
  };

  const { id } = useParams();
  // const [item, setItem] = useState<Item>();
  const navigator = useNavigate();
  // const [imageUrls, setImageUrls] = useState<string[]>([]);

  // useLayoutEffect(() => {
  //   Instance.get(`/api/item/${id}`).then((response) => {
  //     setItem(response.data);
  //   });
  // }, []);

  // useLayoutEffect(() => {
  //   const fetchImages = async () => {
  //     if (item) {
  //       const urls = await Promise.all(item.thumbNailList.map((img) => getImageFile(img.path)));
  //       setImageUrls(urls.filter((url) => url !== null) as string[]);
  //     }
  //   };

  //   fetchImages();
  // }, [item]);

  const handleBuyClick = () => {
    navigator('/order/write', {
      state: {
        itemId: id,
      },
    });
  };

  // const getImageFile = async (path: string) => {
  //   try {
  //     const response = await Instance.get('/api/image', {
  //       headers: { 'Content-type': 'application/json; charset=UTF-8' },
  //       responseType: 'blob',
  //       params: {
  //         imagePath: path,
  //       },
  //     });

  //     if (response.status === 200) {
  //       return URL.createObjectURL(response.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // };

  const mockOnChangeNumber = (num : number) => {

  }

  return (
    <>
      <Header />
      <C.Container>
        <S.ItemDetail>
          <div className="left">
            <Slider {...settings}>
              {/* 상품 썸네일 */}
              {imageUrls.map((url, index) => (
                <div key={index}>
                  <img src={url} alt={`img-${index}`} />
                </div>
              ))}
            </Slider>
            <div>
              <ul className="tabnav">
                <li data-active={showDetail} onClick={() => toggleVisibility('detail')}>
                  재능 설명
                </li>
                <li data-active={showQna} onClick={() => toggleVisibility('qna')}>
                  문의 답변
                </li>
                <li data-active={showReview} onClick={() => toggleVisibility('review')}>
                  고객 후기
                </li>
              </ul>
              <div className="contentbox" data-show={showDetail}>
                {/* 상품 상세정보 */}상세내용
              </div>
              <div className="contentbox qna" data-show={showQna}>
                <h3>문의 답변</h3>
                <table>
                  <colgroup>
                    <col width="80px" />
                    <col width="auto" />
                    <col width="120px" />
                    <col width="120px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="center">1</td>
                      <td>
                        <Link to="#">문의합니다.</Link>
                      </td>
                      <td className="center">홍구름</td>
                      <td className="center">2023-11-15</td>
                      {/** 날짜는 형식 통일해서 변경하세요~ */}
                    </tr>
                    <tr>
                      <td colSpan={4} className="center checkuser">
                        작성시 입력한 비밀번호를 입력해주세요.
                        <br />
                        <input type="password" />
                        <button type="button">확인</button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>내용내용</td>
                    </tr>
                  </tbody>
                </table>
                <Pagination currentPage={0} totalPages={0} onPageChange={mockOnChangeNumber} />
              </div>
              <div className="contentbox review" data-show={showReview}>
                <h3>
                  고객 후기(<strong>★</strong> 4.9 <span>2,500건</span>)
                </h3>
                <C.SortWrapper>
                  <p className="total">총 17,153개</p>
                  <Sort type="order" />
                </C.SortWrapper>
                <div className="review-wrapper">
                  {reviewSlideItems.map((reviewItem, index) => (
                    <ReviewModel
                      writer={reviewItem.writer}
                      date={reviewItem.date}
                      rating={reviewItem.rating}
                      category={reviewItem.category}
                      productName={reviewItem.productName}
                      content={reviewItem.content}
                      key={index}
                    />
                  ))}
                  <Pagination currentPage={0} totalPages={0} onPageChange={mockOnChangeNumber} />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item-detail">
              {/* 상품 정보 */}
              <div>
                <p className="category">
                  <span>상품 카테고리</span>
                  <span>지역</span>
                </p>
                <h2>{item.title}</h2>
                <p className="summary">상품 설명글 짧은글</p>
                <table>
                  {/** 상품 옵션 등 기타 정보 */}
                  <tbody>
                    {/* loop start */}
                    <tr>
                      <th>옵션타이틀</th>
                      <td>{item.rate}</td>
                    </tr>
                    {/* loop end */}
                    <tr>
                      <th>옵션타이틀</th>
                      <td>{item.rate}</td>
                    </tr>
                    <tr>
                      <th>옵션타이틀</th>
                      <td>{item.rate}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="price">
                  <strong>{item.price}</strong> 원
                </p>
              </div>
              <button type="button" onClick={handleBuyClick} className="btn-order">
                구매하기
              </button>
            </div>
            <div className="seller-detail">
              <p className="seller-name">판매자명</p>
              <div className="thumd">{/** 판매자 프로필 썸네일 */}</div>
              <p className="seller-category">
                <svg viewBox="0 0 24 24">
                  <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                </svg>
                <span>재능 카테고리</span>
              </p>
              <p className="seller-category">
                <svg viewBox="0 0 24 24">
                  <path d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z" />
                  <path d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z" />
                </svg>
                <span>지역</span>
              </p>
              <ul className="summary">
                <li>
                  <p className="title">총 거래</p>
                  <p>555건</p>
                </li>
                <li>
                  <p className="title">총 리뷰</p>
                  <p>555건</p>
                </li>
                <li>
                  <p className="title">만족도</p>
                  <p>100%</p>
                </li>
              </ul>
              <div>
                <button type="button" className="btn-contact">
                  로그인 후 문의 가능{/* 로그인 한 상태면 문의하기 */}
                </button>
              </div>
              <h4>소개</h4>
              <p className="seller-summary">판매자 소개글</p>
              <h4>위치</h4>
              <div className="map">{/* 판매자 위치 지도 */}</div>
            </div>
          </div>
        </S.ItemDetail>
      </C.Container>
      <Footer />
    </>
  );
}