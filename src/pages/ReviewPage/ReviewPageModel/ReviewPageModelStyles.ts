import styled from 'styled-components';

export const ReviewPageModelStyles = styled.div`
  .review-page-model-container {
    width: 280px;
    height: 320px;
    margin-right: 24px;
    margin-bottom: 60px;
  }

  .image-container {
    width: 282px;
    height: 200px;
    border: 1px solid #aab1bc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .review-page-model-category-list {
    display: flex;
    margin: 12px 0;
  }
  .review-page-model-category-list li {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: #8e94a0;
  }
  .review-page-model-category-list li:nth-child(1)::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 13px;
    display: inline-block;
  }
  .review-page-model-title {
    color: #101c33;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .review-page-model-content {
    color: #101c33;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .review-page-model-time {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: #8e94a0;
    margin-bottom: 8px;
  }
  .review-page-model-bottom {
    display: flex;
    justify-content: space-between;
  }
  .review-page-model-left {
    font-size: 15px;
    font-weight: 600;
    color: var(--black);
  }
  .review-page-model-star {
    color: var(--yellow);
    font-size: 14px;
    margin-right: 8px;
  }
  .review-page-model-right {
    display: flex;
  }
  .review-page-model-right svg {
    margin-right: 8px;
  }
  .review-page-model-like {
    margin-right: 8px;
  }
  .review-page-model-like,
  .review-page-model-comment {
    color: #aab1bc;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
