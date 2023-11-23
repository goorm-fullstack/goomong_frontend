import React, { useState, useRef, useEffect } from "react";

import * as S from "./MyPageInfoStyles";
import Header from "../../../components/layout/Header/Header";
import MyPageLeft from "../MyPageLeft/MyPageLeft";
import Footer from "../../../components/layout/Footer/Footer";
import { Cookies } from "react-cookie";
import { MouseEvent } from "react";
import Instance from "../../../util/API/axiosInstance";

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

const MyPageInfo: React.FC = () => {
  const cookies = new Cookies();
  const [email, setEmail] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [memberId, setMemberId] = useState<string>("");
  const [memberNickname, setMemberNickname] = useState<string>("");
  const [buyZipCode, setBuyZipCode] = useState<string>("");
  const [buySido, setBuySido] = useState<string>("");
  const [buySimpleAddress, setBuySimpleAddress] = useState<string>("");
  const [buyDetailAddress, setBuyDetailAddress] = useState<string>("");
  // const [buyDetailAddress, setBuyDetailAddress] = useState<string>("");
  // const [buyDetailAddress, setBuyDetailAddress] = useState<string>("");
  const [member, setMember] = useState<string>("");

  const id = cookies.get('id');

  useEffect(() => {
    setMemberId(cookies.get('memberId'));
  }, []);

  useEffect(() => {
    Instance.get(`/api/member/id/${id}`)
    .then((response) => {
      setMemberNickname(response.data.memberName);
      setBuyZipCode(response.data.buyZipCode);
      setBuySido(response.data.buySido);
      setBuySimpleAddress(response.data.buySimpleAddress);
      setBuyDetailAddress(response.data.buyDetailAddress);
    })
    .catch(() => console.log('회원 정보 불러오기 실패'));
  }, [id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const memberInfo = {
      memberId: memberId,
      memberName: memberNickname,
      buyZipCode: buyZipCode,
      buySimpleAddress: buySimpleAddress,
      buyDetailAddress: buyDetailAddress,
      buySido: buySido,
    };

    Instance.put(`/api/member/update/memberId`, memberInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("회원 정보가 수정되었습니다.");
        window.location.reload();
      })
      .catch(() => {
        alert("업데이트에 실패했습니다. 다시 시도해주세요.");
      });

    // if(selectedImage != null){
    //   const imageInfo = {
    //     memberId: memberId,
    //     multipartFiles: selectedImage
    //   }
    //   Instance.put(`/api/member/update/image`, imageInfo, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //     .then(() => {
    //       alert("프로필 이미지가 수정되었습니다.");
    //     })
    //     .catch(() => {
    //       alert("프로필 이미지 수정에 실패했습니다.");
    //     });
    // }
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
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      height="32px"
    >
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

  //주소 입력 처리
  const onClickAddr = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        setBuyZipCode(
            ((document.getElementById("zipNo") as HTMLInputElement).value =
                data.zonecode)
        );
        setBuySido(
            ((document.getElementById("sido") as HTMLInputElement).value =
                data.sido)
        );
        setBuySimpleAddress(
            ((document.getElementById("addr") as HTMLInputElement).value =
                data.address)
        );
      },
    }).open();
  };

  return (
    <S.MyPageInfoStyles>
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
                <div
                  className="image-container"
                  onClick={handleImageContainerClick}
                >
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
                <input
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  id="file-upload"
                  type="file"
                  name="file"
                  accept=".jpg, .jpeg, .png, .gif"
                />
              </div>
              <div className="info-get">
                <div className="input-text">
                  회원 아이디
                  <input
                    required
                    type="memberId"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    readOnly
                  />
                </div>
                <div className="input-text">
                  별명
                  <input
                      required
                      type="memberNickname"
                      value={memberNickname}
                      onChange={(e) => setMemberNickname(e.target.value)}
                  />
                </div>

                <div className="input-text">
                  <button onClick={onClickAddr}>주소 검색</button>
                </div>
                <div className="input-text">
                  우편번호
                  <input
                      type="text"
                      id="zipNo"
                      name="zipNo"
                      value={buyZipCode}
                      onChange={(e) => setBuyZipCode(e.target.value)}
                      readOnly
                  />
                </div>
                <div className="input-text">
                  시/도
                  <input
                      type="text"
                      id="sido"
                      name="sido"
                      value={buySido}
                      onChange={(e) => setBuySido(e.target.value)}
                      readOnly
                  />
                </div>
                <div className="input-text">
                  도로명 주소
                  <input
                      type="text"
                      id="addr"
                      name="addr"
                      value={buySimpleAddress}
                      onChange={(e) => setBuySimpleAddress(e.target.value)}
                      readOnly
                  />
                </div>
                <div className="input-text">
                  상세 주소
                  <input
                      type="text"
                      value={buyDetailAddress}
                      onChange={(e) => setBuyDetailAddress(e.target.value)}
                  />
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
    </S.MyPageInfoStyles>
  );
};

export default MyPageInfo;
