import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navigate, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
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
import { AskData, Item, ReviewData, MemberData, SellerData, PageInfoData } from '../../interface/Interface';
import { commaNumber, detailDate, formattingDate } from '../../util/func/functions';
import { Cookies } from 'react-cookie';

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
  const [item, setItem] = useState<Item>();
  const navigator = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [sellerImageUrls, setSellerImageUrls] = useState<string[]>([]);
  const [sellerInfo, setSellerInfo] = useState<SellerData | null>(null);
  const [sellerId, setSellerId] = useState<string>();

  useLayoutEffect(() => {
    Instance.get(`/api/item/${id}`).then((response) => {
      setItem(response.data);
      setSellerId(response.data.member.memberId);
    });
  }, []);

  useLayoutEffect(() => {
    Instance.get(`/api/sellers/seller/${sellerId}`)
      .then((response) => {
        setSellerInfo(response.data);
      })
      .catch(() => {});
  }, [sellerId]);

  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (item) {
        const urls = await Promise.all(item.thumbNailList.map((img) => getImageFile(img.path)));
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
    console.log(imageUrls);
  }, [item]);

  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (sellerInfo) {
        const urls = await Promise.all([getImageFile(sellerInfo.imagePath)]);
        setSellerImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
    console.log(sellerImageUrls);
  }, [sellerInfo]);

  const handleBuyClick = () => {
    // navigator('/order/write', {
    //   state: {
    //     itemId: id,
    //   },
    // });

    navigator('/chatting', {
      state: {
        itemId: id,
      },
    });
  };

  const getImageFile = async (path: string) => {
    try {
      const response = await Instance.get('/api/image', {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        responseType: 'blob',
        params: {
          imagePath: path,
        },
      });

      if (response.status === 200) {
        return URL.createObjectURL(response.data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const mockOnChangeNumber = (num: number) => {};
  const [answerCurrentPage, setAnswerCurrentPage] = useState<number>(0); // 문의 현재 페이지 상태 저장
  const [reviewCurrentPage, setReviewCurrentPage] = useState<number>(0); // 리뷰 현재 페이지
  // 페이지 숫자 클릭 시 해당 페이지의 아이템 보여주기
  const handleAnswerPageChange = (pageNumber: number): void => {
    setAnswerCurrentPage(pageNumber);
  };
  const handleReviewPageChange = (pageNumber: number): void => {
    setReviewCurrentPage(pageNumber);
  };

  const cookies = new Cookies();
  const memberPk = cookies.get('id');
  const [totalAnswerPage, setTotalAnswerPage] = useState<number>(1); // 문의 전체 페이지 수
  const [totalAnswerData, setTotalAnswerData] = useState<number>(); // 문의 전체 데이터 수
  const [totalReviewPage, setTotalReviewPage] = useState<number>(1); // 리뷰 전체 페이지 수
  const [askData, setAskData] = useState<AskData[]>(); // 문의 데이터
  const [reviewData, setReviewData] = useState<ReviewData[]>(); // 리뷰 데이터
  const [isAskClick, setIsAskClick] = useState<number>(0); // 문의 제목 클릭 여부
  const [reviewImage, setReviewImage] = useState<string[]>(); // 리뷰 이미지
  const [orderBy, setOrderBy] = useState<string>();
  const [direction, setDirection] = useState<string>();
  const location = useLocation();

  // 문의 데이터 가져오기
  useEffect(() => {
    Instance.get(`/api/asks/${id}?page=${answerCurrentPage}`)
      .then((response) => {
        const data = response.data;
        setAskData(data);
        if (data.length > 0) {
          setTotalAnswerPage(data[0].pageInfo.totalPage);
          setTotalAnswerData(data[0].pageInfo.totalElements);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [answerCurrentPage, id]);

  // 리뷰 데이터 가져오기
  useEffect(() => {
    if (orderBy && direction) {
      Instance.get(`/api/reviews/${id}?page=${reviewCurrentPage}&orderBy=${orderBy}&direction=${direction}`)
        .then((response) => {
          const data = response.data;
          setReviewData(data);
          if (data.length > 0) setTotalReviewPage(data[0].pageInfo.totalPage);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Instance.get(`/api/reviews/${id}?page=${reviewCurrentPage}`)
        .then((response) => {
          const data = response.data;
          setReviewData(data);
          if (data.length > 0) setTotalReviewPage(data[0].pageInfo.totalPage);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [reviewCurrentPage, id, orderBy, direction]);

  // 문의 클릭 함수
  const clickAsk = (askId: number): void => {
    if (isAskClick !== askId) setIsAskClick(askId);
    else setIsAskClick(0);
  };

  // 리뷰 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (reviewData) {
        const urls = await Promise.all(
          reviewData.map((review) => {
            if (review.imageList.length > 0) return getImageFile(review.imageList[0].path);
            else return null;
          })
        );
        setReviewImage(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [reviewData]);

  useEffect(() => {
    if (location.search) {
      const word = location.search.replace('?', '');
      if (word === 'recent') {
        setOrderBy('regDate');
        setDirection('desc');
      } else if (word === 'old') {
        setOrderBy('regDate');
        setDirection('asc');
      } else if (word === 'rate') {
        setOrderBy('rate');
        setDirection('desc');
      }
    }
  }, [location]);

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
                  {/* 이미지 크기는 임의로 조절했습니다. */}
                  <img src={url} alt={`img-${index}`} style={{ width: '100%', height: '500px' }} />
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
                {/* 상품 상세정보 */}
                {item?.description}
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
                    {askData &&
                      askData.map((ask, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td className="center">{totalAnswerData && totalAnswerData - index}</td>
                            <td>
                              <button className="title" type="button" onClick={() => clickAsk(ask.id)}>
                                {ask.title}
                              </button>
                            </td>
                            <td className="center">{ask.memberId}</td>
                            <td className="center">{formattingDate(ask.regDate)}</td>
                          </tr>
                          {ask.answerList.length === 0 && (
                            <tr>
                              <td colSpan={4} className={isAskClick === ask.id ? 'visible center' : 'none'}>
                                답변 내용이 없습니다.
                              </td>
                            </tr>
                          )}
                          {ask.answerList.length > 0 && (
                            <tr>
                              <td className={isAskClick === ask.id ? 'visible center' : 'none'}>답변 내용</td>
                              <td className={isAskClick === ask.id ? 'visible center' : 'none'} style={{ whiteSpace: 'pre-line' }}>
                                {ask.answerList[0].content}
                              </td>
                              <td className={isAskClick === ask.id ? 'visible center' : 'none'}>판매자</td>
                              <td className={isAskClick === ask.id ? 'visible center' : 'none'}>{formattingDate(ask.answerList[0].regDate)}</td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                  </tbody>
                </table>
                <Pagination currentPage={answerCurrentPage + 1} totalPages={totalAnswerPage} onPageChange={handleAnswerPageChange} />
              </div>
              <div className="contentbox review" data-show={showReview}>
                <h3>
                  고객 후기(<strong>★</strong> {item?.rate.toFixed(1)} <span>{item?.reviewList.length}건</span>)
                </h3>
                <C.SortWrapper>
                  <p className="total">총 {item ? commaNumber(item?.reviewList.length) : 0}개</p>
                  <Sort type="order" />
                </C.SortWrapper>
                <div className="review-wrapper">
                  {reviewData &&
                    reviewData.map((reviewItem, index) => (
                      <ReviewModel
                        writer={reviewItem.memberId}
                        date={detailDate(reviewItem.regDate)}
                        rating={reviewItem.rate}
                        category={''}
                        productName={reviewItem.itemName}
                        content={reviewItem.content}
                        imageUrl={reviewImage && reviewImage[index]}
                        key={index}
                      />
                    ))}
                  <Pagination currentPage={reviewCurrentPage + 1} totalPages={totalReviewPage} onPageChange={handleReviewPageChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="item-detail">
              {/* 상품 정보 */}
              <div>
                <p className="category">
                  {item?.itemCategories ? item?.itemCategories.map((category, index) => <span key={index}>{category.title} </span>) : <></>}
                </p>
                <h2>{item?.title}</h2>
                {/* 짧은 설명글이 엔티티에 없습니다. 혹시 모르니 일단 주석 처리했습니다. <p className="summary">상품 설명글 짧은글</p>*/}
                <table>
                  {/** 상품 옵션 등 기타 정보 */}
                  <tbody>
                    {/* loop start */}
                    {item?.itemOptions ? (
                      item?.itemOptions.map((option, index) => (
                        <tr key={index}>
                          <th>{option.option}</th>
                          <td>{commaNumber(option.price)}원</td>
                        </tr>
                      ))
                    ) : (
                      <></>
                    )}
                  </tbody>
                </table>
                <p className="price">
                  <strong>{item ? commaNumber(item.price) : 0}</strong> 원
                </p>
              </div>
              <button type="button" onClick={handleBuyClick} className="btn-order">
                구매하기
              </button>
            </div>
            <div className="seller-detail">
              <p className="seller-name">{sellerInfo?.name}</p>
              <div className="thumd">
                {sellerImageUrls.length > 0 && sellerImageUrls[0] && <img src={sellerImageUrls[0]} alt="Seller Thumbnail" />}
              </div>
              {/*<p className="seller-category">*/}
              {/*  <svg viewBox="0 0 24 24">*/}
              {/*    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />*/}
              {/*  </svg>*/}
              {/*  <span>재능 카테고리</span>*/}
              {/*</p>*/}
              <p className="seller-category">
                <svg viewBox="0 0 24 24">
                  <path d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z" />
                  <path d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z" />
                </svg>
                <span>{sellerInfo?.saleSido}</span>
              </p>
              <ul className="summary">
                <li>
                  <p className="title">총 거래</p>
                  <p>{sellerInfo?.transactionCnt == null ? '0건' : sellerInfo.transactionCnt + '건'}</p>
                </li>
                <li>
                  <p className="title">총 리뷰</p>
                  <p>{sellerInfo?.reviewCnt == null ? '0건' : sellerInfo.reviewCnt + '건'}</p>
                </li>
                <li>
                  <p className="title">만족도</p>
                  <p>{sellerInfo && sellerInfo.reviewCnt !== null ? (sellerInfo.rate / sellerInfo.reviewCnt / 5.0) * 100 : 0}%</p>
                </li>
              </ul>
              <div>
                {memberPk === undefined ? (
                  <Link to="/login" className="btn-contact">
                    로그인 후 문의 가능
                  </Link>
                ) : (
                  <Link to="/write/faq" state={{ itemId: id }} className="btn-contact">
                    문의하기
                  </Link>
                )}
              </div>
              <h4>소개</h4>
              <p className="seller-summary">{sellerInfo?.description}</p>
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
