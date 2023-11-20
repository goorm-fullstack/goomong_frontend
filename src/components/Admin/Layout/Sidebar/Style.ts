import styled from 'styled-components';

export const AdminSidebar = styled.aside`
  background: #fff;
  position: fixed;
  top: 71px;
  left: 0;
  height: calc(100vh - 71px);
  width: 280px;
  border-right: 1px solid #ddd;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }

  ul {
    padding: 32px 0;
    border-bottom: 1px solid #ddd;

    li {
      h2 {
        padding: 0 32px 16px;

        a {
          font-weight: 500;
          color: #6f7785;
          font-size: 14px;
        }
      }

      & > a {
        display: flex;
        padding: 0 32px;
        height: 40px;
        line-height: 40px;
        align-items: center;
        color: #101c33;
        font-size: 15px;
        position: relative;
        width: 100%;

        svg {
          height: 20px;
          width: 20px;
        }

        span {
          padding-left: 16px;
        }

        &::after {
          content: '';
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          background: transparent;
          width: 3px;
          transition: 0.2s all ease-in-out;
        }

        &:hover,
        &.active {
          background: #f5f8ff;
          color: #4285f4;

          &::after {
            background: #4285f4;
          }
        }
      }
    }
  }
`;
