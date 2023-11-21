import styled from 'styled-components';

export const SlideBoardModelStyles = styled.div`
  .sboard-container {
    width: 297px;
    height: 180px;
    border-radius: 8px;
    background-color: #f7f8f9;
    padding-left: 25px;
    padding-top: 25px;
    padding-right: 22px;
    margin-left: 12px;
  }
  .sboard-type {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04em;
    color: #404a5c;
    margin-bottom: 25px;
  }
  .sboard-title {
    font-weight: 600;
    font-size: 16px;
    color: #101c33;
    letter-spacing: -0.04em;
    margin-bottom: 70px;
  }
  .sboard-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .writer,
  .comment-num {
    color: var(--dim-black);
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.04em;
  }
  .comment {
    display: flex;
    align-items: center;
  }
  .comment svg {
    margin-right: 8px;
  }
`;
