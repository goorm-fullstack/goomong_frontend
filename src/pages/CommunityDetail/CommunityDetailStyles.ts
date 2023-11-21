import styled from 'styled-components';

export const CommunityDetailStyles = styled.div`
  .community-detail-container {
    width: 1280px;
    padding: 0 300px;
    margin: 79px auto 0;
  }

  .comment-text {
    color: #101c33;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 16px;
  }
  .comment-text-box {
    width: 680px;
    height: 85px;
    border-radius: 8px;
    border: 1px solid #dbdee2;
    margin-bottom: 16px;
  }
  .comment-bottom {
    display: flex;
    justify-content: space-between;
  }
  .warn-text {
    font-size: 12px;
    font-weight: 400;
    color: #6f7785;
    letter-spacing: -0.04em;
    display: flex;
  }
  .warn-text svg {
    margin-right: 6px;
  }
  .comment-submit-btn {
    background-color: #4285f4;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: 0;
    width: 116px;
    height: 38px;
    cursor: pointer;
    margin-bottom: 32px;
  }
  .black-bg {
    width: 100%;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 125px;
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
