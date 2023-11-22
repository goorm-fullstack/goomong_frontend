import styled from 'styled-components';

export const SearchDetailStyles = styled.div`
  .search-detail-container {
    width: 1280px;
    padding: 0 40px;
    margin: 0 auto;

    .top {
      text-align: center;
      color: var(black);
      font-weight: 600;
      letter-spacing: -0.04em;
      font-size: 22px;
      padding: 50px 0;
    }
    .nav-list {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e9e9e9;
      padding-bottom: 30px;

      li {
        display: flex;
        align-items: center;
        padding: 0px 30px;
        font-weight: 600;
        color: #6f7785;
        font-size: 17px;
        letter-spacing: -0.04em;
        cursor: pointer;
      }
    }
    .product-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      
    }
  }
`;
