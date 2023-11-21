import React, { useState, useEffect, useRef } from 'react';

import * as S from './SellerDetailStyles';
import Header from '../../components/layout/Header/Header';
import { Link } from 'react-router-dom';
import ReviewPageModel from '../ReviewPage/ReviewPageModel/ReviewPageModel';
import Pagination from '../../components/Pagination/Pagination';
import Product from '../../components/HotItem/ProductModel/Product';
import Footer from '../../components/layout/Footer/Footer';

interface ReviewProps {
  imageUrl?: string;
  p_category: string;
  title: string;
  content: string;
  like: number;
  comment: number;
  time: string;
  isLastItem?: boolean;
  clickLike?: boolean;
  star: number;
}

interface ProductProps {
  imageUrl?: string;
  sellerName: string;
  productName: string;
  price: string;
  rating: number;
  review: number;
}

interface SellerProps {
  intro: string;
  totalReview: number;
  sellerImageUrl?: string;
  sellerName: string;
  sellerCategory: string;
  sellerLocal: string;
  sellerOnlineIntro: string;
  totalMoney: number;
  totalTransaction: number;
  totalStar: number;
  review: ReviewProps[];
  product: ProductProps[];
}

const SellerDetail: React.FC = () => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );
  const sellerData: SellerProps = {
    intro: "안녕하세요. 고객님! 깔꼬미'홈케어플러스'입니다.",
    sellerName: '판매자 브랜드명',
    sellerCategory: '재능 카테고리',
    sellerLocal: '서울 전체',
    sellerOnlineIntro: '판매자 소개글',
    totalMoney: 255220000,
    totalTransaction: 555,
    totalReview: 13913,
    totalStar: 4.9,
    review: [
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
      {
        p_category: '재능 카테고리',
        title: '게시글 제목',
        content: '게시글 내용입니다.',
        like: 40,
        comment: 40,
        time: '30',
        star: 4.9,
      },
    ],
    product: [
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
      { sellerName: '판매자 브랜드명', productName: '상품 이름을 이렇게 적고요', price: '150,000원~', rating: 4.9, review: 3560 },
    ],
  };

  //억,만 단위 표시 , 1000단위 ,찍기
  const formatCurrency = (money: number): string => {
    const billion: number = Math.floor(money / 100000000);
    const tenThousand: number = Math.floor((money % 100000000) / 10000);

    let result: string = '';
    if (billion > 0) {
      result += `${billion}억 `;
    }
    if (tenThousand > 0) {
      result += `${tenThousand.toLocaleString()}만`;
    }
    return result + '원';
  };

  //1000단위에 ,찍기
  const formatNumber2 = (num: number): string => {
    return num.toLocaleString();
  };

  //페이징처리
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 페이지당 표시할 아이템 수
  const totalPages = Math.ceil(sellerData.review.length / itemsPerPage); // 총 페이지 수 계산 => 연동시 백엔드에서 totalPage를 받아와서 대입

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 아이템 목록 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sellerData.review.slice(indexOfFirstItem, indexOfLastItem);

  const [activeTab, setActiveTab] = useState('seller-intro');
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const shortsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (shortsRef.current) {
        if (scrollY >= document.body.clientHeight - window.innerHeight - 541) {
          shortsRef.current.style.display = 'none';
        } else {
          shortsRef.current.style.display = 'block';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.SellerDetailStyles>
      <Header />
      <div className="top-gray-bg"></div>
      <div className="seller-detail-container">
        <div ref={shortsRef} className="seller-detail-shorts">
          <div className="image-container">{sellerData.sellerImageUrl ? <img src={sellerData.sellerImageUrl} alt="" /> : defaultImage}</div>
          <div className="seller-name">{sellerData.sellerName}</div>
          <div className="seller-local">
            <svg width="14px" height="16px" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: '#6f7785' }}
                d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z"
              />
              <path style={{ fill: '#6f7785' }} d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z" />
            </svg>
            {sellerData.sellerLocal}
          </div>
          <div className="seller-one-line-intro">{sellerData.sellerOnlineIntro}</div>
          <button type="button">문의하기</button>
          <div className="shorts-bottom">
            <div className="title">구몽 활동</div>
            <div className="total-list">
              <div className="top">
                <span className="money">
                  총수익 <span className="number">{formatCurrency(sellerData.totalMoney)}</span>
                </span>
                <span className="transaction">
                  총거래 <span className="number">{sellerData.totalTransaction}</span>
                </span>
              </div>
              <span className="review">
                총리뷰 <span className="number">{sellerData.totalReview}</span>
              </span>
              <span className="star"> ★</span>
              <span className=" star-number">{sellerData.totalStar}</span>
            </div>
          </div>
        </div>

        <div className="seller-detail-content">
          <div className="seller-detail-nav">
            <ul className="nav-list">
              <li className={`seller-intro ${activeTab === 'seller-intro' ? 'active' : ''}`} onClick={() => handleTabClick('seller-intro')}>
                판매자 소개
              </li>
              <li className={`seller-review ${activeTab === 'seller-review' ? 'active' : ''}`} onClick={() => handleTabClick('seller-review')}>
                고객 후기 {formatNumber2(sellerData.totalReview)}
              </li>
              <li className={`seller-item ${activeTab === 'seller-item' ? 'active' : ''}`} onClick={() => handleTabClick('seller-item')}>
                판매 재능
              </li>
            </ul>
          </div>
          {activeTab === 'seller-intro' && <div className="intro">{sellerData.intro}</div>}
          {activeTab === 'seller-review' && (
            <div className="review-container">
              <div className="review-title">고객후기</div>
              <div className="top">
                <svg height="49px" version="1.1" viewBox="0 0 58 58" width="49px" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <desc />
                  <defs />
                  <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                    <g id="019---Star" transform="translate(-1.000000, 0.000000)">
                      <path
                        d="M31.7569,1.14435 L39.2006,16.94809 C39.4742047,17.5450605 40.0274966,17.9662669 40.67576,18.07109 L57.32037,20.60534 C58.0728338,20.7512497 58.6840769,21.2991656 58.9110909,22.0312558 C59.1381048,22.7633461 58.9440977,23.560962 58.4062,24.107 L46.36205,36.40845 C45.8969861,36.8906851 45.6879532,37.5647752 45.79858,38.22553 L48.64182,55.59553 C48.7969313,56.3422303 48.5093863,57.1116407 47.9025754,57.5735945 C47.2957646,58.0355484 46.4775729,58.1079148 45.7991,57.75964 L30.9117,49.55864 C30.3445605,49.2442297 29.6554395,49.2442297 29.0883,49.55864 L14.2009,57.75964 C13.5224271,58.1079148 12.7042354,58.0355484 12.0974246,57.5735945 C11.4906137,57.1116407 11.2030687,56.3422303 11.35818,55.59553 L14.20142,38.22553 C14.3120468,37.5647752 14.1030139,36.8906851 13.63795,36.40845 L1.5938,24.107 C1.05593046,23.5609597 0.861941478,22.7633618 1.08895299,22.0312898 C1.31596449,21.2992177 1.92718692,20.7513115 2.67963,20.60539 L19.32424,18.0711 C19.9725034,17.9662769 20.5257953,17.5450705 20.7994,16.9481 L28.2431,1.14435 C28.5505421,0.448721422 29.2394609,-5.16717968e-06 30,-5.16717968e-06 C30.7605391,-5.16717968e-06 31.4494579,0.448721422 31.7569,1.14435 Z"
                        fill="#F6AB27"
                        id="Shape"
                      />
                      <path
                        d="M37.39,13.11 C32.5890747,15.6770414 28.15587,18.8791741 24.21,22.63 C20.0044812,26.6560517 16.436883,31.2993247 13.63,36.4 L1.59009,24.11 C1.05224467,23.5636351 0.858777828,22.7655877 1.086713,22.0335783 C1.31464817,21.3015689 1.92698179,20.7544339 2.67993,20.61 L19.32007,18.07 C19.967444,17.9624793 20.520694,17.5438036 20.80007,16.95 L28.24,1.14 C28.5507895,0.446404951 29.2399578,1.95277886e-05 30,1.95277886e-05 C30.7600422,1.95277886e-05 31.4492105,0.446404951 31.76,1.14 L37.39,13.11 Z"
                        fill="#F4CD1E"
                        id="Shape"
                      />
                    </g>
                  </g>
                </svg>
                <div className="right">
                  <div className="top">총 {formatNumber2(sellerData.totalReview)}개의 평가</div>
                  <div className="bottom">
                    <span className="star">★</span>
                    {sellerData.totalStar}
                    <span className="back">/5.0</span>
                  </div>
                </div>
              </div>
              <div className="review-list">
                {currentItems.map((item, index) => (
                  <Link to="#null" key={index}>
                    <ReviewPageModel
                      p_category={item.p_category}
                      title={item.title}
                      content={item.content}
                      like={item.like}
                      comment={item.comment}
                      time={item.time}
                      star={item.star}
                    />
                  </Link>
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          )}
          {activeTab === 'seller-item' && (
            <div className="product-container">
              <div className="product-title">판매 재능</div>
              <div className="product-list">
                {sellerData.product.map((item, index) => (
                  <Product
                    key={index}
                    sellerName={item.sellerName}
                    productName={item.productName}
                    price={item.price}
                    rating={item.rating}
                    review={item.review}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </S.SellerDetailStyles>
  );
};

export default SellerDetail;
