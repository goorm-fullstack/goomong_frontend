import styled from 'styled-components';

export const CSHomeStyles = styled.div`
  .cs-home-top {
    width: 100%;
    height: 719px;
    background-color: #f5f8ff;
    overflow: hidden;
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
  .footer {
    width: 100%;
    height: 260px;
    background-color: #161c1c;
    padding-top: 40px;
  }
  .footer-content {
    width: 1200px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .footer-top {
    margin-bottom: 40px;
  }
  .footer-right {
    display: flex;
    flex-direction: column;
  }
  .footer-top-left-list {
    width: 450px;
  }

  .footer-top-left-list li {
    display: inline-block;
    color: var(--dim-black);
    font-size: 12px;
    letter-spacing: -0.04;
    font-weight: 400;
    line-height: 18px;
  }
  .footer-top-left-list li:nth-child(1) {
    margin-right: 24px;
  }
  .footer-top-left-list li:nth-child(3) {
    margin-right: 17px;
  }
  .footer-top-left-list li span {
    display: inline-block;
    width: 1px;
    height: 11px;
    background-color: #666;
    margin: 0px 7px;
  }
  .footer-left-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-left-list li {
    position: relative;
  }

  .footer-left-list li a {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04;
    padding: 0 17px;
  }

  .footer-left-list li:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    height: 17px;
    width: 1px;
    background-color: #fff;
  }
`;
