import styled from 'styled-components';

export const MyPagePointStyles = styled.div`
  .mypage-point-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    
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
    }
  }
`;
