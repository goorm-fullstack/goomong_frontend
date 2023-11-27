import React, { useState, useEffect } from 'react';
import Header from '../../components/layout/Header/Header';
import * as S from './SellerMapStyles';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import KakaoMap from './KakaoMap';
import MarkerInfoModel from './MarkerInfoModel/MarkerInfoModel';
import { SellerData } from '../../interface/Interface';
import Instance from '../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';
import { getImageFile } from '../../util/func/functions';

const SellerMap: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [sellerData, setSellerData] = useState<SellerData[]>(); // 판매자 데이터
  const [userAddress, setUserAddress] = useState<string>(); // 로그인한 유저 주소
  const [selectId, setSelectId] = useState<number>(); // 마커 클릭한 판매자 id
  const [selectedMarkerData, setSelectedMarkerData] = useState<SellerData>(); // 클릭한 마커의 판매자 데이터
  const [selectedMarkerDataImage, setSelectedMarkerDataImage] = useState<string>(); // 클릭한 마커의 판매자 이미지
  const cookies = new Cookies();
  const id = cookies.get('id');

  // 판매자 데이터 가져오기
  useEffect(() => {
    Instance.get('/api/sellers/all')
      .then((response) => {
        const data = response.data;
        setSellerData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 로그인한 유저 주소 가져오기
  useEffect(() => {
    if (id !== undefined) {
      Instance.get(`/api/member/${id}`)
        .then((response) => {
          const data = response.data;
          if (data.memberAddress) setUserAddress(data.memberAddress);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  // 마커 클릭 시 클릭한 마커의 판매자 데이터 가져오기
  useEffect(() => {
    if (showDetail && selectId && sellerData) {
      const member = sellerData.find((item) => selectId === item.id);
      if (member !== undefined) {
        setSelectedMarkerData(member);
        if (member.imagePath) {
          getImageFile(member.imagePath)
            .then((response) => {
              setSelectedMarkerDataImage(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    }
  }, [selectId, sellerData, showDetail]);

  return (
    <S.SellerMapStyles>
      <Header />
      <div className="seller-map-container">
        <div className="top-nav">
          <Link to="/seller/rank" className="rank">
            랭킹
          </Link>
          <Link to="/seller/all" className="find">
            찾기
          </Link>
        </div>
        <KakaoMap
          user={userAddress ? { userPlace: userAddress } : { userPlace: '경기도 성남시 분당구 판교로 242 PDC A동 902호' }}
          seller={sellerData}
          isClicked={setShowDetail}
          isSelected={setSelectId}
        />
        {showDetail && selectedMarkerData && (
          <MarkerInfoModel
            sellerId={selectedMarkerData.memberId}
            imageUrl={selectedMarkerDataImage}
            sellerName={selectedMarkerData.name}
            totalTransaction={selectedMarkerData.transactionCnt}
            totalReview={selectedMarkerData.reviewCnt}
            star={selectedMarkerData.reviewCnt !== null ? selectedMarkerData.rate / selectedMarkerData.reviewCnt : 0}
            intro={selectedMarkerData.description}
          />
        )}
      </div>
      <Footer />
    </S.SellerMapStyles>
  );
};

export default SellerMap;
