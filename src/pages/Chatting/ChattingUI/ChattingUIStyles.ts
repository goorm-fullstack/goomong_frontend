import styled from 'styled-components';

export const ChattingUIStyles = styled.div`
  .UI-container {
    width: 977px;
    height: 662px;
    border: 1px solid #dbdee2;
    border-radius: 8px;

    .top {
      width: 100%;
      height: 38px;
      display: flex;
      align-items: center;
      button {
        color: #101c33;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: -0.04em;
        color: #fff;
        background-color: #4285f4;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        border: 0;
        cursor: pointer;
        padding: 5px;
      }
    }
    .content {
      width: 100%;
      height: 100%;
      background-color: #f7f8f9;
      padding: 0 17px;

      .content-container {
        height: 540px;
        padding: 10px 0;
        overflow-x: hidden;
        overflow-y: auto;
      }
      .opponent {
        .date {
          color: #8e94a0;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: -0.04em;
          margin-left: 8px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
      }
    }
    .big-date {
      text-align: center;
      color: #8e94a0;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: -0.04em;
      display: flex;
      align-items: center;
      margin: 24px 0;
    }
    .big-date::after {
      content: '';
      height: 1px;
      width: 400px;
      background-color: #dbdee2;
      margin-left: 42px;
      display: inline-block;
    }
    .big-date::before {
      content: '';
      height: 1px;
      width: 400px;
      margin-right: 42px;
      background-color: #dbdee2;
      display: inline-block;
    }
    .user {
      display: flex;
      flex-direction: column;
    }
    .other-content {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      .image-container {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-right: 11px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .other-product-content {
        display: flex;
        .other-message {
          border-radius: 8px;
          padding: 15px 10px;
          background-color: #fff;
          width: 220px;
          color: #101c33;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }
      }
    }

    .user-content {
      border-radius: 8px;
      padding: 15px 10px;
      background-color: #fff;
      width: 220px;
      color: #101c33;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.04em;
      margin-bottom: 18px;
      align-self: flex-end;
    }

    form {
      width: 100%;
      height: 100px;
      background-color: #fff;
      padding: 24px 21px 12px 19px;

      .text-box {
        border: 0;
        display: block;
        width: 100%;
        color: #8e94a0;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.04em;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        .file-upload {
          width: 100px;
          height: 32px;
          border: 1px solid #dbdee2;
          display: flex;
          border-radius: 8px;
          color: #8e94a0;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.04em;
          align-items: center;
          justify-content: center;
          margin-top: 17px;
          input {
            display: none;
          }
        }
        button {
          background-color: #4285f4;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.04em;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 32px;
          border: 0;
          cursor: pointer;
          float: right;
          border-radius: 8px;
          &.disabled-button {
            background-color: #f6f6f6;
            color: #dfdfdf;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: -0.04em;
          }
        }
      }
    }

    .product-message-container {
      width: 220px;
      height: 160px;
      border-radius: 8px;
      border: 1px solid #000;
      padding: 15px 10px;
      background-color: #fff;
      .nickname {
        color: #4285f4;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: -0.04em;
        margin-bottom: 11px;
      }
      .product {
        color: #101c33;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: -0.04em;
        margin-bottom: 21px;
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        .name {
          color: #8e94a0;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }
        .money {
          color: #404a5c;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.04em;
        }
      }
      button {
        width: 188px;
        height: 32px;
        color: #fff;
        background-color: #4285f4;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        border: 0;
        border-radius: 8px;
      }
    }
  }
`;
