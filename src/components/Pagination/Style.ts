import styled from 'styled-components';

export const Pagination = styled.div`
  margin-top: 60px;

  button {
    width: 32px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    color: #8e94a0;
    font-size: 12px;
    letter-spacing: -0.04em;
    border: 0;
    border-radius: 3px;
    margin-right: 8px;
    background-color: #f5f6f7;

    &.active {
      background-color: #101c33;
      color: #fff;
    }

    &:hover {
      background-color: #8e94a0;
      color: #fff;
    }
  }
`;
