import styled from 'styled-components';

export const Product = styled.div`
  .product {
    width: 264px;
    height: 316px;
    margin-top: 30px;
    margin-left: 48px;
  }
  .image-container {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    background-color: #f5f6f7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  .product-left {
    margin-bottom: 16px;
  }
  .seller-name {
    letter-spacing: -0.04em;
    font-weight: 600;
    font-size: 12px;
    color: #6f7785;
    margin-bottom: 10px;
  }
  .product-name {
    letter-spacing: -0.04em;
    color: var(--black);
    font-size: 15px;
    font-weight: 500;
  }
  .product-right {
    float: right;
  }
  .product-price {
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.04em;
    color: var(--dim-black);
    text-align: right;
    margin-bottom: 10px;
  }
  .product-rating-review {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-rating {
    letter-spacing: -0.02em;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-rating {
    font-size: 12px;
    color: #8e94a0;
    letter-spacing: 0.02;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rating-star {
    color: var(--yellow);
  }
  .product-rating:after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 8px;
  }
  .product-review {
    letter-spacing: -0.02em;
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
  }
`;
