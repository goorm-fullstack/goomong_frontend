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

export const ItemDetail = styled.div`
  display: flex;
  column-gap: 100px;
  padding-top: 30px;
  color: var(--black);

  .left {
    width: 760px;

    .slick-slider {
      width: 100%;
      height: 480px;
      background: #ddd;

      .slick-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .slick-arrow {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

        &.prev-arrow {
          left: 16px;
        }

        &.next-arrow {
          right: 16px;
        }
      }

      .slick-dots {
        bottom: 16px;

        li {
          margin: 0;

          button:before {
            color: white;
          }
        }
      }
    }

    .tabnav {
      width: 100%;
      display: flex;
      border-bottom: 1px solid rgb(245, 246, 247);
      margin: 50px 0 32px;

      li {
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        color: rgb(142, 148, 160);
        cursor: pointer;
        padding: 16px 0;
        margin-right: 18px;
        position: relative;

        &:hover {
          color: var(--black);
        }

        &[data-active='true'] {
          color: var(--black);

          &::after {
            display: block;
            position: absolute;
            width: 100%;
            content: '';
            height: 2px;
            bottom: 0;
            left: 0;
            background: var(--black);
          }
        }
      }
    }

    .contentbox {
      display: none;

      &[data-show='true'] {
        display: block;
      }

      h3 {
        margin-bottom: 24px;

        strong {
          color: #fbbc04;
        }

        span {
          color: rgb(142, 148, 160);

          &::before {
            width: 1px;
            height: 12px;
            content: '';
            background: rgb(233, 235, 237);
            display: inline-block;
            margin: 0 6px 0 4px;
          }
        }
      }

      &.review h3 {
        margin-bottom: 8px;
      }

      &.qna {
        table {
          width: 100%;

          th,
          td {
            padding: 18px 0;
            font-size: 14px;
            color: var(--dim-black);
            border-bottom: 1px solid #e9ebed;

            &.center {
              text-align: center;
            }
          }

          th {
            border-top: 1px solid var(--black);
            font-weight: normal;
            color: var(--black);
          }

          td {
            line-height: 1.4;

            &.checkuser {
              input {
                border: 1px solid #ddd;
                margin: 12px 6px 0 0;
                padding-left: 4px;
              }

              button {
                border: 1px solid rgb(219, 222, 226);
                color: var(--dim-black);
                background: white;
              }
            }
          }
        }
        .title {
          border: 0;
          background-color: transparent;
        }
        .visible {
          display: '';
        }
        .none {
          display: none;
        }
      }

      .review-wrapper {
        .review-model {
          margin-right: 0;
          border-width: 0 0 1px 0;
          width: 100%;
          height: auto;
          padding-left: 0;
          padding-right: 0;
          margin-top: 0;

          .review-model-top {
            align-items: center;
          }

          .image-container {
            width: 48px;
            height: 48px;
          }
          .category-review-product-name {
            display: none;
          }

          .review-content {
            margin-top: 12px;
            width: 100%;
          }
        }
      }
    }
  }

  .right {
    width: calc(100% - 860px);

    & > div {
      border: 1px solid rgb(219, 222, 226);
      background: white;
      border-radius: 4px;
      padding: 34px;
      margin-bottom: 30px;
    }

    .item-detail {
      .category {
        font-size: 13px;
        color: rgb(111, 119, 133);
        line-height: 18px;
        margin-bottom: 8px;
        font-weight: bold;
      }

      h2 {
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 12px;
      }

      .summary {
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgb(233, 235, 237);
        color: rgb(142, 148, 160);
      }

      .price {
        font-size: 14px;
        font-weight: bold;
        margin: 16px 0 24px;
        text-align: right;

        strong {
          font-size: 18px;
        }
      }

      table {
        width: 100%;

        th,
        td {
          width: 50%;
          font-weight: normal;
          font-size: 13px;
          padding: 6px 0;
        }

        th {
          text-align: left;
          color: rgb(142, 148, 160);
          font-weight: 500;
        }

        td {
          text-align: right;
        }
      }

      .btn-order {
        width: 100%;
        height: 48px;
        background: var(--blue);
        color: white;
        border: 0;
        border-radius: 4px;
        font-size: 15px;
        font-weight: bold;

        &:hover {
          background: rgba(66, 133, 244, 0.8);
        }
      }
    }

    .seller-detail {
      position: relative;

      .seller-name {
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 16px;
        font-weight: bold;
      }

      .thumd {
        position: absolute;
        right: 34px;
        top: 34px;
        width: 64px;
        height: 64px;
        background: #f7f8f9;
        border-radius: 50%;
        border: 1px solid rgb(228, 229, 237);
      }

      .seller-category {
        display: flex;
        align-items: center;
        column-gap: 8px;
        padding: 4px 0;

        span {
          font-size: 14px;
          color: rgb(111, 119, 133);
        }

        svg {
          height: 16px;
          fill: #8e94a0;
        }
      }

      .summary {
        border-top: 1px solid rgb(233, 235, 237);
        margin-top: 16px;
        padding-top: 16px;
        display: flex;

        li {
          width: 33.3%;

          p {
            font-size: 14px;
            font-weight: 500;
          }

          .title {
            font-size: 12px;
            line-height: 18px;
            font-weight: bold;
            color: rgb(142, 148, 160);
            margin-bottom: 8px;
          }
        }
      }

      .btn-contact {
        text-decoration: none;
        display: inline-block;
        text-align: center;
        line-height: 46px;
        margin-top: 24px;
        background: white;
        border: 1px solid rgb(219, 222, 226);
        border-radius: 4px;
        width: 100%;
        height: 46px;
        font-size: 15px;
        color: var(--dim-black);

        &:hover {
          color: rgb(142, 148, 160);
        }
      }

      h4 {
        margin-top: 24px;
        margin-bottom: 12px;
      }

      .seller-summary {
        font-size: 14px;
      }

      .map {
        width: 100%;
        height: 160px;
        background: #f7f8f9;
      }
    }
  }
`;
