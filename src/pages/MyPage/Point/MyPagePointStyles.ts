import styled from 'styled-components';

export const MyPagePointStyles = styled.div`
  .mypage-point-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    .list-title {
      display: flex;
      height: 50px;
      border-bottom: 1px solid #e9ebed;
      border-top: 1px solid #101c33;
      margin-top: 40px;

      li {
        color: #404a5c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.04em;
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :nth-child(1) {
        width: 50%;
      }
      :nth-child(3) {
        width: 30%;
      }
    }

    .point a {
      color: #558ff5;
    }

    .point-container {
      width: 100%;
      .title {
        margin-top: 29px;
        color: #101c33;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.04em;
        display: block;
        width: 100%;
        margin-bottom: 40px;
        .small {
          margin-top: 16px;
          color: #404a5c;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.04em;
          padding-bottom: 25px;
          border-bottom: 1px solid #e9ebed;
        }
      }
      .total-point {
        width: 896px;
        height: 100px;
        background-color: #f5f8ff;
        border-radius: 8px;

        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 40px 0;
          li {
            color: #101c33;
            font-size: 15px;
            font-weight: 400;
            letter-spacing: -0.04em;
            .number {
              font-size: 18px;
              font-weight: 600;
              letter-spacing: -0.04em;
              margin-left: 33px;
            }
            .second {
              color: #4285f4;
            }
          }
        }
      }
      .point-history-item {
        display: flex;
        padding: 10px 0px;
        li {
          color: #404a5c;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.04em;
          width: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :nth-child(1) {
          width: 50%;
        }
        :nth-child(3) {
          width: 30%;
        }
      }
    }
  }
`;
