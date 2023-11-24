import React, { useEffect, useState, useLayoutEffect } from 'react';
import ReviewModel from './ReviewModel/ReviewModel';
import * as S from './ReviewStyles';
import { Link } from 'react-router-dom';
import { ReviewData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { detailDate, getImageFile } from '../../util/func/functions';
import Slider from 'react-slick';

const Review: React.FC = () => {
  const [reviewData, setReviewData] = useState<ReviewData[]>(); // 리뷰 데이터 상태 관리
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지 데이터 상태 관리
  const [reviewAve, setReviewAve] = useState<string>(); // 전체 평균 평점

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // 전체 리뷰 중 최신 10건 상태 저장
  useEffect(() => {
    Instance.get('/api/reviews')
      .then((response) => {
        const data = response.data;
        setReviewData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  // 전체 평균 평점 가져오기
  useEffect(() => {
    Instance.get('/api/reviews/aveRate')
      .then((response) => {
        const data = response.data;
        console.log(data);
        setReviewAve(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [reviewData]);

  return (
    <S.Review>
      <div className="review-container">
        <div className="review-main-top">
          <div className="title-top">구몽을 이용한 회원들의 생생한 후기</div>
          <div className="title-bottom">
            <div className="sub-title">실시간 구매자 후기</div>
            <div className="score">{Number(reviewAve).toFixed(1)}점</div>
          </div>
        </div>

        {reviewData && (
          <Slider {...settings}>
            {reviewData.map((reviewModel, index) => (
              <Link to={`/item/detail/${reviewModel.itemId}`} key={index}>
                <ReviewModel
                  key={`reviewModel-${index}`}
                  writer={reviewModel.memberId}
                  date={detailDate(reviewModel.regDate)}
                  rating={reviewModel.rate}
                  category={reviewModel.itemCategory}
                  productName={reviewModel.itemName}
                  content={reviewModel.content}
                  imageUrl={imageUrls && imageUrls[index]}
                />
              </Link>
            ))}
          </Slider>
        )}
      </div>
    </S.Review>
  );
};

export default Review;
