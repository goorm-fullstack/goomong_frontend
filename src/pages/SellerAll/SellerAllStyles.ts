import styled from 'styled-components';

export const SellerAllStyles = styled.div`
  .seller-all-container {
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
  .top-nav a.rank {
    color: #aab1bc;
  }
  .search-container {
    width: 1200px;
    height: 105px;
    background-color: #f5f8ff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 36px;
  }
  .search-form {
    width: 760px;
    height: 54px;
    background-color: #fff;
    padding: 0 32px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-form input {
    width: 100%;
    height: 100%;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04em;
    border: 0;
  }
  .search-form button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  .search-form input:focus {
    outline: none;
  }
  .align-menu {
    margin: 36px 0 20px;
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
  .find-map {
    width: 288px;
    height: 355px;
    border: 1px solid #e9ebed;
    padding: 84px 64px 60px 64px;
    text-align: center;
    border-radius: 8px;
  }
  p.title {
    color: #101c33;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.04em;
    margin: 16px 0;
  }
  p.bottom {
    color: #6f7785;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
  }
  p.last {
    margin-bottom: 42px;
  }
  .find-map button {
    width: 160px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.04em;
    border-radius: 8px;
    border: 0;
    background-color: #4285f4;
    cursor: pointer;
  }
  .seller-all-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
