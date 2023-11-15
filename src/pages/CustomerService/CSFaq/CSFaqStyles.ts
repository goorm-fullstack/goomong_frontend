import styled from 'styled-components';

export const CSFaqStyles = styled.div`
  .faq-container {
    width: 1280px;
    margin: 0 auto;
  }
  .faq-location {
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
  .faq-location svg {
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

  .faq-title {
    color: #101c33;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04;
    margin-bottom: 40px;
  }

  .category-list {
    display: flex;
    margin-bottom: 27px;
  }
  .category-list li {
    padding: 12px;
    border: 1px solid #dbdee2;
    border-radius: 18px;
    margin-right: 12px;
    color: #101c33;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04;
    cursor: pointer;
  }
  .category-list li:hover {
    color: #dbdee2;
  }
  .category-list li.active {
    border: 0;
    background-color: #4285f4;
    color: #fff;
    font-weight: 600;
  }
  .title-btn {
    color: #6f7785;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 0;
    border-bottom: 1px solid #e9ebed;
    width: 100%;
  }
  .faq-content-list {
    width: 1200px;
    height: 123px;
    background-color: #f7f8f9;
    display: flex;
    align-items: center;
    border: 1px solid #e9ebed;
    padding: 0 22px;
    color: #6f7785;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.04;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-top: 0;
  }

  .visible {
    max-height: 1000px; 
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
