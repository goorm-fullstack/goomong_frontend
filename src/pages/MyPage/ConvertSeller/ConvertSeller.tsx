import React, { useState, useRef, MouseEvent, useEffect } from 'react';
import * as S from './ConvertSellerStyles';

import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import { Cookies } from 'react-cookie';
import Instance from '../../../util/API/axiosInstance';

interface UserInfo {
  imageUrl?: string;
}

declare global {
  interface Window {
    daum: any;
  }
}

interface IAddr {
  address: string;
  zonecode: string;
  sido: string;
}

const ConvertSeller = () => {
  const cookies = new Cookies();
  const id = cookies.get('id');
  const [memberId, setMemberId] = useState<string>('');
  const [saleZipCode, setSaleZipCode] = useState<string>('');
  const [saleSido, setSaleSido] = useState<string>('');
  const [saleSimpleAddress, setSaleSimpleAddress] = useState<string>('');
  const [saleDetailAddress, setSaleDetailAddress] = useState<string>('');
  const [saleInfo, setSaleInfo] = useState<string>('');

  //회원 아이디 가져오기
  useEffect(() => {
    setMemberId(cookies.get('memberId'));
  }, []);

  //회원 정보 가져오기
  useEffect(() => {
    Instance.get(`/api/member/id/${id}`)
      .then((response) => {
        setSaleInfo(response.data.saleInfo);
        setSaleZipCode(response.data.saleZipCode);
        setSaleSido(response.data.saleSido);
        setSaleSimpleAddress(response.data.saleSimpleAddress);
        setSaleDetailAddress(response.data.saleDetailAddress);
      })
      .catch(() => console.log('회원 정보 불러오기 실패'));
  }, [id]);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const memberInfo = {
      memberId: memberId,
      saleInfo: saleInfo,
      saleZipCode: saleZipCode,
      saleSimpleAddress: saleSimpleAddress,
      saleDetailAddress: saleDetailAddress,
      saleSido: saleSido,
    };

    Instance.put(`/api/member/update/memberId`, memberInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        alert('회원 정보가 수정되었습니다.');
        window.location.reload();
      })
      .catch(() => {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
      });
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  // 이미지 컨테이너 클릭 핸들러
  const handleImageContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const defaultUser: UserInfo = {};

  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  //파일 추가시 image-container에 사진 표시
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 파일 선택 핸들러
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // e.target이 null이 아닌 경우에만 setSelectedImage 호출
        if (e.target) {
          setSelectedImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  //주소 스크립트 가져오기
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //주소 검색
  const onClickAddr = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        setSaleZipCode(((document.getElementById('zipNo') as HTMLInputElement).value = data.zonecode));
        setSaleSido(((document.getElementById('sido') as HTMLInputElement).value = data.sido));
        setSaleSimpleAddress(((document.getElementById('addr') as HTMLInputElement).value = data.address));
      },
    }).open();
  };

  return (
    <S.ConvertSellerStyles>
      <Header />
      <div className="convert-seller-container">
        <MyPageLeft />
        <div className="info-container">
          <div className="title">
            판매자로 전환하기
            <div className="small">상세한 정보 입력을 통해 판매자로 전환할 수 있어요.</div>
          </div>
          <form onSubmit={handleInfoSubmit} className="info-form">
            <div className="get-container">
              <div className="info-get">
                <div className="input-text">
                  <div className="text">판매자 소개</div>
                  <input required type="saleInfo" value={saleInfo} onChange={(e) => setSaleInfo(e.target.value)} />
                </div>
                <div className="address">
                  <div className="top">
                    <div className="input-text">
                      <div className="text">주소</div>
                      <input
                        onClick={onClickAddr}
                        type="text"
                        id="zipNo"
                        name="zipNo"
                        value={saleZipCode}
                        onChange={(e) => setSaleZipCode(e.target.value)}
                        readOnly
                      />
                      <button onClick={onClickAddr}>주소 검색</button>
                    </div>
                  </div>

                  <div className="input-text">
                    <div className="text">시/도</div>
                    <input
                      onClick={onClickAddr}
                      type="text"
                      id="sido"
                      name="sido"
                      value={saleSido}
                      onChange={(e) => setSaleSido(e.target.value)}
                      readOnly
                    />
                  </div>
                  <div className="input-text">
                    <div className="text">도로명 주소</div>
                    <input
                      type="text"
                      id="addr"
                      name="addr"
                      value={saleSimpleAddress}
                      onChange={(e) => setSaleSimpleAddress(e.target.value)}
                      onClick={onClickAddr}
                      readOnly
                    />
                  </div>
                  <div className="input-text">
                    <div className="text">상세 주소</div>
                    <input type="text" value={saleDetailAddress} onChange={(e) => setSaleDetailAddress(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              저장
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </S.ConvertSellerStyles>
  );
};

export default ConvertSeller;
