import styled from 'styled-components';

export const Popular = styled.div`
  .popular-container {
    width: 1280px;
    padding: 0px 40px;
    margin: 100px auto 0;
  }
  .popular-title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.04em;
    color: var(--black);
  }
  .popular-sub-title {
    letter-spacing: -0.04em;
    color: var(--black);
    font-weight: 500;
    margin-top: 16px;
    font-size: 18px;
  }

  .ranking-container {
    display: flex;
  }
  .more-btn {
    margin-top: 110px;
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
    width: 25px;
    height: 25px;
  }
  .more-btn button:hover {
    color: #8e94a0;
  }
`;
