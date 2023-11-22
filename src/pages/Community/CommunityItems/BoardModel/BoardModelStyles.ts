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
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .board-model-right {
    display: flex;
  }
  .board-model-category-list {
    margin-bottom: 15px;
  }
  .board-model-category-list li {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    color: #8e94a0;
  }
  .board-model-title {
    color: #101c33;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.04em;
    margin-bottom: 10px;
  }
  .board-model-content {
    font-weight: 400;
    font-size: 14px;
    color: #101c33;
    letter-spacing: -0.04em;
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
    letter-spacing: -0.04em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;
