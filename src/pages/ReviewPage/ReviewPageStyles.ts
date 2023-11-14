import styled from 'styled-components';

export const ReviewPageStyles = styled.div`
  .graph .st0 {
    fill: #a6d17a;
  }
  .graph .st1 {
    fill: #ffce6c;
  }
  .graph .st2 {
    fill: #ed6f62;
  }
  .graph .st3 {
    fill: #7dbae7;
  }
  .graph .st4 {
    fill: #474747;
  }

  .review-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
  }
  .score-list {
    display: flex;
  }
  .score-list > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .star::after,
  .gift::after,
  .graph::after {
    content: '';
    height: 40px;
    width: 1px;
    background-color: #dbdee2;
  }

  .star::after {
    margin-left: 95px;
    margin-right: 61px;
  }

  .gift::after {
    margin-left: 134px;
    margin-right: 60px;
  }

  .graph::after {
    margin-left: 113px;
    margin-right: 59px;
  }
  .star-text,
  .gift-text,
  .graph-text,
  .money-text {
    margin-left: 24px;
  }
  .top {
    font-size: 12px;
    color: #404a5c;
    font-weight: 500;
    letter-spacing: -0.04;
    margin-bottom: 9px;
  }
  .bottom {
    color: #101c33;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.04;
  }
  .star-icon {
    color: #fbbc04;
  }
  .total-star {
    color: #b0b7c1;
  }
  .total-score {
    padding: 28px 0;
    margin-bottom: 36px;
  }
  .best-title {
    color: #101c33;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.04;
  }
  .hot-review-container {
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
  .best-review-top {
    display: flex;
    justify-content: space-between;
  }
  .all-review-title {
    color: #101c33;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.04;
    margin: 33px 0 16px;
  }
  .align-menu {
    margin-bottom: 32px;
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
  .all-review-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
