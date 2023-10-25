import styled from 'styled-components';

export const category = styled.div`
  .category-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
    margin-top: 40px;
  }
  .category-title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 64px;
  }
  .category-title > span {
    color: var(--blue);
  }
  .item-list {
    display: flex;
    justify-content: space-around;
  }
  .item-list li div {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: var(--black);
    margin-top: 15px;
    letter-spacing: -0.04em;
  }
`;
