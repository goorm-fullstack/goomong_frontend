import styled from 'styled-components';

export const CommentHistoryModelStyles = styled.div`
  .comment-history-model {
    width: 100%;
    border-top: 1px solid #101c33;

    .list-title {
      display: flex;
      height: 50px;
      border-bottom: 1px solid #e9ebed;

      li {
        color: #404a5c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.04em;
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      :nth-child(1) {
        width: 25%;
      }
      :nth-child(2) {
        width: 45%;
      }
    }
    .comment-history-item {
      display: flex;
      padding: 10px 0px;
      li {
        color: #404a5c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.04em;
        width: 15%;
        height: 14px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      :nth-child(1) {
        width: 25%;
      }
      :nth-child(2) {
        width: 45%;
      }
    }
    .accordion-content {
      height: 100px;
      width: 80%;
      color: #404a5c;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.04em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f0f0f0;
      border: 1px solid #e9ebed;
      border-radius: 8px;
      margin: 0 auto;
      padding: 0 10px;
      button {
        width: 50px;
        border: 1px solid #4285f4;
        background-color: transparent;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        font-size: 13px;
        margin-left: 10px;
      }
      button:hover {
        background-color: #4285f4;
        border: 1px solid #4285f4;
        color: #fff;
      }
    }
  }
`;
