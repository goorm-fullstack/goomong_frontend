import React, { useState, useEffect } from 'react';
import '../../style/global.css';
import './Banner.css';
import arrowIcon from '../../assets/svg/ico_arrow.png';

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
      <button onClick={prevSlide} className="arrow-btn left-arrow">
        <img src={arrowIcon} alt="Previous" />
      </button>
      <button onClick={nextSlide} className="arrow-btn right-arrow">
        <img src={arrowIcon} alt="Next" />
      </button>
      <div className="ad-number">
        {currentAdIndex + 1}/{ads.length}
      </div>
    </div>
  );
};

export default Banner;
