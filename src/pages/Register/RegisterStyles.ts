import styled from 'styled-components';

export const Register = styled.div`
  .register-container {
    width: 640px;
    padding: 0px 160px;
    margin: 90px auto 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 180px);
    justify-content: space-between;
  }
  .logo {
    width: 146px;
    height: 24px;
    cursor: pointer;
  }
  .big {
    font-size: 20px;
    font-weight: 500;
    color: var(--black);
    letter-spacing: -0.04em;
    text-align: center;
  }
  .small {
    width: 236px;
    font-size: 14px;
    font-weight: 400;
    color: #4b4b4b;
    letter-spacing: -0.04em;
    text-align: center;
    line-height: 19.6px;
  }
  .kakao,
  .google,
  .naver,
  .goomong-reg {
    width: 320px;
    height: 46px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .kakao {
    background-color: #fee500;
  }
  .kakao-btn {
    color: #000;
  }
  .google {
    border: 1px solid #eee;
    background-color: #f8f9fd;
  }
  .google-btn {
    color: var(--black);
  }
  .naver {
    background-color: #1ec800;
    margin-bottom: 24px;
  }
  .naver-btn {
    color: #fefeff;
  }
  .btn {
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .goomong-reg {
    border: 1px solid #ccc;
    margin-top: 18px;
    width: 320px;
    height: 46px;
    cursor: pointer;
  }
  .goomong-btn {
    color: var(--black);
  }
  .kakao img,
  .google img,
  .naver img {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
  .and {
    font-size: 12px;
    color: #4b4b4b;
    font-weight: 400;
    letter-spacing: -0.04em;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }
  .and::before,
  .and::after {
    content: '';
    height: 1px;
    width: 120px;
    background-color: #dfdfdf;
    display: inline-block;
  }
  .and::before {
    margin-right: 28px;
  }
  .and::after {
    margin-left: 28px;
  }
  button:hover,
  .kakao:hover,
  .naver:hover {
    opacity: 0.9;
    transition: 0.2s all ease-in-out;
  }
  .google:hover {
    border: 1px solid rgba(238, 238, 238, 0.9);
    transition: 0.2s all ease-in-out;
  }
  .goomong-reg:hover {
    border: 1px solid rgba(204, 204, 204, 0.9);
    transition: 0.2s all ease-in-out;
  }
  .bottom .text {
    font-size: 14px;
    color: #4b4b4b;
    letter-spacing: -0.04em;
    font-weight: 400;
    margin-right: 16px;
  }
  .bottom a {
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
  }
`;
