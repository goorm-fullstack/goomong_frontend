import styled from 'styled-components';

export const NotFoundStyles = styled.div`
  .not-found-container {
    width: 1280px;
    margin: 0 auto;
    padding: 200px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .one {
      color: #4285f4;
      font-size: 100px;
      font-weight: 600;
      margin-bottom: 32px;
    }
    .two {
      color: #101c33;
      font-size: 36px;
      font-weight: 600;
      letter-spacing: -0.04em;
      margin-bottom: 40px;
    }
    .three {
      margin-bottom: 60px;
      p {
        color: #6f7785;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.04em;
      }
      :nth-child(1) {
        margin-bottom: 15px;
      }
    }
    button {
      background-color: #4285f4;
      border-radius: 8px;
      width: 116px;
      height: 38px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: -0.04em;
      font-size: 14px;
      font-weight: 600;
      border: 0;
    }
  }
`;
