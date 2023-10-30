import styled from 'styled-components';

export const Banner = styled.div`
  .slick-slider {
    margin-top: 40px;
    margin-bottom: 14px;
    height: 395px;
    min-width: 1280px;
    position: relative;
  }
  .slick-slide {
    width: 724px;
    height: 395px;
    border-radius: 8px;
    padding: 0 12px;
  }
  .slick-center .ad-image {
    background-color: #ccc;
  }

  .slick-slide div {
    height: 100%;
  }

  .ad-image {
    height: 100%;
    border-radius: 8px;
    background-color: #ddd;
  }

  .slick-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next-arrow {
    transform: translateX(390px);
  }
  .prev-arrow {
    transform: translateX(-430px);
  }
  .ad-number {
    position: absolute;
    color: #fff;
    top: 55%;
    font-size: 14px;
    font-weight:600;
    letter-spacing: 0.04;
  }
  .ad-number span {
    opacity: 0.8;
  }
`;
