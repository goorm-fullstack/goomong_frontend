import React from 'react';
import Slide from '../Slide/Slide';
import ReviewModel from './ReviewModel/ReviewModel';
import '../../style/global.css';
import './Review.css';

const Review: React.FC = () => {
  
  const reviewModel = [
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
    {
      imageUrl: 'path/to/image1.jpg',
      writer: '닉네임',
      date: '2023.10.18',
      rating: 5,
      category: '디자인',
      productName: '이거 구매했어요 상품명',
      content:
        '리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.리뷰 내용을 적어봅시다.',
    },
  ];

  return (
    <div className="review-container">
      <h1>구몽을 이용한 회원들의 생생한 후기</h1>
      <div className="review-main-top">
        <h2>실시간 구매자 후기</h2>
        <div className="score">4.9점</div>
      </div>
      <Slide>
        {reviewModel.map((reviewModel, index) => (
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
        ))}
      </Slide>
    </div>
  );
};

export default Review;
