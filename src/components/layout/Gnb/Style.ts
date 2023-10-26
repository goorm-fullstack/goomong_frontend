import styled from 'styled-components';

export const Gnb = styled.div`
  .gnb-container {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 20px 0 10px 0;
  }

  .burger-btn {
    position: relative;
  }
  .burger-menu {
    z-index: 100;
  }
  .burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 20px;
    position: relative;
    transition: transform 0.2s ease;
    cursor: pointer;
  }
  .bar {
    height: 1px;
    width: 19px;
    background-color: #2c2c2c;
    transition: transform 0.2s ease;
    margin-bottom: 5px;
    margin-right: 13px;
  }
  .open .bar:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .open .bar:nth-child(2) {
    opacity: 0;
  }

  .open .bar:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .gnb-menu {
    display: flex;
    justify-content: space-between;
    width: 1180px;
    align-items: center;
  }

  .left-menu {
    display: flex;
    justify-content: space-between;
  }
  .ll-menu,
  .lr-menu {
    display: flex;
  }
  .ll-menu::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 15px;
  }
  .ll-menu > li,
  .lr-menu > li {
    text-align: center;
    padding: 0px 10px;
    font-size: 15px;
    letter-spacing: -0.04em;
    color: var(--black);
    cursor: pointer;
    font-weight: 600;
  }
  .lr-find {
    position: relative;
  }
  .lr-find::before {
    content: 'NEW';
    position: absolute;
    font-size: 10px;
    top: -3px;
    right: -20px;
    color: var(--green);
  }
  .lr-menu > li:nth-child(2) {
    margin-left: 20px;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right-txt,
  .right-btn {
    font-size: 14px;
    letter-spacing: -0.04em;
  }
  .right-btn {
    width: 130px;
    height: 35px;
    border-radius: 30px;
    cursor: pointer;
    margin-left: 12px;
    background-color: var(--blue);
    border: 0;
    color: #fff;
  }

  .menu-items {
    width: 714px;
    height: 448px;
    background-color: #fff;
    top: 111px;
    position: absolute;
    z-index: 101;
    display: flex;
  }
  .burger-btn {
    border-right: 1px solid #e9ebed;
  }

  .burger-local-btn,
  .burger-service-btn {
    letter-spacing: -0.04em;
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
    width: 238px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 25px;
    padding-left: 25px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
  .burger-local-btn:hover,
  .burger-service-btn:hover {
    color: var(--blue);
    background-color: #f5f8ff;
  }
  .local-menu,
  .service-menu {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .local-menu > li,
  .service-menu > li {
    color: var(--black);
    width: 50%;
    height: 40px;
    line-height: 40px;
    padding: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: -0.04em;
  }
  .local-menu > li:hover,
  .service-menu > li:hover {
    color: var(--blue);
    background-color: #f5f8ff;
  }

  .local-menu > li:hover a,
  .service-menu > li:hover a {
    color: var(--blue);
  }
`;
