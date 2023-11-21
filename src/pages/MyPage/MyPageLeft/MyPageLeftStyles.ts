import styled from 'styled-components';

export const MyPageLeftStyles = styled.div`
  .mypage-left-container {
    width: 224px;
    margin-right: 80px;

    .title {
      color: #101c33;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.04em;
      margin-bottom: 30px;
    }
    .image-container {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f7f8f9;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 49px;

      .name {
        color: #101c33;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: -0.04em;
        margin-bottom: 9px;
      }

      .email {
        color: #6f7785;
        font-size: 14px;
        letter-spacing: -0.04em;
        font-weight: 400;
        margin-bottom: 18px;
      }

      .local {
        color: #6f7785;
        font-size: 12px;
        letter-spacing: -0.04em;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-bottom: 27px;

        svg {
          margin-right: 7px;
        }
      }
      button {
        width: 224px;
        height: 38px;
        background-color: #4285f4;
        text-align: center;
        vertical-align: center;
        font-weight: 600;
        color: #fff;
        font-size: 15px;
        letter-spacing: -0.04em;
        border: 0;
        border-radius: 8px;
      }
    }
    .bottom {
      .title {
        color: #101c33;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.04em;
        padding-bottom: 17px;
        margin-bottom: 17px;
        border-bottom: 1px solid #e9ebed;
      }
      .payment,
      .active {
        margin-top: 45px;
      }
      li {
        color: #6f7785;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.04em;
        margin-bottom: 16px;
      }
      li:hover a {
        color: #558ff5;
      }
    }
  }
`;
