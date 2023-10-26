import React, { useRef, useEffect } from 'react';
import * as S from './Style';

interface ReviewProps {
  imageUrl: string;
  writer: string;
  date: string;
  rating: number;
  category: string;
  productName: string;
  content: string;
}

const ReviewModel: React.FC<ReviewProps> = ({ imageUrl, writer, date, rating, category, productName, content }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      let modifiedContent = content;

      while (element.scrollHeight > element.clientHeight) {
        modifiedContent = modifiedContent.slice(0, modifiedContent.length - 1);
        element.innerText = modifiedContent + '...';
      }
    }
  }, [content]);

  return (
    <S.ReviewModel>
      <div className="review-model">
        <div className="review-model-top">
          <div className="image-container">
            <img src={imageUrl} alt={writer} className="writer-image" />
          </div>
          <div className="writer-info">
            <div className="writer-date">
              <span className="writer">{writer}</span>
              <span className="date">{date}</span>
            </div>
            <div className="review-rating">
              <span className="rating-star">{'★'.repeat(Math.round(rating))} </span>
              {rating}
            </div>
            <div className="category-review-product-name">
              <div className="category">{category}</div>
              <div className="review-product-name">{productName}</div>
            </div>
          </div>
        </div>
        <div className="review-content" ref={contentRef}>
          {content}
        </div>
      </div>
    </S.ReviewModel>
  );
};

export default ReviewModel;
