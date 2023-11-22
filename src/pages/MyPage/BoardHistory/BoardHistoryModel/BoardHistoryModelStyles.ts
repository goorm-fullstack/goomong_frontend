import styled from 'styled-components';

export const BoardHistoryModelStyles = styled.div`
  .board-history-model {
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
        width: 30%;
      }
      :nth-child(5) {
        width: 15%;
      }
    }
    .board-history-item {
      display: flex;
      padding: 10px 0px;
      align-items: center;
      justify-content: center;
      a {
        width: 15%;
        text-align: center;
      }
      :nth-child(1) {
        width: 25%;
      }
      :nth-child(2) {
        width: 30%;
      }
      a {
        color: #404a5c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.04em;
        display: block;
      }
      .button-container {
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        a {
          display: block;
          width: 50%;
          button {
            width: 100%;
            border: 1px solid #4285f4;
            background-color: transparent;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            font-size: 15px;
          }
        }
        button {
          width: 50%;
          border: 1px solid #4285f4;
          background-color: transparent;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          font-size: 15px;
        }
        button:hover {
          background-color: #4285f4;
          border: 1px solid #4285f4;
          color: #fff;
        }
        :nth-child(2) {
          margin-left: 8px;
        }
      }
    }
  }
`;
