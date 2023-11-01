import styled from 'styled-components';

export const Category = styled.div`
  .category-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 80px auto 0;
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
    flex-wrap: wrap;
  }
  .item-list li {
    text-align: center;
    margin-right: 76px;
    margin-bottom: 76px;
  }
  .item-list li:not(:last-child) {
    margin-right: 76px;
  }
  .item-list li img {
    width: 64px;
    height: 64px;
    background-color: #f5f6f7;
    border-radius: 10px;
  }
  .item-list li div {
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
    margin-top: 15px;
    letter-spacing: -0.04em;
  }
`;
