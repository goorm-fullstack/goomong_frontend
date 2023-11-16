import styled from 'styled-components';

export const RankModelStyle = styled.div`
  .rank-model-container {
    width: 380px;
    margin-top: 56px;
    margin-right: 30px;
    border: 1px solid #e9ebed;
    border-radius: 10px;
  }

  .rank-model-title {
    background-color: var(--yellow);
    color: #fff;
    height: 50px;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }

  .medal-img {
    width: 38px;
    height: 40px;
  }
  .top1,
  .top2,
  .top3,
  .top4,
  .top5 {
    padding: 30px 20px;
    display: flex;
    border-top: 0;
  }

  .top1 {
    border: 1px solid var(--yellow);
  }
  .top2::before,
  .top3::before,
  .top4::before {
    content: '';
    width: 338px;
    height: 1px;
    background-color: #e9ebed;
    position: absolute;
    margin: 0 20px;
    bottom: 0;
    left: 0;
  }

  .top2,
  .top3,
  .top4 {
    position: relative;
  }
  .top4,
  .top5 {
    padding-left: 34px;
  }
  .money-seller-name {
    margin-left: 31px;
    width: 150px;
  }
  .top4 .money-seller-name,
  .top5 .money-seller-name {
    margin-left: 43px;
  }
  .money {
    letter-spacing: -0.02em;
    font-size: 19px;
    color: var(--black);
    font-weight: 600;
  }
  .seller-name {
    letter-spacing: -0.02em;
    font-size: 14px;
    color: #6f7785;
    font-weight: 500;
    margin-top: 10px;
  }
  .rank-4,
  .rank-5 {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--dim-black);
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: italic;
  }
  .image-container {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
