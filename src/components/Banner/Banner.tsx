import React, { useState } from 'react';
import * as S from './BannerStyles';
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

export const NextArrow: React.FC<any> = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow next-arrow" onClick={onClick}>
      <ArrowSGV />
    </div>
  );
};

export const PrevArrow: React.FC<any> = (props) => {
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

const Banner: React.FC<BannerProps> = ({ ads = defaultAds }) => {
  const totalAds = ads.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };
  const twoDigitFormat = (number: number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 2025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <S.Banner>
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index}>
            <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer">
              <img src="#" alt="" className="ad-image" width={'100%'} />
            </a>
          </div>
        ))}
      </Slider>
      <div className="ad-number">
        {twoDigitFormat(currentSlide + 1)}
        <span>/{twoDigitFormat(totalAds)}</span>
      </div>
    </S.Banner>
  );
};

export default Banner;
