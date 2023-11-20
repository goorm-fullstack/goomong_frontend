import styled from 'styled-components';

export const Main = styled.div`
  .green-bg,
  .blue-bg,
  .black-bg {
    width: 100%;
    margin-top: 100px;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .green-bg {
    background-color: #34a853;
  }
  .blue-bg {
    background-color: #4285f4;
    margin-top: 0px;
  }
  .black-bg {
    background-color: #161c1c;
  }

  .green-bg img,
  .blue-bg img,
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
