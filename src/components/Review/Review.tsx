import React, { useEffect, useState, useLayoutEffect } from 'react';
import Slide from '../Slide/Slide';
import ReviewModel from './ReviewModel/ReviewModel';
import * as S from './ReviewStyles';
import { Link } from 'react-router-dom';
import { ReviewData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { detailDate, getImageFile } from '../../util/func/functions';

const Review: React.FC = () => {
  const [reviewData, setReviewData] = useState<ReviewData[]>(); // 리뷰 데이터 상태 관리
  const [imageUrls, setImageUrls] = useState<string[]>(); // 이미지 데이터 상태 관리

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

  // const reviewModel = [
  //   {
  //     writer: '닉네임1',
  //     date: '2023.10.18',
  //     rating: 5,
  //     category: '디자인',
  //     productName: '이거 구매했어요 상품명',
  //     content:
  //       '123456리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  //   },
  //   {
  //     writer: '닉네임2',
  //     date: '2023.10.18',
  //     rating: 5,
  //     category: '디자인',
  //     productName: '이거 구매했어요 상품명',
  //     content:
  //       '12345리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
  //   },
  // ]

  return (
    <S.Review>
      <div className="review-container">
        <div className="review-main-top">
          <div className="title-top">구몽을 이용한 회원들의 생생한 후기</div>
          <div className="title-bottom">
            <div className="sub-title">실시간 구매자 후기</div>
            <div className="score">4.9점</div>
          </div>
        </div>

        {reviewData && (
          <Slide>
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
          </Slide>
        )}
      </div>
    </S.Review>
  );
};

export default Review;
