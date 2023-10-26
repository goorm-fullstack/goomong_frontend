import styled from 'styled-components';

export const Main = styled.div`
  .green-bg,
  .blue-bg,
  .black-bg {
    width: 100%;
    margin-top: 100px;
    height: 160px;
    position: relative;
  }
  .green-bg {
    background-color: #34a853;
  }
  .blue-bg {
    background-color: #4285f4;
  }
  .black-bg {
    background-color: #161c1c;
  }

  .green-bg img,
  .blue-bg img,
  .black-bg img {
    width: 100%;
  }
  .bg-text {
    position: absolute;
    left: 360px;
    top: 52px;
    font-size: 22px;
    color: #fff;
    letter-spacing: -0.04em;
  }
  .bg-second-text {
    top: 87px;
  }
  .bg-btn {
    position: absolute;
    right: 360px;
    top: 58px;
    font-size: 15px;
    color: var(--black);
    font-weight: 600;
    width: 160px;
    height: 45px;
    border: 0;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;
