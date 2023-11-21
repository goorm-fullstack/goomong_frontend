import styled from 'styled-components';

export const PaginationStyles = styled.div`
  .pagination {
    margin-top: 51px;
  }
  .pagination button {
    width: 32px;
    height: 32px;
    color: #8e94a0;
    font-size: 600px;
    font-size: 12px;
    letter-spacing: -0.04em;
    border: 0;
    border-radius: 3px;
    margin-right: 8px;
    background-color: #f5f6f7;
    cursor: pointer;
    margin-bottom: 80px;
  }
  .pagination button.active {
    background-color: #101c33;
    color: #fff;
  }
  .pagination button:hover {
    background-color: #8e94a0;
    color: #fff;
  }
`;
