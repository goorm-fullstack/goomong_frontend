import React, { useState, useEffect, useLayoutEffect } from 'react';
import * as C from '../../Style/CommonStyles';
import * as S from './ReviewPageStyles';
import Header from '../../components/layout/Header/Header';
import ReviewModel from '../../components/Review/ReviewModel/ReviewModel';
import { Link } from 'react-router-dom';
import ReviewPageModel from './ReviewPageModel/ReviewPageModel';
import Footer from '../../components/layout/Footer/Footer';
import { commaNumber, detailDate, getImageFile } from '../../util/func/functions';
import { ReviewData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import Pagination from '../../components/Pagination/Pagination';

const Review: React.FC = () => {
  const topInfo = {
    evaluation: 13913,
    star: 4.9,
    satisfaction: 98,
    accumulate: 37120,
    money: 115120,
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const [reviewData, setReviewData] = useState<ReviewData[]>(); // 리뷰 리스트 상태 저장
  const [currentPage, setCurrentPage] = useState<number>(0); // 현재 페이지 상태 저장
  const [totalData, setTotalData] = useState<number>(0); // 전체 데이터 갯수
  const [totalPage, setTotalPage] = useState<number>(0); // 전체 페이지 수
  const [imageUrls, setImageUrls] = useState<string[]>(); // 리뷰 이미지 저장
  const [aveRate, setAveRate] = useState<string>('0.0'); // 전체 리뷰 평균 평점
  const [customerSatisfaction, setCustomerSatisfaction] = useState<string>('0'); // 고객 만족도
  const [bestReviewData, setBestReviewData] = useState<ReviewData[]>(); // 베스트 리뷰
  const [bestReviewImageUrls, setBestReviewImageUrls] = useState<string[]>(); // 베스트 리뷰 이미지

  const itemsPerPage: number = 8; // 한 페이지당 게시글 갯수

  const nextSlide = () => {
    if (bestReviewData) setSlideIndex((prevIndex) => (prevIndex + 1) % bestReviewData.length);
  };

  const prevSlide = () => {
    if (bestReviewData) setSlideIndex((prevIndex) => (prevIndex === 0 ? bestReviewData.length - 1 : prevIndex - 1));
  };

  // 페이지 숫자 클릭 시 해당 페이지의 아이템 보여주기
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  // 리뷰 리스트 가져오기 및 전체 데이터 갯수 저장
  useEffect(() => {
    Instance.get(`/api/reviews?size=${itemsPerPage}&page=${currentPage}`)
      .then((response) => {
        const data = response.data;
        setReviewData(data);
        if (data.length > 0) {
          setTotalData(data[0].pageInfo.totalElements);
          setTotalPage(data[0].pageInfo.totalPage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  // 이미지 상태 저장
  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (reviewData) {
        const urls = await Promise.all(
          reviewData.map((review) => {
            if (review.imageList.length > 0) return getImageFile(review.imageList[0].path);
            else return null;
          })
        );
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [reviewData]);

  // 전체 리뷰 평균 평점 및 고객 만족도 구하기
  useEffect(() => {
    Instance.get('/api/reviews/aveRate')
      .then((response) => {
        const data = response.data;
        setAveRate(data);
      })
      .catch((error) => {
        console.error(error);
      });

    Instance.get('/api/reviews/customerSatisfaction')
      .then((response) => {
        const data = response.data;
        setCustomerSatisfaction(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reviewData]);

  // 베스트 리뷰 데이터 구하기
  useEffect(() => {
    Instance.get('/api/reviews/best')
      .then((response) => {
        const data = response.data;
        setBestReviewData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reviewData]);

  // 베스트 리뷰 이미지
  useEffect(() => {
    const fetchImages = async () => {
      if (bestReviewData) {
        const urls = await Promise.all(
          bestReviewData.map((review) => {
            if (review.imageList.length > 0) return getImageFile(review.imageList[0].path);
            else return null;
          })
        );
        setBestReviewImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [bestReviewData]);

  return (
    <S.ReviewPageStyles>
      <Header />
      <C.Container>
        <C.PageTitle>고객 후기</C.PageTitle>
        <div className="title"></div>
        <div className="total-score">
          <div className="score-list">
            <div className="star">
              <svg height="49px" version="1.1" viewBox="0 0 58 58" width="49px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <defs />
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
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
              <div className="star-text">
                <div className="top">총 {totalData && commaNumber(totalData)}개의 평가</div>
                <div className="bottom">
                  <span className="star-icon">★</span>
                  {aveRate}
                  <span className="total-star"> / 5.0</span>
                </div>
              </div>
            </div>

            <div className="gift">
              <svg height="48px" version="1.1" viewBox="0 0 58 58" width="48px" xmlns="http://www.w3.org/2000/svg">
                <title />
                <desc />
                <defs />
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                  <g fillRule="nonzero" id="006---Present" transform="translate(0.000000, -1.000000)">
                    <path
                      d="M36.59,26 L55,26 L55,57 C54.9967707,58.1032291 54.1032291,58.9967707 53,59 L5,59 C3.89677088,58.9967707 3.00322927,58.1032291 3,57 L3,26 L21.4,26"
                      fill="#4E435F"
                      id="Shape"
                    />
                    <path
                      d="M21.4,26 L2,26 C0.896770878,25.9967707 0.00322927335,25.1032291 0,24 L0,18 C0.00322927335,16.8967709 0.896770878,16.0032293 2,16 L56,16 C57.1032291,16.0032293 57.9967707,16.8967709 58,18 L58,24 C57.9967707,25.1032291 57.1032291,25.9967707 56,26 L36.59,26"
                      fill="#A773B4"
                      id="Shape"
                    />
                    <path
                      d="M34,37.8 L34,59 L24,59 L24,37.8 C26.1098875,34.8799552 27.7934358,31.6744793 29,28.28 C30.2065642,31.6744793 31.8901125,34.8799552 34,37.8 L34,37.8 Z"
                      fill="#F4CD1E"
                      id="Shape"
                    />
                    <path
                      d="M29,16 L26,16 C24.8957747,13.9411996 23.6424305,11.9659291 22.25,10.09 C20.4,7.61 17.9,4.07 14.41,4.13 C13.7758313,4.1275259 13.1496244,4.27124551 12.58,4.55 C11.5644896,5.0819385 10.8925815,6.0973502 10.8,7.24 C10.837413,8.53142116 11.3752765,9.7577501 12.3,10.66 C14.79,13.45 18.48,14.92 21.97,16 L18.17,16 C5.66,15.13 3.66,2.05 13,1.05 C23,-0.02 29,16 29,16 Z"
                      fill="#F6AB27"
                      id="Shape"
                    />
                    <path
                      d="M39.83,16 L36,16 C39.49,14.92 43.21,13.45 45.7,10.66 C46.6247235,9.7577501 47.162587,8.53142116 47.2,7.24 C47.1074185,6.0973502 46.4355104,5.0819385 45.42,4.55 C44.8503756,4.27124551 44.2241687,4.1275259 43.59,4.13 C40.1,4.07 37.6,7.61 35.75,10.09 C34.3575695,11.9659291 33.1042253,13.9411996 32,16 L29,16 C29,16 35,-0.02 45,1.05 C54.34,2.05 52.34,15.13 39.83,16 Z"
                      fill="#F6AB27"
                      id="Shape"
                    />
                    <path
                      d="M29,28.28 C27.7934358,31.6744793 26.1098875,34.8799552 24,37.8 C18.44,45.17 13,44 13,44 L16,38 L9,36 C15.09,34.89 18.98,30.43 21.4,26 C23.0892767,22.8636418 24.3025571,19.4934184 25,16 L25.57,16 C26.2385147,19.3836603 27.1134836,22.7232361 28.19,26 C28.45,26.79 28.72,27.55 29,28.28 Z"
                      fill="#EC9130"
                      id="Shape"
                    />
                    <path
                      d="M42,38 L45,44 C45,44 39.56,45.17 34,37.8 C31.8901125,34.8799552 30.2065642,31.6744793 29,28.28 C28.72,27.55 28.45,26.79 28.19,26 C27.1134836,22.7232361 26.2385147,19.3836603 25.57,16 L33,16 C33.449692,18.2729713 34.1195155,20.4967855 35,22.64 C35.4676019,23.7884778 35.9984138,24.9101934 36.59,26 C39.01,30.43 42.91,34.89 49,36 L42,38 Z"
                      fill="#F6AB27"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
              <div className="gift-text">
                <div className="top">고객 만족도</div>
                <div className="bottom">{customerSatisfaction}% </div>
              </div>
            </div>
            <div className="graph">
              <svg
                id="Layer_1"
                width="50px"
                height="50px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="XMLID_2_">
                  <polygon className="st0" id="XMLID_15_" points="57,402.1 138.5,402.1 138.5,258 57,299.4" />
                  <polygon className="st1" id="XMLID_18_" points="158,248.1 158,402.1 239.6,402.1 239.6,238.3 197.4,228.2" />
                  <polygon className="st2" id="XMLID_20_" points="259.1,242.9 259.1,402.1 340.6,402.1 340.6,233.7 303.5,253.6" />
                  <polygon className="st3" id="XMLID_21_" points="360.1,223.2 360.1,402.1 441.6,402.1 441.6,179.4" />
                  <path
                    className="st4"
                    d="M7.9,294.5L7.9,294.5c-4.4-8.7-0.9-19.4,7.8-23.8l176.1-89.4l105.6,25.3l167.4-89.9l16.8,31.2 l-179.3,96.3l-106-25.4L31.8,302.3C23,306.7,12.4,303.2,7.9,294.5z"
                    id="XMLID_13_"
                  />
                  <polygon className="st4" id="XMLID_1_" points="412.6,112 506,109.9 461.1,191.9" />
                </g>
              </svg>
              <div className="graph-text">
                <div className="top">누적거래건수</div>
                <div className="bottom">{commaNumber(topInfo.evaluation)}건</div>
              </div>
            </div>

            <div className="money">
              <svg
                enableBackground="new 0 0 64 64"
                height="44px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                width="42px"
                xmlns="http://www.w3.org/2000/svg">
                <g id="saving">
                  <g>
                    <g>
                      <polygon fill="#546E7A" points="32,19 29,19 24,6 32,7    " />
                      <polygon fill="#607D8B" points="39,19 31,19 31,3 45,6    " />
                      <path
                        d="M56,50.5V39c0-11.55-9.45-21-21-21h-2c-11.55,0-21,9.45-21,21v11.5c0,1.5,0,3.5-1.5,4.5S9,58.672,9,59.5     V61h50v-1.5c0-0.828,0-3.5-1.5-4.5S56,52,56,50.5z"
                        fill="#607D8B"
                      />
                      <path
                        d="M56,50.5V39c0-11.55-9.45-21-21-21c0,0,11,6,11,21c0,19-1,21-16,21c-1,0,15,1,14,1s15,0,15,0v-1.5     c0-0.828,0-3.5-1.5-4.5S56,52,56,50.5z"
                        fill="#546E7A"
                      />
                      <path d="M41.833,5.321C41.11,10.834,37.887,15,34,15c-1.062,0-2.073-0.317-3-0.881V19h8l6-13L41.833,5.321z" fill="#546E7A" />
                      <path
                        d="M33,18c-2.383,0-4.667,0.422-6.806,1.161C26.815,19.634,29.036,21,34,21s7.185-1.366,7.806-1.839     C39.667,18.422,37.383,18,35,18H33z"
                        fill="#546E7A"
                      />
                      <path
                        d="M40.895,17.56c-0.242-0.492-0.839-0.697-1.336-0.457C39.54,17.112,37.665,18,34,18     c-3.632,0-5.506-0.872-5.558-0.896c-0.49-0.243-1.09-0.043-1.337,0.449c-0.247,0.494-0.047,1.095,0.447,1.342     C27.644,18.939,29.813,20,34,20s6.356-1.061,6.447-1.105C40.939,18.648,41.138,18.053,40.895,17.56z"
                        fill="#37474F"
                      />
                      <path
                        d="M40.895,17.56c-0.242-0.492-0.839-0.697-1.336-0.457C39.54,17.112,37.665,18,34,18     c-3.632,0-5.506-0.872-5.558-0.896c-0.49-0.243-1.09-0.043-1.337,0.449c-0.247,0.494-0.047,1.095,0.447,1.342     C27.644,18.939,29.813,20,34,20s6.356-1.061,6.447-1.105C40.939,18.648,41.138,18.053,40.895,17.56z"
                        fill="#37474F"
                      />
                    </g>
                    <rect fill="#455A64" height="1" width="50" x="9" y="60" />
                  </g>
                  <g>
                    <rect fill="#FFD740" height="4" width="18" x="24" y="57" />
                    <rect fill="#FFE57F" height="4" width="9" x="24" y="57" />
                    <rect fill="#FFC400" height="1" width="18" x="24" y="60" />
                    <rect fill="#FFFFFF" height="3" width="1" x="25" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="35" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="37" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="39" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="41" y="57" />
                  </g>
                  <g>
                    <rect fill="#FFD740" height="4" width="18" x="23" y="53" />
                    <rect fill="#FFE57F" height="4" width="9" x="23" y="53" />
                    <rect fill="#FFC400" height="1" width="18" x="23" y="56" />
                    <rect fill="#FFFFFF" height="3" width="1" x="24" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="34" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="36" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="38" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="40" y="53" />
                  </g>
                  <g>
                    <rect fill="#FFD740" height="4" width="18" x="6" y="49" />
                    <rect fill="#FFE57F" height="4" width="9" x="6" y="49" />
                    <rect fill="#FFC400" height="1" width="18" x="6" y="52" />
                    <rect fill="#FFFFFF" height="3" width="1" x="7" y="49" />
                    <rect fill="#FFC400" height="3" width="1" x="17" y="49" />
                    <rect fill="#FFC400" height="3" width="1" x="19" y="49" />
                    <rect fill="#FFC400" height="3" width="1" x="21" y="49" />
                    <rect fill="#FFC400" height="3" width="1" x="23" y="49" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M27.989,50.011c-3.313-3.314-3.313-8.707,0-12.021c3.314-3.313,8.707-3.313,12.021,0     c3.313,3.314,3.313,8.707,0,12.021C36.696,53.324,31.304,53.324,27.989,50.011z"
                        fill="#FFD740"
                      />
                      <path
                        d="M34,36c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S29.589,36,34,36 M34,35c-4.971,0-9,4.03-9,9     s4.029,9,9,9s9-4.03,9-9S38.971,35,34,35L34,35z"
                        fill="#FDD835"
                      />
                    </g>
                    <path
                      d="M27.133,48.563c-1.367-3.184-0.766-7.009,1.835-9.609c2.734-2.734,6.827-3.263,10.1-1.606    c0-0.093,0.001-0.186,0.007-0.279c-3.363-2.06-7.813-1.642-10.725,1.269c-2.779,2.779-3.291,6.967-1.539,10.267    C26.917,48.586,27.024,48.57,27.133,48.563z"
                      fill="#FFFFFF"
                    />
                    <g>
                      <path d="M34,50.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S37.584,50.5,34,50.5z" fill="#FFE57F" />
                      <path
                        d="M34,38c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S30.691,38,34,38 M34,37c-3.865,0-7,3.137-7,7     s3.135,7,7,7s7-3.137,7-7S37.865,37,34,37L34,37z"
                        fill="#FFC400"
                      />
                    </g>
                    <g>
                      <path
                        d="M34,41c0.719,0,1,0.521,1,1h2c0-0.814-0.674-1.619-2-1.894V39h-2v1.092c-1.326,0.24-2,1.009-2,2.408     c0,1.313,1.031,2.5,3,2.5c0.577,0,1,0.438,1,1c0,0.595-0.334,1-1,1s-1-0.367-1-1h-2c0,1.245,0.684,1.78,2,1.94V49h2v-1.075     c1.326-0.2,2.025-0.874,2-2.425c0-1.375-1-2.499-3-2.499c-0.563,0-1-0.313-1-1.001C33,41.482,33.281,41,34,41z"
                        fill="#FFAB00"
                      />
                    </g>
                    <path
                      d="M34,36c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S29.589,36,34,36 M34,35c-4.971,0-9,4.03-9,9    s4.029,9,9,9s9-4.03,9-9S38.971,35,34,35L34,35z"
                      fill="#FFC400"
                    />
                  </g>
                  <g>
                    <rect fill="#FFD740" height="4" width="18" x="6" y="57" />
                    <rect fill="#FFE57F" height="4" width="9" x="6" y="57" />
                    <rect fill="#FFC400" height="1" width="18" x="6" y="60" />
                    <rect fill="#FFFFFF" height="3" width="1" x="7" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="17" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="19" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="21" y="57" />
                    <rect fill="#FFC400" height="3" width="1" x="23" y="57" />
                  </g>
                  <g>
                    <rect fill="#FFD740" height="4" width="18" x="5" y="53" />
                    <rect fill="#FFE57F" height="4" width="9" x="5" y="53" />
                    <rect fill="#FFC400" height="1" width="18" x="5" y="56" />
                    <rect fill="#FFFFFF" height="3" width="1" x="6" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="16" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="18" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="20" y="53" />
                    <rect fill="#FFC400" height="3" width="1" x="22" y="53" />
                  </g>
                  <g>
                    <g>
                      <path
                        d="M8.989,46.011c-3.313-3.314-3.313-8.707,0-12.021c3.314-3.313,8.707-3.313,12.021,0     c3.313,3.314,3.313,8.707,0,12.021C17.696,49.324,12.304,49.324,8.989,46.011z"
                        fill="#FFD740"
                      />
                      <path
                        d="M15,32c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S10.589,32,15,32 M15,31c-4.971,0-9,4.03-9,9     s4.029,9,9,9s9-4.03,9-9S19.971,31,15,31L15,31z"
                        fill="#FDD835"
                      />
                    </g>
                    <path
                      d="M8.134,44.563c-1.368-3.185-0.767-7.01,1.834-9.61c2.734-2.734,6.827-3.263,10.101-1.606    c-0.001-0.093,0-0.186,0.007-0.279c-3.364-2.06-7.814-1.642-10.726,1.269c-2.779,2.779-3.291,6.967-1.539,10.267    C7.917,44.586,8.025,44.57,8.134,44.563z"
                      fill="#FFFFFF"
                    />
                    <g>
                      <path d="M15,46.5c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S18.584,46.5,15,46.5z" fill="#FFE57F" />
                      <path
                        d="M15,34c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S11.691,34,15,34 M15,33c-3.865,0-7,3.137-7,7     s3.135,7,7,7s7-3.137,7-7S18.865,33,15,33L15,33z"
                        fill="#FFC400"
                      />
                    </g>
                    <g>
                      <path
                        d="M15,37c0.719,0,1,0.521,1,1h2c0-0.814-0.674-1.619-2-1.894V35h-2v1.092c-1.326,0.24-2,1.009-2,2.408     c0,1.313,1.031,2.5,3,2.5c0.577,0,1,0.438,1,1c0,0.595-0.334,1-1,1s-1-0.367-1-1h-2c0,1.245,0.684,1.78,2,1.94V45h2v-1.075     c1.326-0.2,2.025-0.874,2-2.425c0-1.375-1-2.499-3-2.499c-0.563,0-1-0.313-1-1.001C14,37.482,14.281,37,15,37z"
                        fill="#FFAB00"
                      />
                    </g>
                    <path
                      d="M15,32c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S10.589,32,15,32 M15,31c-4.971,0-9,4.03-9,9    s4.029,9,9,9s9-4.03,9-9S19.971,31,15,31L15,31z"
                      fill="#FFC400"
                    />
                  </g>
                </g>
              </svg>
              <div className="money-text">
                <div className="top">누적거래금액</div>
                <div className="bottom">{commaNumber(topInfo.money)}원</div>
              </div>
            </div>
          </div>
        </div>
        <div className="best-review">
          <div className="best-review-top">
            <div className="best-title">BEST 후기</div>
            <div className="slide-btn">
              <button onClick={prevSlide} style={slideIndex === 0 ? { opacity: 0.5, cursor: 'default' } : {}} disabled={slideIndex === 0}>
                <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256" transform="rotate(180 256 256)" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                style={bestReviewData && slideIndex === bestReviewData.length - 3 ? { opacity: 0.5, cursor: 'default' } : {}}
                disabled={bestReviewData && slideIndex === bestReviewData.length - 3}>
                <svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="11px" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                </svg>
              </button>
            </div>
          </div>
          <div className="hot-review-container">
            {bestReviewData?.length === 0 && <C.NoItem>등록된 리뷰가 없습니다.</C.NoItem>}
            {bestReviewData &&
              bestReviewData.map((reviewItem, index) => (
                <div
                  key={index}
                  style={{
                    display:
                      index === slideIndex || index === (slideIndex + 1) % bestReviewData.length || index === (slideIndex + 2) % bestReviewData.length
                        ? 'block'
                        : 'none',
                  }}>
                  <Link to={`/item/detail/${reviewItem.itemId}`}>
                    <ReviewModel
                      writer={reviewItem.memberId}
                      date={detailDate(reviewItem.regDate)}
                      rating={reviewItem.rate}
                      category={reviewItem.itemCategory}
                      productName={reviewItem.itemName}
                      content={reviewItem.content}
                      imageUrl={bestReviewImageUrls && bestReviewImageUrls[index]}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>

        <div className="all-review">
          <div className="all-review-title">전체 후기</div>
          <div className="align-menu">
            <div className="left">
              <div className="left-category">
                재능 카테고리
                <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                  <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                </svg>
              </div>
            </div>
            <div className="right">
              <div className="align-standard">
                정렬 기준
                <svg height="17px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="17px" xmlns="http://www.w3.org/2000/svg">
                  <polygon transform="rotate(90 256 256)" points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
                </svg>
              </div>
            </div>
          </div>
          <div className="all-review-list">
            {reviewData?.length === 0 && <C.NoItem>등록된 리뷰가 없습니다.</C.NoItem>}
            {reviewData &&
              reviewData.map((item, index) => (
                <Link to={`/item/detail/${item.itemId}`} key={index}>
                  <ReviewPageModel
                    p_category={item.itemCategory}
                    title={item.title}
                    content={item.content}
                    like={item.likeNo}
                    comment={item.commentNo}
                    time={detailDate(item.regDate)}
                    star={item.rate}
                    imageUrl={imageUrls && imageUrls[index]}
                  />
                </Link>
              ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={handlePageChange} />
        </div>
      </C.Container>
      <Footer />
    </S.ReviewPageStyles>
  );
};

export default Review;
