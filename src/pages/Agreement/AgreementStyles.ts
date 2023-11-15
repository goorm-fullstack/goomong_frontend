import styled from 'styled-components';

export const AgreementStyle = styled.div`
  .ecep-footer {
    width: 1200px;
    padding: 0 40px;
    margin: 0 auto;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .right {
    display: flex;
    align-items: center;
    margin-top: 23px;
  }
  .logo {
    width: 145px;
    height: 24px;
  }
  .right .top-title::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 10px;
    background-color: #dbdee2;
    margin: 0 16px;
  }
  .top-btn {
    width: 140px;
    height: 35px;
    border-radius: 1450px;
    border: 0;
    background-color: #4285f4;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin-top: 18px;
    cursor: pointer;
  }
  .history {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }
  .history a {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.04;
  }
  .history a:nth-child(1) {
    color: var(--black);
    font-weight: 500;
  }
  .history a:nth-child(3) {
    color: var(--dim-black);
  }
  .history a:nth-child(5) {
    color: #4285f4;
  }
  .content-title {
    font-size: 20px;
    letter-spacing: -0.04;
    color: var(--black);
    font-weight: 500;
    margin-bottom: 40px;
  }
  .agreement-content p {
    font-size: 15px;
    font-weight: 400;
    color: #101c33;
    letter-spacing: -0.04;
    line-height: 18px;
  }
  .footer {
    width: 100%;
    height: 260px;
    background-color: #161c1c;
    margin-top: 104px;
    padding-top: 40px;
  }
  .footer-content {
    width: 1200px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .footer-top {
    margin-bottom: 40px;
  }
  .footer-right {
    display: flex;
    flex-direction: column;
  }
  .footer-top-left-list {
    width: 450px;
  }

  .footer-top-left-list li {
    display: inline-block;
    color: var(--dim-black);
    font-size: 12px;
    letter-spacing: -0.04;
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
    background-color: #666;
    margin: 0px 7px;
  }
  .footer-left-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-left-list li {
    position: relative;
  }

  .footer-left-list li a {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.04;
    padding: 0 17px;
  }

  .footer-left-list li:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    height: 17px;
    width: 1px;
    background-color: #fff;
  }
`;
