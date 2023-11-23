import styled from 'styled-components';

export const Footer = styled.div`
  .footer-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 32px auto 30px;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
  }

  .footer-logo {
    width: 130px;
    height: 22px;
    margin-bottom: 40px;
  }
  .footer-top-left-list {
    width: 450px;
  }

  .footer-top-left-list li {
    display: inline-block;
    color: #878d99;
    font-size: 12px;
    letter-spacing: -0.04em;
    font-weight: 400;
    line-height: 18px;
  }
  .footer-top-left-list li:nth-child(1) {
    margin-right: 24px;
  }
  .footer-top-left-list li:nth-child(3) {
    margin-right: 17px;
  }
  .footer-top-left-list li span {
    display: inline-block;
    width: 1px;
    height: 11px;
    background-color: #e9ebed;
    margin: 0px 7px;
  }
  .footer-tl-text {
    width: 360px;
    color: #8e94a0;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 18px;
    margin-top: 25px;
  }
  .footer-faq,
  .footer-customer-center {
    font-size: 14px;
    color: var(--black);
    font-weight: 500;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .footer-faq svg,
  .footer-customer-center svg {
    width: 20px;
    height: 20px;
    padding-top: 7px;
  }
  .footer-customer-center {
    margin-top: 33px;
    margin-bottom: 16px;
  }
  .footer-customer-center-detail {
    display: flex;
  }
  .time,
  .e-mail {
    font-size: 12px;
    letter-spacing: -0.04em;
    color: var(--dim-black);
  }
  .time {
    margin-right: 72px;
  }
  .time li,
  .e-mail li {
    font-size: 12px;
    letter-spacing: -0.04em;
    color: var(--dim-black);
    line-height: 18px;
  }

  .time li:nth-child(3) {
    font-size: 11px;
  }
  .time li:nth-child(1),
  .e-mail li:nth-child(1) {
    margin-top: 14px;
  }

  .footer-top-right-1-by-1 {
    margin-top: 40px;
  }
  .footer-top-right-1-by-1-btn {
    width: 75px;
    height: 36px;
    text-align: center;
    border: 1px solid #e7e9eb;
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
  }

  .footer-bottom {
    display: flex;
    margin-top: 42px;
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid #f5f6f7;
  }
  .footer-bottom-left-list {
    display: flex;
  }
  .footer-bottom-left-list li {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04em;
    color: var(--black);
    display: flex;
  }
  .footer-bottom-left-list li::after {
    content: '';
    height: 17px;
    width: 1px;
    background-color: #e9ebed;
    margin: 0px 17px;
  }
  .footer-bottom-left-list li:nth-child(4)::after {
    content: none;
  }

  .footer-bottom-right {
    display: flex;
  }
  .instagram,
  .youtube {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .instagram {
    margin-right: 17px;
  }
  .youtube svg g path,
  .instagram svg g path {
    fill: #6f7785;
    transition: fill 0.3s ease;
  }
  .instagram:hover svg g path,
  .youtube:hover a svg g path {
    fill: #bbc1c9;
  }
  .black-bg {
    width: 100%;
    margin-top: 100px;
    height: 160px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4285f4;
    margin-top: 0px;

    img {
      width: 100%;
    }
  }
  .main-bg-text {
    position: absolute;
    width: 1280px;
    height: 100%;
    padding: 0px 40px;
    top: 0;
    display: flex;
    justify-content: space-between;
  }
  .text {
    margin-top: 53px;
  }
  .bg-text {
    font-size: 22px;
    color: #fff;
    letter-spacing: -0.04em;
  }
  .bg-second-text {
    margin-top: 15px;
  }
  .btn {
    width: 160px;
    height: 45px;
    margin-top: 59px;
  }
  .bg-btn {
    font-size: 15px;
    color: var(--black);
    font-weight: 600;
    width: 160px;
    height: 45px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background-color: #fff;
  }
  .btn a {
    display: inline-block;
    height: 45px;
    border-radius: 10px;
  }
  .btn a:hover button {
    background-color: #f5f6f7;
  }
`;
