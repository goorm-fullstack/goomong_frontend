import styled from 'styled-components';

export const Register = styled.div`
  .register-container {
    width: 640px;
    padding: 0px 160px;
    margin: 0 auto;
    margin-top: 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 90px);
    margin-bottom: 90px;
  }
  .logo {
    width: 146px;
    height: 24px;
    margin-bottom: 205px;
  }
  .reg-text {
    margin-bottom: 70px;
  }
  .big {
    font-size: 20px;
    font-weight: 500;
    color: var(--black);
    letter-spacing: 0.04;
    text-align: center;
    margin-bottom: 16px;
  }
  .small {
    font-size: 14px;
    font-weight: 400;
    color: #4b4b4b;
    letter-spacing: 0.04;
    text-align: center;
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
    letter-spacing: 0.04;
    margin-bottom: 12px;
  }
  .kakao {
    background-color: #fee500;
    color: #000;
  }
  .google {
    border: 1px solid #eee;
    background-color: #f8f9fd;
    color: var(--black);
  }
  .naver {
    background-color: #1ec800;
    color: #fefeff;
    margin-bottom: 24px;
  }
  .goomong-reg {
    border: 1px solid #ccc;
    background-color: #fff;
    color: var(--black);
    margin-top: 18px;
    margin-bottom: 210px;
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
    letter-spacing: 0.04;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
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
    letter-spacing: 0.04;
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
