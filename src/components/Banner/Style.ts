import styled from 'styled-components';

export const Banner = styled.div`
  .banner-container {
    border-top: 1px solid #c5c7ca;
    width: 100%;
    height: 440px;
    position: relative;
    overflow: hidden;
  }
  .ad-image {
    width: 700px;
    height: 395px;
    display: block;
    border-radius: 50px;
    object-fit: cover;
    margin-top: 40px;
    margin-bottom: 21px;
  }
  .active-slide,
  .inactive-slide {
    display: block;
    position: absolute;
    width: 700px;
    height: 395px;
    transition: all 0.7s ease;
  }
  .active-slide {
    left: 50%;
    transform: translateX(-50%);
  }
  .inactive-slide {
    filter: brightness(60%);
  }

  .hidden-slide {
    display: none;
  }
  .inactive-slide.right {
    left: calc(50% + 700px + 26px);
    transform: translateX(-50%);
  }
  .inactive-slide.left {
    left: calc(50% - 700px - 26px);
    transform: translateX(-50%);
  }
  .arrow-btn {
    transform: translateY(-50%);
    border: none;
    cursor: pointer;
    z-index: 3;
    background: transparent;
    display: flex;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .left-arrow,
  .right-arrow {
    width: 40px;
    height: 40px;
    cursor: pointer;
    position: absolute;
    border: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-arrow > svg,
  .right-arrow > svg {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
  }
  .left-arrow {
    transform: rotate(180deg);
    left: 27%;
  }
  .right-arrow {
    right: 27%;
  }

  .ad-number {
    position: absolute;
    bottom: 20px;
    right: 34%;
    color: white;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.04em;
  }
  .ad-number > span {
    opacity: 0.8;
  }
`;
