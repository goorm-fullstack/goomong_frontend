import React, { useRef, useState } from 'react';

import * as S from './ConvertSeller';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';

interface UserInfo {
  imageUrl?: string;
}

const ConvertSeller: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <S.ConvertSellerStyles>
      <Header />
      <div className="mypage-info-container">
        <MyPageLeft />
        <div className="info-container">
          <div className="title">
            계정설정
            <div className="small">상세한 계정 정보를 관리할 수 있어요</div>
          </div>
          <form onSubmit={handleInfoSubmit} className="info-form">
            <div className="get-container">
              <div className="image-get">
                <div className="image-container" onClick={handleImageContainerClick}>
                  {selectedImage ? (
                    <img src={selectedImage} alt="Selected" />
                  ) : defaultUser.imageUrl ? (
                    <img src={defaultUser.imageUrl} alt="User" />
                  ) : (
                    defaultImage
                  )}
                </div>
                <label className="file-upload-btn" htmlFor="file-upload">
                  파일 선택
                </label>
                <input onChange={handleFileChange} ref={fileInputRef} id="file-upload" type="file" name="file" accept=".jpg, .jpeg, .png, .gif" />
              </div>
              <div className="info-get">
                <div className="input-text">
                  회원 아이디
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-text">
                  변경할 비밀번호
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
