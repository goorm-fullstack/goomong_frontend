import styled from 'styled-components';

export const Hotitem = styled.div`
  .hotitem-container {
    width: 100%;
    margin-top: 180px;
  }
  .hotitem-top {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
  }
  .hotitem-title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.04em;
    margin-bottom: 40px;
  }
  .hotitem-title > span {
    color: var(--blue);
  }
  .hotitem-btn {
    width: 360px;
    display: flex;
    justify-content: space-between;
  }
  .hotitem-btn li {
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dbdee2;
    border-radius: 30px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: -0.04em;
  }
  .hotitem-btn li:hover {
    color: #aab1bc;
  }
  .selected {
    font-weight: 600;
    background-color: #4285f4;
    color: #fff;
    border: 1px solid #4285f4;
  }
  .more-btn {
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .more-btn button {
    letter-spacing: -0.04em;
    width: 340px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid #dbdee2;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--dim-black);
  }
  .more-btn button svg {
    width: 21px;
    height: 21px;
  }
  .more-btn button:hover {
    color: #8e94a0;
  }
`;
