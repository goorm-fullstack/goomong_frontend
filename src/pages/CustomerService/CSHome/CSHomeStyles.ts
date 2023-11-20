import styled from 'styled-components';

export const CSHomeStyles = styled.div`
  .cs-header-container {
    border-bottom: 0 !important;
  }
  .cs-home-top {
    width: 100%;
    height: 719px;
    background-color: #f5f8ff;
    overflow: hidden;
    position: relative;
  }

  .cs-header-container {
    background-color: #f5f8ff;
  }

  .cs-top-content {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
  }

  .cs-home-center {
    margin-top: 100px;
  }

  .cs-home-center-title {
    color: #101c33;
    font-weight: 600;
    font-size: 44px;
    letter-spacing: -0.04;
    text-align: center;
  }

  .search-bar {
    margin: 30px auto 0;
    width: 760px;
    height: 54px;
    color: #101c33;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 30px;
    padding: 0 31px;
  }

  .search-bar input {
    border: 0;
  }

  .search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .megaphone {
    text-align: center;
    margin-top: 100px;
  }

  .megaphone img {
    width: 282px;
    height: 308px;
    position: absolute;
    top: 65%;
  }

  .cs-home-bottom {
    width: 1280px;
    padding: 0 40px;
    margin: 60px auto 0;
  }

  .bottom-title {
    color: #101c33;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.04;
    margin-bottom: 30px;
  }

  .bottom-list {
    display: flex;
  }

  .bottom-list a {
    display: block;
    width: 380px;
    height: 180px;
    border: 1px solid #bfc6d2;
    border-radius: 8px;
    margin-right: 29px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .bottom-list a div {
    font-size: 20px;
    color: #101c33;
    letter-spacing: -0.04;
    font-weight: 400;
    margin-top: 18px;
  }

  .bottom-list a:hover {
    border: 1px solid #4285f4;
  }

  .bg-gray {
    width: 100%;
    height: 457px;
    background-color: #f7f8f9;
    margin-top: 60px;
    padding-top: 60px;
  }

  .gray-content {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
  }

  .right {
    padding-left: 40px;
  }
  .left,
  .right {
    width: 600px;
  }

  .right-title,
  .left-title {
    color: #101c33;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.04;
    margin-bottom: 40px;
  }

  .right-list li,
  .left-list li {
    margin-bottom: 28px;
    font-size: 15px;
    font-weight: 500;
    color: #101c33;
    letter-spacing: -0.04;
  }

  .more-btn {
    color: #4285f4;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.04;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
  }
`;
