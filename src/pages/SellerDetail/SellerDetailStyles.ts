import styled from 'styled-components';

export const SellerDetailStyles = styled.div`
  .top-gray-bg {
    width: 100%;
    height: 240px;
    background-color: #f7f8f9;
    margin-bottom: 24px;
  }
  .seller-detail-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    position: relative;
  }
  .seller-detail-shorts {
    width: 302px;
    height: 470px;
    border: 1px solid #e9ebed;
    background-color: #fff;
    border-radius: 8px;
    position: fixed;
    top: 181px;
    padding: 40px 39px 43px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f7f8f9;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .seller-name {
      color: #101c33;
      letter-spacing: -0.04em;
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .seller-local {
      color: #6f7785;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.04em;
      display: flex;
      display: flex;

      svg {
        margin-right: 7px;
      }
    }

    .seller-one-line-intro {
      margin: 24px 0;
      color: #6f7785;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.04em;
    }

    button {
      width: 224px;
      height: 38px;
      border-radius: 8px;
      color: #fff;
      background-color: #4285f4;
      font-weight: 600;
      font-size: 15px;
      letter-spacing: -0.04em;
      vertical-align: center;
      text-align: center;
      border: 0;
      margin-bottom: 32px;
    }

    .shorts-bottom {
      float: left;

      .title {
        color: #101c33;
        letter-spacing: -0.04em;
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .money,
      .transaction,
      .review {
        color: #6f7785;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: -0.04em;
      }
      .top {
        margin-bottom: 12px;
      }
      .number {
        color: #101c33;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: -0.04em;
        margin-left: 6px;
      }
      .money:after {
        content: '';
        height: 10px;
        width: 1px;
        background-color: #dbdee2;
        margin: 0px 8px;
        display: inline-block;
      }

      .star {
        color: #fccf6d;
        margin-right: 3px;
        margin-left: 5px;
        font-size: 12px;
        letter-spacing: -0.04em;
        font-weight: 500;
      }
      .star-number {
        color: #8e94a0;
        font-size: 12px;
        letter-spacing: -0.04em;
        font-weight: 500;
      }
    }
  }

  .seller-detail-content {
    padding-left: 342px;
  }
  .nav-list {
    display: flex;
    color: #8e94a0;
    letter-spacing: -0.04em;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 32px;
  }
  .nav-list li {
    padding: 22px 0px;
    margin-right: 18px;
    cursor: pointer;
  }
  .nav-list li.active {
    color: #101c33;
    border-bottom: 2px solid #101c33;
  }
  .intro {
    color: #0f1c34;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04em;
    height: 600px;
  }
  .review-title {
  }
  .review-title,
  .product-title {
    color: #101c33;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 24px;
    margin-top: 71px;
  }
  .top {
    display: flex;
  }
  .top svg {
    margin-right: 24px;
  }
  .right .top {
    color: #404a5c;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-bottom: 8px;
  }
  .right .bottom {
    color: #101c33;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 25px;
  }
  .right .bottom .star {
    color: #fbbc04;
    margin-right: 5px;
  }
  .right .bottom .back {
    color: #aab1bc;
  }
  .review-list,
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .product-list {
    gap: 18px;
  }
  .product {
    margin-left: 0;
  }
`;
