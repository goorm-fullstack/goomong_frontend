import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_KAKAO_MAPS_API_KEY;

    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services,clusterer,drawing`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setScriptLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      // 메모리 누수 방지를 위해 스크립트 정리
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Kakao Maps 메소드를 사용하기 전에 스크립트가 로드되었는지 확인
    if (scriptLoaded) {
      const markerPosition = new window.kakao.maps.LatLng(37.566826, 126.9786567);
      const mapContainer = document.getElementById('map');

      // 추가: 지도 크기 확인
      if (mapContainer && mapContainer.offsetWidth > 0 && mapContainer.offsetHeight > 0) {
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 5,
        };
        const map = new window.kakao.maps.Map(mapContainer, options);

        // 추가: 마커 표시
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      }
    }
  }, [scriptLoaded]);

  return <div id="map" style={{ width: '100%', height: '600px' }} />;
};

export default KakaoMap;
