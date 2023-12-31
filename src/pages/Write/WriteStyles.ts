import styled from 'styled-components';

export const WriteStyles = styled.div`
  .write-container {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
  }
  .option-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .plus-minus {
    display: flex;
    gap: 10px;
    button {
      background-color: inherit;
      border: 0;
    }
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
    letter-spacing: -0.04em;
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
  .write-form .option-input {
    width: 40%;
    margin-right: 100px;
  }
  .write-form .option-price-input {
    width: 40%;
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
    letter-spacing: -0.04em;
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
  .write-form .bottom .top {
    color: #404a5c;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .write-form .bottom p {
    color: #aab1bc;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
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
  .rating-container {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .input-text {
      margin: 0;
      margin-right: 30px;
    }
    .radio-container {
      display: flex;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
      }
      input {
        width: 15px;
        height: 15px;
        margin: 0;
        padding: 0;
      }
      label {
        margin-left: 5px;
        color: var(--yellow);
      }
    }
  }
`;
