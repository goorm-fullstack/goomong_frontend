import styled from 'styled-components';

export const Header = styled.header`
  .header {
    width: 100%;
    border-bottom: 1px solid #c5c7ca;
  }
  .header-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
  }
  .header-top {
    display: flex;
    justify-content: space-between;
  }
  .header-logo {
    margin-top: 16px;
    width: 145px;
    height: 24px;
    cursor: pointer;
  }
  .search-bar {
    position: relative;
    overflow: hidden;
    width: 570px;
    height: 40px;
    margin-top: 8px;
    background-color: #f5f6f7;
    border-radius: 30px;
    display: flex;
    padding-left: 22px;
    align-items: center;
    padding-right: 10px;
    justify-content: flex-end;
  }
  .searchBtn {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .search-term {
    animation: slideUp 1s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
  }
  .search-input-container {
    flex: 1;
    position: relative;
    height: 100%;
  }
  .search-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 10px;
    background-color: transparent;
    z-index: 1;
    outline: none;
  }

  .search-term {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    z-index: 0;
    font-size: 13px;
    color: #101c33;
    letter-spacing: -0.04em;
  }

  .term-number {
    color: #4285f4;
    margin-right: 5px;
    font-size: 13px;
  }

  .search-button-container {
    background: none;
    border: none;
    padding-right: 22px;
  }
  .join-list {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }
  .join-list > li {
    cursor: pointer;
    padding: 0px 15px;
  }
  .join-list > li a {
    letter-spacing: -0.04em;
    text-align: center;
    font-size: 15px;
    color: #6e6d7a;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .keyword {
    position: absolute;
    width: 570px;
    height: 210px;
    border: 1px solid #f5f6f7;
    border-radius: 15px;
    display: flex;
    background-color: #fff;
    z-index: 1000;
    left: 33%;
    top: 8%;
  }
  .current,
  .popular {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04;
    color: var(--black);
    height: 100;
    padding: 25px 32px;
  }
  .current {
    width: 409px;
    border-right: 1px solid #f5f6f7;
  }
  .popular {
    width: 161px;
    padding-left: 21px;
    padding-right: 0px;
  }
  .current li {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04;
    display: flex;
    justify-content: space-between;
  }
  .title {
    margin-bottom: 19px;
  }
  .current li {
    margin-bottom: 13px;
  }
  .popular li {
    margin-bottom: 15px;
  }
  .popular li a {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04;
  }
  .popular li a span {
    color: var(--blue);
    display: inline-block;
  }
  .svg-container {
    display: inline-block;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: #f5f6f7;
  }
  .svg-container svg {
    width: 9px;
    height: 9px;
  }
  .delete-btn {
    cursor: pointer;
  }
  .delete-btn svg {
    width: 8px;
    height: 8px;
  }
  .keyword-bottom ul {
    display: flex;
    width: 409px;
    position: absolute;
    left: 33%;
    top: 27%;
    justify-content: space-between;
    padding: 0 32px;
    z-index: 1001;
  }
  .keyword-bottom ul li {
    color: var(--dim-black);
    font-size: 11px;
    font-weight:400;
    letter-spacing: 0.04;
  }
`;
