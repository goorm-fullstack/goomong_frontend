import styled from 'styled-components';

export const SellerRankStyles = styled.div`
  .seller-rank-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
  }

  .top-nav {
    margin: 30px 0 28px;
  }
  .top-nav a {
    color: #101c33;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: -0.04em;
    margin-right: 25px;
  }
  .top-nav a.find {
    color: #aab1bc;
  }
  .rank-content .title {
    color: #101c33;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.04em;
    text-align: center;
  }
  .rank-model {
    display: flex;
  }
  .rank-model-container {
    margin: 40px 0 100px;
    margin-right: 30px;
  }

  .bottom .top {
    color: #101c33;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.04em;
  }
  .align-menu {
    margin: 20px 0 30px;
    display: flex;
    justify-content: space-between;
  }

  .left-category,
  .left-local,
  .align-standard {
    width: 145px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #404a5c;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.04em;
    cursor: pointer;
    border: 1px solid #dbdee2;
    padding: 0px 16px;
  }
  .left {
    display: flex;
  }
  .left-category {
    margin-right: 9px;
  }
  .seller-list-item {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e9ebed;
  }
  .seller-list-item a {
    display: flex;
  }
  .seller-list-item a .image-container {
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e9ebed;
    border-radius: 8px;
    margin-right: 23px;
  }
  .seller-list-item a .right .category {
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
  }
  .seller-list-item a .right .seller-name {
    color: #101c33;
    font-size: 16px;
    font-weight: 600px;
    letter-spacing: -0.04em;
    margin-bottom: 8px;
  }
  .seller-list-item a .right .money,
  .seller-list-item a .right .review,
  .seller-list-item a .right .transaction {
    color: #6f7785;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .seller-list-item a .right .money .number,
  .seller-list-item a .right .review .number,
  .seller-list-item a .right .transaction .number {
    color: #101c33;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  .seller-list-item a .right .money::after,
  .seller-list-item a .right .transaction::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 8px;
    display: inline-block;
  }
  .seller-list-item a .right .star,
  .seller-list-item a .right .star-number {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.02;
    color: #fbbc04;
  }
  .seller-list-item a .right .star-number {
    color: #8e94a0;
  }
  .seller-list-item.last-item {
    border: 0;
    padding: 0;
    margin-bottom: 112px;
  }
`;
