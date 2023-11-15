import styled from 'styled-components';

export const Sort = styled.div`
  position: relative;
  line-height: 24px;
  letter-spacing: -0.04em;
  font-size: 14px;
  color: var(--black);
  max-width: 158px;

  .header-wrap {
    padding: 6px 18px;
    border: 1px solid #dbdee2;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    cursor: pointer;
    overflow: hidden;

    input {
      width: 100%;
      outline: 0;
      padding: 0;
      border: 0;
      color: inherit;
      text-overflow: ellipsis;
      cursor: inherit;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
    }

    svg {
      transform: rotate(90deg);
      width: 18px;
      fill: currentcolor;
    }
  }

  .bottom-wrap {
    position: absolute;
    width: 100%;
    max-height: 400px;
    z-index: 99;
    overflow: auto;
    padding: 8px 0;
    border-radius: 4px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0 5px 10px 0;
    cursor: pointer;
    visibility: hidden;

    &[data-visible='true'] {
      visibility: visible;
    }

    li {
      padding: 8px 17px;
      color: var(--gray);

      &:hover,
      &.active {
        color: var(--blue);
      }

      &:hover {
        background: #f5f8ff;
      }
    }
  }
`;
