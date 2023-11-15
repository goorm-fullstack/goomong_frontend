import styled from 'styled-components';

export const CSHeaderStyles = styled.div`
  .cs-header-container {
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
  }

  .cs-home-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 23px;
    width: 1280px;
    margin: 0 auto;
  }
  .cs-home-header .left {
    display: flex;
    align-items: center;
    margin-top: 23px;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo::after {
    content: '';
    height: 10px;
    width: 1px;
    background-color: #dbdee2;
    margin: 0px 15px;
    display: inline-block;
  }
  .onebyone {
    border: 0;
    background-color: #4285f4;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.04;
    width: 140px;
    height: 35px;
    border-radius: 18px;
    margin-top: 18px;
    cursor: pointer;
  }
`;
