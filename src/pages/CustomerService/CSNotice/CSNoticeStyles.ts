import styled from 'styled-components';

export const CSNoticeStyles = styled.div`
  .cs-notice-container {
    width: 1280px;
    margin: 0 auto;
  }
  .notice-location {
    margin: 20px 0px 30px;
    display: flex;
    justify-content: space-between;
  }
  .total-location {
    color: #101c33;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.04;
  }
  .left {
    display: flex;
  }
  .small-location {
    color: #4285f4;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: -0.04;
  }
  .notice-location svg {
    margin: 0 10px;
  }

  .search-bar {
    width: 260px;
    height: 48px;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-bar input {
    border: 0;
    padding-left: 18px;
  }
  .search-btn {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  .cs-notice-content .title {
    color: #101c33;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04;
    margin-bottom: 25px;
  }
  .notice-list li {
    color: #6f7785;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.04;
    padding: 15px 0;
    cursor: pointer;
  }
  .notice-list li:hover {
    color: #558ff5;
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
