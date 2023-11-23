import styled from 'styled-components';

export const MarkerInfoModelStyles = styled.div`
  .marker-info-model-container {
    width: 380px;
    height: 100px;
    position: absolute;
    z-index: 100001;
    background-color: #fff;
    top: calc(100% - 200px);
    left: calc(50% - 190px);
    border-radius: 8px;
    padding: 18px 16px;
    display: flex;
    align-items: center;
    .image-container {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid #dbdee2;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      .top {
        margin-bottom: 10px;
        display: flex;
        li {
          letter-spacing: -0.04em;
        }
        :nth-child(1) {
          margin-right: 8px;
          color: #101c33;
          font-size: 16px;
          font-weight: 600;
        }
        :nth-child(2) {
          font-size: 12px;
          font-weight: 400;
          color: #8e94a0;
        }
      }
      .middle {
        display: flex;
        margin-bottom: 11px;

        .transaction::after {
          content: '';
          height: 10px;
          width: 1px;
          background-color: #dbdee2;
          margin: 0px 8px;
          display: inline-block;
        }
        li {
          letter-spacing: -0.04em;
          color: #101c33;
          font-weight: 500;
          font-size: 12px;
          span {
            color: #6f7785;
            font-size: 10px;
            margin-right: 6px;
          }
        }
        .star {
          color: #fbbc04;
          letter-spacing: -0.02em;
          span {
            margin-left: 6px;
            color: #8e94a0;
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
      .bottom {
        color: #6f7785;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.04em;
      }
    }
  }
`;
