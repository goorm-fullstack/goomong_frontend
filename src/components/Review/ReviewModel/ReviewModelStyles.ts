import styled from 'styled-components';

export const ReviewModel = styled.div`
  .review-model {
    margin-top: 30px;
    width: 380px;
    height: 285px;
    border: 1px solid #e9ebed;
    border-radius: 5px;
    padding: 25px 40px 30px 25px;
    margin-right: 30px;
    background-color: #fff;
  }

  .review-model-top {
    display: flex;
  }
  .image-container {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f9fafb;
    border-radius: 50%;
    margin-right: 12px;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .writer-date {
    display: flex;
    margin-bottom: 10px;
  }

  .writer {
    color: #6f7785;
    letter-spacing: -0.04em;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .writer::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #e9ebed;
    margin: 0 8px;
  }

  .date {
    color: #8e94a0;
    letter-spacing: -0.04em;
    font-size: 14px;
    font-weight: 500;
  }
  .review-rating {
    font-size: 15px;
    font-weight: 600;
    color: var(--black);
  }
  .rating-star {
    color: var(--yellow);
    font-size: 14px;
    margin-right: 8px;
  }

  .category-review-product-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
  .category {
    color: var(--blue);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: -0.04;
    width: 50px;
    height: 23px;
    background-color: #e1edff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  .review-product-name {
    font-size: 12px;
    font-weight: 500;
    color: #6f7785;
    letter-spacing: -0.04;
    margin-left: 12px;
  }
  .review-content {
    letter-spacing: -0.04;
    margin-top: 24px;
    font-size: 15px;
    color: var(--black);
    font-weight: 400;
    width: 312px;
    line-height: 23px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;
