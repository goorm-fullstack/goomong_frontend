import React, { useEffect, useState } from 'react';
import MarkerInfoModel from './MarkerInfoModel/MarkerInfoModel';

declare global {
  interface Window {
    kakao: any;
  }
}

interface UserLatLng {
  userPlace?: string;
}

interface SellerMarker {
  sellerId: number;
  sellerPlace: string;
}
interface MapProps {
  user?: UserLatLng;
  seller: SellerMarker[];
  isClicked: (clicked: boolean) => void;
}

const KakaoMap: React.FC<MapProps> = ({ user, seller, isClicked }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  //마커 추가 함수
  const addMarker = (map: any, lat: number, lng: number) => {
    const markerPosition = new window.kakao.maps.LatLng(lat, lng);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 마커 클릭 이벤트 리스너 추가
    window.kakao.maps.event.addListener(marker, 'click', () => {
      isClicked(true);
    });
  };

  //마커 생성 범위 (왜인진 모르겠지만 제공하는 distance메서드 안먹힘 ㅠㅠㅠㅠ)
  function getDistanceFromLatLonInM(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000;
    return distance;
  }
  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

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
    if (scriptLoaded) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const mapContainer = document.getElementById('map');

      let map = new window.kakao.maps.Map(mapContainer, {
        center: new window.kakao.maps.LatLng(37.4022864, 127.1003289),
        level: 3,
      });
      let center = new window.kakao.maps.LatLng(37.4022864, 127.1003289);

      if (user && user.userPlace) {
        geocoder.addressSearch(user.userPlace, function (result: any[], status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const UserCoords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            map.setCenter(UserCoords);
            center = UserCoords;
          }
        });
      }

      seller.forEach((seller) => {
        geocoder.addressSearch(seller.sellerPlace, function (result: any[], status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const SellerCoords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            const distance = getDistanceFromLatLonInM(center.getLat(), center.getLng(), SellerCoords.getLat(), SellerCoords.getLng());
            if (distance <= 300) {
              //중심으로부터 마커 표시될 거리 단위m
              addMarker(map, SellerCoords.getLat(), SellerCoords.getLng());
            }
          }
        });
      });
      var circle = new window.kakao.maps.Circle({
        center, // 원의 중심좌표
        radius: 300, // 원의 반지름
        strokeWeight: 5,
        strokeColor: '#75B8FA',
        strokeOpacity: 1,
        strokeStyle: 'dashed',
        fillColor: '#CFE7FF',
        fillOpacity: 0.7,
      });

      circle.setMap(map);
    }
  }, [scriptLoaded, user, seller]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '600px' }} />
    </div>
  );
};
export default KakaoMap;
