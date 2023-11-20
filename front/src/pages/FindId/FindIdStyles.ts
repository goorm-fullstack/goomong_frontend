import styled from 'styled-components';

export const FindId = styled.div`
  .findid-container {
    width: 640px;
    padding: 95px 160px 0 160px;
    margin: 90px auto 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 184px);
  }
  .logo {
    width: 146px;
    height: 24px;
    cursor: pointer;
  }
  .big {
    margin-top: 70px;
    color: var(--black);
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04;
  }
  .small {
    text-align: center;
    margin-top: 10px;
  }
  .small p {
    color: #4b4b4b;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04;
    line-height: 19.6px;
  }
  .find-id {
    margin-top: 32px;
  }
  .find-id .text {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    letter-spacing: -0.04;
    margin-bottom: 10px;
  }
  .box {
    width: 320px;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input:focus {
    outline: none;
  }
  .email-text {
    margin-top: 18px;
  }
  .email-box {
    margin-bottom: 33px;
  }
  .submit-btn {
    width: 320px;
    height: 50px;
    border: 0;
    background-color: #4285f4;
    color: #fefeff;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.04;
    cursor: pointer;
  }
  .submit-btn:hover {
    opacity: 0.9;
    transition: 0.2s all ease-in-out;
  }
  .bottom {
    margin-top: 17px;
    color: #4b4b4b;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .bottom a {
    margin-left: 18px;
    color: var(--black);
    text-decoration: underline;
  }
`;
