import styled from 'styled-components';

export const WriteStyles = styled.div`
  .write-container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .dropdown-category ul {
    padding: 0;
    margin: 0;
    border: 1px solid #dbdee2;
    border-radius: 8px;
    height: 220px;
  }
  .dropdown-category ul li {
    padding: 10px 0;
    padding-left: 18px;
    border-radius: 8px;
  }
  .dropdown-category ul li:hover {
    background-color: #4285f4;
    color: #fff;
  }
  .write-title {
    color: #101c33;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.04;
    margin: 30px 0 40px;
  }
  .input-text {
    font-size: 15px;
    font-weight: 500;
    color: #6f7785;
    margin-bottom: 12px;
  }
  .write-form input {
    width: 1200px;
    height: 46px;
    border-radius: 8px;
    padding: 0 17px;
    margin-bottom: 30px;
    border: 1px solid #dbdee2;
    color: rgba(85, 85, 85, 0.6);
    font-size: 15px;
  }
  .write-category {
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
    letter-spacing: -0.04;
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
    letter-spacing: -0.04;
    border: 0;
    border-radius: 4px;
    margin-top: 70px;
  }
  .write-form .bottom .top {
    color: #404a5c;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04;
    margin-bottom: 12px;
  }
  .write-form .bottom p {
    color: #aab1bc;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .write-form .bottom {
    margin-bottom: 17px;
  }
  
  .write-category {
    position: relative;
  }
  .dropdown-category {
    position: absolute;
    top: 101%;
    left: 0%;
    z-index: 100;
    background-color: #fff;
    width: 1200px;
  }
`;
