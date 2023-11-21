import styled from 'styled-components';

export const CSFooterStyles = styled.div`
  .footer {
    width: 100%;
    height: 260px;
    background-color: #161c1c;
    padding-top: 40px;
  }
  .footer-content {
    width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
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
    letter-spacing: -0.04em;
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
