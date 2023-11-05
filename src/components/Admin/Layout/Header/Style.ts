import styled from 'styled-components';

export const AdminHeader = styled.header`
  width: 100%;
  min-width: 1280px;
  height: 71px;
  line-height: 70px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;

  h1 {
    // 로고영역
    width: 280px;
    border-right: 1px solid #ddd;
    float: left;
    padding: 0 32px;

    a {
      height: 24px;
      line-height: 70px;

      img {
        vertical-align: text-bottom;
      }
    }
  }

  .center {
    // 검색 영역
    width: calc(100% - 680px);
    float: left;
    padding: 0 32px;

    form {
      width: 100%;
      height: 70px;
      max-width: 400px;
      position: relative;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      height: 32px;
      border: 1px solid #e9e9e9;
      background: #f7f8f9;
      border-radius: 4px;
      padding: 0 40px 0 8px;
    }

    button[type='submit'] {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0 8px;

      svg {
        width: 20px;
        height: 20px;

        path {
          width: inherit;
          height: inherit;
          fill: #a6a6a6;
        }
      }
    }
  }

  .right {
    // 우측 정보 영역
    width: 400px;
    float: right;

    ul {
      display: flex;

      li {
        border-left: 1px solid #ddd;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.adminprofile {
          width: calc(100% - 140px);
          justify-content: flex-start;
          column-gap: 8px;
          padding: 0 24px;

          div {
            width: 32px;
            height: 32px;
            background: #f7f8f9;
            border-radius: 50%;
            border: 1px solid #e9e9e9;
            overflow: hidden;

            img {
              min-width: 100%;
              max-width: 100%;
              min-height: 100%;
              max-height: 100%;
              object-fit: cover;
              vertical-align: top;
            }
          }

          p {
            max-width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        &.buttonwrap {
          width: 70px;

          a,
          button {
            border: 0;
            background: transparent;
            padding: 0;
            vertical-align: bottom;
            display: flex;
            align-items: center;

            &:hover {
              g,
              path {
                fill: #4285f4;
              }
            }
          }

          svg {
            g,
            path {
              fill: #a6a6a6;
            }
            height: 24px;
          }
        }
      }
    }
  }
`;
