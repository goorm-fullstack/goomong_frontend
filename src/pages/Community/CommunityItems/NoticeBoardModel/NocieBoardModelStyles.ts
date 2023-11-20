import styled from 'styled-components';

export const NoticeBoardStyle = styled.div`
  .nboard-container {
    width: 297px;
    height: 180px;
    border-radius: 8px;
    background-color: #4285f4;
    padding-left: 25px;
    padding-top: 25px;
    padding-right: 22px;
  }
  .nboard-type {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04;
    color: #fff;
    margin-bottom: 25px;
  }
  .nboard-title {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    letter-spacing: -0.04;
    margin-bottom: 70px;
  }
  .nboard-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .writer,
  .comment-num {
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04;
  }
  .comment {
    display: flex;
    align-items: center;
  }
  .comment svg {
    margin-right: 8px;
  }
`;
