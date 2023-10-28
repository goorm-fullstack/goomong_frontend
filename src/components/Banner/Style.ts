import styled from 'styled-components';

export const Banner = styled.div`
  .slick-slider {
    border-top: 1px solid #c5c7ca;
    overflow-x: hidden;
    position: relative;
    padding-top: 40px;
    padding-bottom: 14px;
  }
  .slick-slide {
    height: 395px;
    display: flex;
    width: 700px !important;
    justify-content: center;
    align-items: center;
    padding-right: 80px;
    border-radius: 15px;
    opacity: 0.5;
    transition: opacity 0.3s;
    margin: 0 10px;
  }
  .slick-center .ad-image {
    background-color: #c5c7ca;
  }
  .slick-list {
    margin-right: -80px;
    height: 395px !important;
  }

  .slick-slide div {
    width: 700px !important;
    height: 100%;
    margin: 0 30px;
  }
  .slick-list,
  slick-track {
    height: 100%;
  }
  a {
    width: 100%;
  }

  .ad-image {
    height: 100%;
    border-radius: 15px;
    background-color: #000;
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
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
    right: 29%;
  }
  .prev-arrow {
    left: 29%;
  }
`;
