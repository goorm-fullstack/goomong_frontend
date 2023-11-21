import styled from 'styled-components';

export const MyPageBoardStyles = styled.div`
  .mypage-board-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;

    .board-history a {
      color: #558ff5;
    }

    .board-container {
      width: 100%;
      .title {
        margin-top: 29px;
        color: #101c33;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.04em;
        display: block;
        width: 100%;
        margin-bottom: 45px;
        .small {
          margin-top: 16px;
          color: #404a5c;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }
      }

      .top-list {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #e9ebed;
        padding-bottom: 20px;
        margin-bottom: 32px;


        li {
          margin-right: 16px;
          color: #8e94a0;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.04em;
          cursor: pointer;
        }
      }
    }
  }
`;
