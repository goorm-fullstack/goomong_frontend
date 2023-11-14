import styled from 'styled-components';

export const PageTitle = styled.h2`
  margin: 30px 0px 28px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.04;
  color: var(--black);
`;

export const Container = styled.div`
  width: 1280px;
  padding: 0px 40px;
  margin: 0 auto;
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  .total {
    font-weight: 500;
    font-size: 14px;
    color: var(--black);
  }
`;

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
