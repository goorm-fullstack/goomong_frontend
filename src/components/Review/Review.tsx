import React from 'react';
import Slide from '../Slide/Slide';
import ReviewModel from './ReviewModel/ReviewModel';
import * as S from './Style';
import { Link } from 'react-router-dom';

const Review: React.FC = () => {
  const reviewModel = [
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+1',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+2',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+3',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+4',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+5',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'https://via.placeholder.com/800x300?text=review+6',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
  ];

  return (
    <S.review>
      <div className="review-container">
        <div className="review-main-top">
          <div className="title-top">구몽을 이용한 회원들의 생생한 후기</div>
          <div className="title-bottom">
            <div className="sub-title">실시간 구매자 후기</div>
            <div className="score">4.9점</div>
          </div>
        </div>
        <Slide>
          {reviewModel.map((reviewModel, index) => (
            <Link to="#null" key={index}>
              <ReviewModel
                key={index}
                imageUrl={reviewModel.imageUrl}
                writer={reviewModel.writer}
                date={reviewModel.date}
                rating={reviewModel.rating}
                category={reviewModel.category}
                productName={reviewModel.productName}
                content={reviewModel.content}
              />
            </Link>
          ))}
        </Slide>
      </div>
    </S.review>
  );
};

export default Review;
