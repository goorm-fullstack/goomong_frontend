import styled from 'styled-components';

export const BoardModelDetailStyles = styled.div`
  .board-image-container {
    width: 680px;
    height: 400px;
    background-color: #f7f8f9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 8px;
    object-fit: cover;
  }
  .page-location {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  .big-location,
  .detail-location {
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .page-location svg {
    margin: 0 8px;
  }
  .board-title {
    color: #101c33;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.04;
    margin-bottom: 32px;
  }
  .writer-container {
    display: flex;
    padding-bottom: 13px;
    border-bottom: 1px solid #e9ebed;
    margin-bottom: 40px;
  }
  .writer-image-container {
    width: 42px;
    height: 42px;
    object-fit: cover;
    margin-right: 10px;
  }
  .writer-image-container svg {
    width: 42px;
    height: 42px;
  }
  .writer-name {
    color: #101c33;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.04;
    margin-bottom: 8px;
  }
  .board-time-views {
    display: flex;
  }
  .board-time,
  .board-views {
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .board-time::after {
    content: '';
    display: inline-block;
    height: 10px;
    width: 1px;
    background-color: #8e94a0;
    margin: 0px 8px;
  }
  .board-content {
    color: #101c33;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.04;
    line-height: 28px;
    margin-bottom: 60px;
  }
  .board-detail-bottom {
    display: flex;
    padding-bottom: 25px;
    border-bottom: 1px solid #e9ebed;
    margin-bottom: 33px;
  }
  .board-detail-bottom svg {
    margin-right: 7px;
  }

  .board-detail-like,
  .board-detail-comment {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.04;
    color: #aab1bc;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .board-detail-like {
    margin-right: 17px;
  }
`;
