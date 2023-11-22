import React, {useState, useRef, useEffect} from 'react';

import * as S from './MyPageChangePwStyles';
import Header from '../../../components/layout/Header/Header';
import MyPageLeft from '../MyPageLeft/MyPageLeft';
import Footer from '../../../components/layout/Footer/Footer';
import {Cookies} from "react-cookie";
import { MouseEvent } from 'react';

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

const MyPageChangePw: React.FC = () => {
  const cookies = new Cookies();
  const [email, setEmail] = useState<string>('');
  const [memberId, setMemberId] = useState<string>('');
  const [memberPassword, setMemberPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>('');
  const [buyZipCode, setBuyZipCode] = useState<string>('');
  const [buySido, setBuySido] = useState<string>('');
  const [buySimpleAddress, setBuySimpleAddress] = useState<string>('');
  const [buyDetailAddress, setBuyDetailAddress] = useState<string>('');

  useEffect(() => {
    setMemberId(cookies.get('memberId'));
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

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

  //새 비밀번호, 새 비밀번호 확인 여부
  const isNewPasswordMatch : boolean = newPassword === newPasswordCheck;

  //주소 입력 처리
  const onClickAddr = (event: MouseEvent<HTMLElement>) => {

    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        setBuyZipCode((document.getElementById('zipNo') as HTMLInputElement).value =
            data.zonecode);
        setBuySido((document.getElementById('sido') as HTMLInputElement).value =
            data.sido);
        setBuySimpleAddress((document.getElementById('addr') as HTMLInputElement).value =
            data.address);
      }
    }).open();
  };


  return (
    <S.MyPageChangePwStyles>
      <Header />
      <div className="mypage-info-container">
        <MyPageLeft />
        <div className="info-container">
          <div className="title">
            비밀번호 변경
            <div className="small">비밀번호를 변경할 수 있어요</div>
          </div>
          <form onSubmit={handleInfoSubmit} className="info-form">
            <div className="get-container">
              <div className="info-get">
                <div className="input-text">
                  회원 아이디
                  <input required type="memberId" value={memberId} onChange={(e) => setMemberId(e.target.value)} readOnly />
                </div>
                <div className="input-text">
                  현재 비밀번호
                  <input required type="password" value={memberPassword} onChange={(e) => setMemberPassword(e.target.value)} />
                </div>
                <div className="input-text">
                  새 비밀번호
                  <input required type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="input-text">
                  새 비밀번호 확인
                  <input required type="password" value={newPasswordCheck} onChange={(e) => setNewPasswordCheck(e.target.value)}
                         className={`check-pw ${
                             newPassword ? (isNewPasswordMatch ? "match" : "mismatch") : ""
                         }`}
                  />
                  {newPassword && !isNewPasswordMatch && (
                      <div className="incorrect-text">
                        <svg
                            width="12px"
                            height="11px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                fill="#ea4335"
                                d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
                                fillRule="nonzero"
                            />
                          </g>
                        </svg>
                        비밀번호가 일치하지 않습니다.
                      </div>
                  )}
                  {newPasswordCheck && isNewPasswordMatch && (
                      <div className="correct-text">
                        <svg
                            height="10px"
                            version="1.1"
                            viewBox="0 0 20 20"
                            width="10px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <title />
                          <desc />
                          <defs />
                          <g
                              fill="none"
                              fillRule="evenodd"
                              id="Page-1"
                              stroke="none"
                              strokeWidth="1"
                          >
                            <g
                                fill="#34a853"
                                id="Core"
                                transform="translate(-128.000000, -86.000000)"
                            >
                              <g
                                  id="check-circle-outline"
                                  transform="translate(128.000000, 86.000000)"
                              >
                                <path
                                    d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
                                    id="Shape"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        비밀번호가 일치합니다.
                      </div>
                  )}
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
    </S.MyPageChangePwStyles>
  );
};

export default MyPageChangePw;
