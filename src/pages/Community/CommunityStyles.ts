import styled from 'styled-components';

export const CommunityStyles = styled.div`
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
    letter-spacing: -0.04;
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

  .content-container {
    display: flex;
  }

  .category-list {
    width: 200px;
  }

  .category-list li {
    display: flex;
    align-items: center;
    width: 200px;
    height: 60px;
    padding-left: 21px;
    border-radius: 8px;
  }

  .category-list li:hover {
    background-color: #f7f8f9;
  }

  .category-list li.clicked {
    background-color: #f7f8f9;
  }

  .category-list li .category {
    margin-left: 6px;
    color: var(--black);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04;
  }
  .board-content {
    margin-left: 85px;
  }
  .hot-title {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.04;
    color: var(--black);
    margin-bottom: 22px;
  }

  .board-content-top {
    display: flex;
  }
  .hot-slide {
    width: 620px;
    overflow: hidden;
    display: flex;
  }
  .slide-btn {
    display: flex;
  }
  .slide-btn button {
    background-color: transparent;
    border: 1px solid #aab1bc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-left: 6px;
    cursor: pointer;
  }
  .slide-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .align-menu {
    margin: 20px 0 32px;
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
    letter-spacing: -0.04;
    cursor: pointer;
    border: 1px solid #dbdee2;
    padding: 0px 16px;
    margin-right: 9px;
  }
  .left {
    display: flex;
  }
  .write-btn {
    padding: 12px 48px;
    border: 0;
    background-color: #4285f4;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.04;
    border-radius: 8px;
  }

`;
