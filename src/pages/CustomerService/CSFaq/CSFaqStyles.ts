import styled from 'styled-components';

export const CSFaqStyles = styled.div`
  .faq-container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
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
`;
