import React, { useState, useEffect } from 'react';
import * as S from './Style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Ad {
  imageUrl: string;
  altText: string;
  linkUrl: string;
}

interface BannerProps {
  ads?: Ad[];
  interval?: number;
}

const defaultAds: Ad[] = [
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+1', altText: '광고 1 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+2', altText: '광고 2 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+3', altText: '광고 3 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+4', altText: '광고 4 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+5', altText: '광고 5 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/700x395?text=Ad+6', altText: '광고 5 설명', linkUrl: '#' },
];

const NextArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}>
      <ArrowSGV />
    </div>
  );
};

const PrevArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow prev-arrow" onClick={onClick}>
      <ArrowSGV rotate={true} />
    </div>
  );
};

const ArrowSGV: React.FC<{ rotate?: boolean }> = ({ rotate = false }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 48.000000 48.000000"
    preserveAspectRatio="xMidYMid meet"
    style={{ transform: rotate ? 'rotate(180deg)' : 'none' }}>
    <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
      <path
        d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
      -75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
      />
    </g>
  </svg>
);

const Banner: React.FC<BannerProps> = ({ ads = defaultAds, interval = 3000 }) => {
  const totalAds = ads.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: handleAfterChange,
  };

  return (
    <S.Banner>
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index}>
            <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer">
              <img src="" alt="" className="ad-image" />
            </a>
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {currentSlide + 1}/{totalAds}
      </div>
    </S.Banner>
  );
};

export default Banner;
