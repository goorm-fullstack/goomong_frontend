import styled from 'styled-components';

export const Header = styled.header`
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
    width: 14px;
    height: 14px;
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
    font-size: 15px;
    color: #6e6d7a;
    cursor: pointer;
    letter-spacing: -0.04em;
    text-align: center;
    padding: 0px 15px;
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
`;
