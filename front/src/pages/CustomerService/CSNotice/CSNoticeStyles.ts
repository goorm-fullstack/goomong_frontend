import styled from 'styled-components';

export const CSNoticeStyles = styled.div`
  .cs-notice-container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
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
  .notice-list li a:hover {
    color: #558ff5;
  }

  // 여기부터 detail style
  .notice-detail-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .notice-detail-content {
    width: 50%;
    min-height: 28.5rem;
  }
  .notice-title {
    font-size: 20px;
    font-weight: 500;
    color: var(--black);
    margin-bottom: 40px;
  }
  .notice-content {
    font-size: 15px;
    font-weight: 500;
    color: var(--gray);
    letter-spacing: 0.04rem;
  }
  .other-notice-container {
    width: 16.2rem;
    align-self: flex-start;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    padding: 1.3rem 1.3rem 0 1.3rem;
  }
  .other-notice-title {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 1.9rem;
    color: var(--dim-black);
  }
  .other-notice-list li {
    margin-bottom: 1.6rem;
  }
  .other-notice-list li a {
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
  .other-notice-list li a:hover {
    color: #558ff5;
  }
`;
