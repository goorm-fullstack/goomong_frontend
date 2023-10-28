import styled from 'styled-components';

export const Review = styled.div`
  .review-container {
    width: 100%;
    padding: 100px 0;
    background-color: #f5f8ff;
  }

  .review-main-top {
    width: 1280px;
    padding: 0px 40px;
    margin: 0 auto;
  }

  .title-top {
    font-size: 28px;
    letter-spacing: -0.04em;
    font-weight: 600;
    margin-bottom: 70px;
    color: var(--black);
  }

  .title-bottom {
    display: flex;
  }

  .sub-title {
    letter-spacing: -0.04em;
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
  }

  .score {
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    width: 45px;
    height: 27px;
    border-radius: 10px;
    background-color: var(--blue);
  }

  .score {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: var(--blue);
    padding: 0px 10px;
    border-radius: 5px;
    margin-left: 10px;
  }
`;
