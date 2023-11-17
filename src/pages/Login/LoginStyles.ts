import styled from 'styled-components';

export const Login = styled.div`
  .login-container {
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
    margin-bottom: 70px;
  }

  form .text {
    color: var(--black);
    font-weight: 600;
    letter-spacing: -0.04;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .box {
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 320px;
    height: 42px;
  }
  .id-box {
    margin-bottom: 18px;
  }
  .pw-box {
    margin-bottom: 32px;
  }
  .submit-btn {
    display: block;
    width: 320px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fefeff;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.04;
    background-color: #4285f4;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
  }
  .middle {
    width: 100%;
    display: flex;
    margin-top: 26px;
    justify-content: space-between;
    align-items: center;
  }
  .find {
    display: flex;
  }
  .find-id {
    margin-right: 16px;
  }
  .find-id,
  .find-pw {
    font-size: 14px;
    color: var(--black);
    letter-spacing: -0.04;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkbox span {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
    letter-spacing: -0.04;
  }
  .easy-login {
    margin-top: 70px;
    color: #4b4b4b;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.04;
    cursor: pointer;
  }
  .oauth {
    display: flex;
    margin-top: 32px;
  }
  .kakao,
  .google,
  .naver {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
  }
  .kakao {
    background-color: #fee500;
  }
  .kakao img,
  .google img,
  .naver img {
    width: 25px;
    height: 25px;
  }
  .google {
    border: 1px solid #eee;
    background-color: #f8f9fd;
  }
  .naver {
    background-color: #1ec800;
  }

  input:focus {
    outline: none;
  }
  .bottom {
    margin-top: 70px;
  }
  .bottom .text {
    font-size: 14px;
    color: #4b4b4b;
    letter-spacing: -0.04;
    font-weight: 400;
    margin-right: 16px;
  }
  .bottom a {
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
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
  input[type='checkbox'] {
    border: 1px solid #ccc;
  }
`;
