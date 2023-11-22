import styled from 'styled-components';

export const ChattingRoomModelStyles = styled.div`
  .room-model-container {
    display: flex;
    padding: 20px 9px;
    width: 202px;
    height: 98px;
    cursor: pointer;

    .image-container {
      width: 48px;
      height: 48px;
      border: 1px solid #4285f4;
      border-radius: 50%;
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
      margin-left: 10px;

      .top {
        margin-bottom: 9px;
        .nickname {
          color: #101c33;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.04em;
        }
        .nickname::after {
          content: '';
          height: 10px;
          width: 1px;
          background-color: #dbdee2;
          margin: 0px 8px;
          display: inline-block;
        }
        .date {
          color: #8e94a0;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }
      }

      .content-shorts {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.04em;
        color: #101c33;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 70px;
        margin-bottom: 10px;
      }

      .bottom {
        .type {
          padding: 4px 6px;
          border-radius: 8px;
          background-color: #f7f8f9;
          border: 0;
          color: #8e94a0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: -0.04em;
        }
        .category {
          background-color: #4285f4;
          color: #fff;
          margin-right: 6px;
        }

        .product {
          color: #6f7785;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: -0.04em;
        }
      }
    }
  }
  .room-model-container:hover,
  .room-model-container.selected {
    background-color: #f5f8ff;
  }
`;
