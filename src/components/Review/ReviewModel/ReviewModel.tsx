import React, { useRef, useEffect } from 'react';
import '../../../style/global.css';
import './ReviewModel.css';

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
    <div className="review-model">
      <div className="review-model-top">
        {/* <img src={imageUrl} alt={writer} className="writer-image" /> */}
        <div className="writer-image">image</div>
        <div className="writer-info">
          <div className="writer-date">
            <span className="writer">{writer}</span>
            <span className="date">{date}</span>
          </div>
          <div className="rating">{'★'.repeat(rating)}</div>
          <div className="category-review-product-name">
            <span className="category">{category}</span>
            <span className="review-product-name">{productName}</span>
          </div>
        </div>
      </div>
      <div className="review-content" ref={contentRef}>{content}</div>
    </div>
  );
};

export default ReviewModel;
