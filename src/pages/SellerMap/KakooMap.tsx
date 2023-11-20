import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=588daa3e0f93195e605987ac68a3792c&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 5,
        };
        const map = new window.kakao.maps.Map(mapContainer, options);
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }} />;
};

export default KakaoMap;
