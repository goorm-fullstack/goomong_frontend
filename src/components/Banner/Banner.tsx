import React, { useState, useEffect } from 'react';
import * as S from './Style';

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
  { imageUrl: 'https://via.placeholder.com/800x300?text=Ad+1', altText: '광고 1 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/800x300?text=Ad+2', altText: '광고 2 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/800x300?text=Ad+3', altText: '광고 3 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/800x300?text=Ad+4', altText: '광고 4 설명', linkUrl: '#' },
  { imageUrl: 'https://via.placeholder.com/800x300?text=Ad+5', altText: '광고 5 설명', linkUrl: '#' },
];

const Banner: React.FC<BannerProps> = ({ ads = defaultAds, interval = 3000 }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentAdIndex]);

  const prevSlide = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  const nextSlide = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
  };

  return (
    <S.banner>
      <div className="banner-container">
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              index === currentAdIndex
                ? 'active-slide'
                : index === (currentAdIndex - 1 + ads.length) % ads.length
                ? 'inactive-slide left'
                : index === (currentAdIndex + 1) % ads.length
                ? 'inactive-slide right'
                : index === currentAdIndex
                ? 'active-slide'
                : 'hidden-slide'
            }>
            <img src={ad.imageUrl} alt={ad.altText} className="ad-image" />
          </a>
        ))}
        <div className="arrow-btn">
          <button onClick={prevSlide} className="left-arrow">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.000000 48.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path
                  d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                />
              </g>
            </svg>
          </button>
          <button onClick={nextSlide} className="right-arrow">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.000000 48.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path
                  d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                />
              </g>
            </svg>
          </button>
        </div>

        <div className="ad-number">
          {currentAdIndex + 1}
          <span>/{ads.length}</span>
        </div>
      </div>
    </S.banner>
  );
};

export default Banner;
