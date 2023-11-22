import styled from 'styled-components';

export const HireStyles = styled.div`
  .hire-container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .dropdown-type ul {
    padding: 0;
    margin: 0;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    height: 220px;
  }
  .dropdown-type ul li {
    padding: 10px 0;
    padding-left: 18px;
    border-radius: 8px;
  }
  .dropdown-type ul li:hover {
    background-color: #4285f4;
    color: #fff;
  }
  .search-btn {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  .hire-title {
    color: #101c33;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04em;
    margin: 30px 0 40px;
  }
  .input-text {
    font-size: 15px;
    font-weight: 500;
    color: #6f7785;
    margin-bottom: 12px;
  }
  .inquiry-form input {
    width: 1200px;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    border: 1px solid #dbdee2;
    color: rgba(85, 85, 85, 0.6);
    font-size: 15px;
  }
  .inquiry-type {
    width: 1200px;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    color: #555;
    font-size: 15px;
    display: flex;
    align-items: center;
    border: 1px solid #dbdee2;
    cursor: pointer;
  }
  textarea {
    width: 1200px;
    height: 280px;
    border-radius: 8px;
    padding: 17px;
    margin-bottom: 30px;
    color: #555;
    border: 1px solid #dbdee2;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }

  input[type='file'] {
    display: none;
  }

  label.file-upload {
    width: 1200px;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    border: 1px solid #dbdee2;
    color: #4285f4;
    font-size: 15px;
    display: inline-block;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04em;
  }
  label.file-upload::after {
    content: '파일 추가 또는 파일을 여기로 드래그하세요.';
  }
  .submit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  .submit-btn button {
    width: 116px;
    height: 38px;
    background-color: #4285f4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fefeff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04em;
    border: 0;
    border-radius: 4px;
    margin-top: 70px;
  }
  .inquiry-form .bottom .top {
    color: #404a5c;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .inquiry-form .bottom p {
    color: #aab1bc;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
  }
  .inquiry-form .bottom {
    margin-bottom: 17px;
  }

  .check-agreement {
    color: #666;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
  }
  .checkbox {
    display: none;
  }
  .agreement {
    display: flex;
    align-items: center;
  }
  .agreement svg {
    margin-right: 8px;
  }
  label:hover svg g[id='Core'] path {
    fill: #4285f4;
    transition: 0.2s all ease-in-out;
  }
  .inquiry-type {
    position: relative;
  }
  .dropdown-type {
    position: absolute;
    top: 101%;
    left: 0%;
    z-index: 100;
    background-color: #fff;
    width: 1200px;
  }
`;
