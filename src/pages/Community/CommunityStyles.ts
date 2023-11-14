import styled from 'styled-components';

export const CommunityStyles = styled.div`
  .community-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
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
  }
  .left {
    display: flex;
  }

  .left-category {
    margin-right: 9px;
  }
  .pagination {
    margin-top: 51px;
  }
  .pagination button {
    width: 32px;
    height: 32px;
    color: #8e94a0;
    font-size: 600px;
    font-size: 12px;
    letter-spacing: -0.04;
    border: 0;
    border-radius: 3px;
    margin-right: 8px;
    background-color: #f5f6f7;
    cursor: pointer;
    margin-bottom: 134px;
  }
  .pagination button.active {
    background-color: #101c33;
    color: #fff;
  }
  .pagination button:hover {
    background-color: #8e94a0;
    color: #fff;
  }
  .black-bg {
    width: 100%;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .black-bg {
    background-color: #161c1c;
  }
  .black-bg img {
    width: 100%;
  }
  .main-bg-text {
    position: absolute;
    width: 1280px;
    height: 100%;
    padding: 0px 40px;
    top: 0;
    display: flex;
    justify-content: space-between;
  }
  .text {
    margin-top: 53px;
  }
  .bg-text {
    font-size: 22px;
    color: #fff;
    letter-spacing: -0.04em;
  }
  .bg-second-text {
    margin-top: 15px;
  }
  .btn {
    width: 160px;
    height: 45px;
    margin-top: 59px;
  }
  .bg-btn {
    font-size: 15px;
    color: var(--black);
    font-weight: 600;
    width: 160px;
    height: 45px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
  }
  .btn a {
    display: inline-block;
    height: 45px;
    border-radius: 10px;
  }
  .btn a:hover button {
    background-color: #f5f6f7;
  }
`;
