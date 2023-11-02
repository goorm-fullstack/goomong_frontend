import styled from 'styled-components';

export const Banner = styled.div`
  .slick-slider {
    margin-top: 40px;
    min-width: 1280px;
    height: 395px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    left: 65%;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04;
  }
  .ad-number span {
    opacity: 0.8;
  }
  @media (max-width: 1199px) {
    .slick-slider {
      height: 340px;
    }
    .slick-slide {
      max-width: 620px;
      height: 340px;
    }
  }

  @media (max-width: 991px) {
    .slick-slider {
      height: 280px;
    }
    .slick-slide {
      max-width: 520px;
      height: 280px;
    }
  }

  @media (max-width: 767px) {
    .slick-slider {
      height: 240px;
    }
    .slick-slide {
      max-width: 420px;
      height: 240px;
    }
  }
`;
