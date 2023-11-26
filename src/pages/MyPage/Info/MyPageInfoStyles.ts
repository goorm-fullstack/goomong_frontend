import styled from 'styled-components';

export const MyPageInfoStyles = styled.div`
  .mypage-info-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;

    .buy-info-set a {
      color: #558ff5;
    }
    .info-container {
      width: 100%;
      .title {
        margin-top: 29px;
        color: #101c33;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: -0.04em;
        display: block;
        width: 100%;
        margin-bottom: 40px;
        .small {
          margin-top: 16px;
          color: #404a5c;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.04em;
          padding-bottom: 25px;
          border-bottom: 1px solid #e9ebed;
        }
      }
      .info-form {
        .get-container {
          display: flex;
        }
        .image-get {
          width: 128px;
          margin-right: 39px;

          .image-container {
            width: 128px;
            height: 128px;
            background-color: #f7f8f9;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 8px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 8px;
            }
          }
          #file-upload {
            display: none;
          }

          .file-upload-btn {
            width: 128px;
            height: 38px;
            border-radius: 8px;
            border: 1px solid #4285f4;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #4285f4;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.04em;
            margin-top: 13px;
          }
        }
        .info-get {
          .input-text {
            margin-bottom: 24px;
            color: #101c33;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.04em;
            display: flex;
            align-items: center;

            .text {
              width: 100px;
            }
          }
          input {
            width: 320px;
            height: 42px;
            border-radius: 8px;
            border: 1px solid #ccc;
            padding-left: 20px;
          }
        }
      }
      .button-container {
        margin-top: 64px;
        text-align: center;

        .submit-btn {
          color: #fff;
          background-color: #4285f4;
          width: 116px;
          height: 38px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          vertical-align: center;
          border: 0;
          border-radius: 8px;
        }
      }
    }
    .address {
      .top {
        #zipNo {
          width: 190px;
          margin-right: 30px;
        }
        button {
          width: 100px;
          height: 42px;
          border-radius: 8px;
          background-color: transparent;
          border: 1px solid #ccc;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
`;
