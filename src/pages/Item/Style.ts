import styled from 'styled-components';

export const ItemList = styled.div`
  display: flex;
  column-gap: 85px;

  .category-wrapper {
    width: 200px;

    h3 {
      line-height: 26px;
      color: var(--black);
      font-size: 14px;
    }

    ul {
      padding: 18px 0;
    }

    li {
      padding: 8px 0;
    }

    label {
      color: var(--gray);
      font-size: 14px;
      display: flex;
      align-items: center;
    }

    input {
      margin-right: 10px;
    }
  }

  .item-wrapper {
    width: calc(100% - 285px);

    & > ul {
      display: flex;
      flex-flow: wrap;
      width: 100%;
      gap: 32px 16px;

      & > li {
        width: calc((100% - 32px) / 3);

        .product {
          margin: 0;
          width: 100%;
        }
      }
    }
  }
`;
