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
        width: 45%;
      }
    }
    .board-history-item {
      display: flex;
      padding: 10px 0px;
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
  }
`;
