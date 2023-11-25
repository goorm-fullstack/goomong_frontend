import React, { useEffect, useState } from 'react';
import { SellerData } from '../../interface/Interface';
import { Cookies } from 'react-cookie';

declare global {
  interface Window {
    kakao: any;
  }
}
interface UserLatLng {
  userPlace?: string;
}

interface MapProps {
  user?: UserLatLng;
  seller?: SellerData[];
  isClicked: (clicked: boolean) => void;
  isSelected: (selectedId: number) => void;
}

const KakaoMap: React.FC<MapProps> = ({ user, seller, isClicked, isSelected }) => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [map, setMap] = useState<any>(null);
  const [changedCenter, setChangedCenter] = useState<{ lat: number; lng: number }>({ lat: 37.4022864, lng: 127.1003289 });
  const cookies = new Cookies();
  const id = cookies.get('id');

  //마커 추가 함수
  const addMarker = (map: any, lat: number, lng: number, id: number) => {
    const markerPosition = new window.kakao.maps.LatLng(lat, lng);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 마커 클릭 이벤트 리스너 추가
    window.kakao.maps.event.addListener(marker, 'click', () => {
      isClicked(true);
      isSelected(id);
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

  //카카오 맵 스크립트 로드
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

  //지도 초기 설정
  useEffect(() => {
    if (scriptLoaded) {
      const mapContainer = document.getElementById('map');
      const initialMap = new window.kakao.maps.Map(mapContainer, {
        center: new window.kakao.maps.LatLng(changedCenter.lat, changedCenter.lng),
        level: 3,
      });

      setMap(initialMap); // 지도 클릭 이벤트 리스너 추가
      window.kakao.maps.event.addListener(initialMap, 'click', () => {
        isClicked(false);
      });

      let userCoords;

      if (user && user.userPlace) {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(user.userPlace, function (result: any[], status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            userCoords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            console.log('User Coordinates: ', userCoords);
            initialMap.setCenter(userCoords);
            setChangedCenter({ lat: userCoords.getLat(), lng: userCoords.getLng() });

            // 사용자 위치를 중심으로 하는 원 그리기
            var circle = new window.kakao.maps.Circle({
              center: userCoords,
              radius: 250,
              strokeWeight: 5,
              strokeColor: '#75B8FA',
              strokeOpacity: 1,
              strokeStyle: 'dashed',
              fillColor: '#CFE7FF',
              fillOpacity: 0.7,
            });
            circle.setMap(initialMap);
          }
        });
      }

      // 지도 중심 변경
      window.kakao.maps.event.addListener(initialMap, 'center_changed', () => {
        let newCenter = initialMap.getCenter();
        setChangedCenter({ lat: newCenter.getLat(), lng: newCenter.getLng() });
        console.log('changeCenter', newCenter.getLat());
        console.log('changeCenter', newCenter.getLng());
      });
    }
  }, [scriptLoaded, user]);

  // 판매자 마커 설정
  useEffect(() => {
    if (map && seller) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      seller.forEach((seller) => {
        geocoder.addressSearch(seller.saleSimpleAddress, function (result: any[], status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const sellerCoords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            const distance = getDistanceFromLatLonInM(changedCenter.lat, changedCenter.lng, sellerCoords.getLat(), sellerCoords.getLng());
            if (distance <= 500 && id !== seller.id) {
              addMarker(map, sellerCoords.getLat(), sellerCoords.getLng(), seller.id);
            }
          }
        });
      });
    }
  }, [map, seller, changedCenter]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '600px' }} />
    </div>
  );
};
export default KakaoMap;
