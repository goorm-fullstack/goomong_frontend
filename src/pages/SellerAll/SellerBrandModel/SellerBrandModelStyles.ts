import styled from 'styled-components';

export const SellerBrandModelStyles = styled.div`
  .seller-brand-model-container {
    width: 288px;
    height: 355px;
    border: 1px solid #eaecee;
    border-radius: 8px;
    margin-bottom: 16px;
  }
  .seller-brand-model-container .top {
    width: 288px;
    height: 96px;
    background-color: #f7f8f9;
    position: relative;
  }
  .seller-brand-model-container .top .image-container {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #eaecee;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 25px;
    top: 64px;
  }
  .seller-brand-contents {
    margin-top: 49px;
    padding: 0 25px 25px 25px;
  }
  .seller-brand-model-seller-info {
    margin-bottom: 24px;
  }
  .seller-brand-model-seller-name {
    margin-bottom: 8px;
    color: #101c33;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.04em;
  }
  .seller-brand-model-category-list {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  .seller-brand-model-category-list li {
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
  }
  .seller-brand-model-content {
    color: #6f7785;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    height: 80px;
    margin-bottom: 10px;
  }

  .money,
  .transaction,
  .review {
    color: #6f7785;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: -0.04em;
  }
  .money::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 6px;
    display: inline-block;
  }
  .number {
    color: #101c33;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-left: 6px;
  }
  .bottom {
    margin-top: 12px;
  }
  .star {
    margin-left: 6px;
  }
  .star,
  .star-number {
    color: #fbbc04;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.02em;
  }
  .star-number {
    color: #8e94a0;
  }
`;
