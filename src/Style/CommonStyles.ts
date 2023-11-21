import styled from 'styled-components';

export const NoItem = styled.div`
  text-align: center;
  margin: 0 auto;
`;
export const PageTitle = styled.h2`
  margin: 30px 0px 28px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.04em;
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
