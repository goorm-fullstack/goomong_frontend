import styled from 'styled-components';

interface BoardModelStyleProps {
  $isLastItem?: boolean;
}

export const BoardModelStyles = styled.div<BoardModelStyleProps>`
  .board-model-container {
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    border-bottom: 1px solid #e9ebed;
    ${(props) => (props.$isLastItem ? 'border-bottom: none;' : '')}
  }
  .board-model-image-container {
    width: 160px;
    height: 160px;
    border: 1px solid #eaecee;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
  }
  .board-model-right {
    display: flex;
  }
  .board-model-category-list {
    display: flex;
    margin-bottom: 15px;
  }
  .board-model-category-list li {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04;
    color: #8e94a0;
  }
  .board-model-category-list li:nth-child(1)::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 13px;
    display: inline-block;
  }
  .board-model-title {
    color: #101c33;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.04;
    margin-bottom: 10px;
  }
  .board-model-content {
    font-weight: 400;
    font-size: 14px;
    color: #101c33;
    letter-spacing: -0.04;
    margin-bottom: 45px;
  }
  .board-model-bottom {
    display: flex;
  }
  .board-model-local,
  .board-model-like,
  .board-model-comment {
    font-weight: 400;
    font-size: 12px;
    color: #8e94a0;
  }
  .board-model-like,
  .board-model-comment {
    font-weight: 500;
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
  .board-model-local {
    margin-bottom: 16px;
  }
  .board-model-time {
    font-weight: 400;
    font-size: 14px;
    color: #8e94a0;
    letter-spacing: -0.04;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
