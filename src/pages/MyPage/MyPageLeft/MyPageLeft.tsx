import React, { useEffect, useLayoutEffect, useState } from 'react';

import * as S from './MyPageLeftStyles';
import { Link, NavLink } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Instance from '../../../util/API/axiosInstance';
import { useLocation } from 'react-router-dom';
import { Image } from '../../../interface/Interface';

interface UserInfo {
  imageUrl?: string;
  userName: string;
  userEmail: string;
  userLocal: string;
}

interface MemberData {
  memberName: string;
  memberEmail: string;
  saleSido: string;
  profileImages: Array<Image>;
  isKakao: boolean;
}

const MyPageLeft: React.FC = () => {
  const cookies = new Cookies();
  const isLogin: string = cookies.get('memberId');
  const id: number = cookies.get('id');
  const [member, setMember] = useState<MemberData | null>(null);
  const location = useLocation();
  const [roomId, setRoomId] = useState(0);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="36px" height="32px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );

  useEffect(() => {
    Instance.get(`/api/member/id/${id}`)
      .then((response) => {
        setMember(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    Instance.get('/api/chat/' + id).then((response) => {
      const data = response.data;
      if (data.length !== 0) {
        if (data[0].roomId) {
          setRoomId(data[0].roomId);
        }
      }
    });
  }, [id]);

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setDefaultUser({
        ...defaultUser,
        imageUrl: imageUrls[0],
      });
    }
  }, [imageUrls]);

  useLayoutEffect(() => {
    const fetchImages = async () => {
      if (member) {
        const urls = await Promise.all(member.profileImages.map((img) => getImageFile(img.path)));
        setImageUrls(urls.filter((url) => url !== null) as string[]);
      }
    };

    fetchImages();
  }, [member]);

  //이미지 불러오기
  const getImageFile = async (path: string) => {
    try {
      const response = await Instance.get('/api/image', {
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        responseType: 'blob',
        params: {
          imagePath: path,
        },
      });

      if (response.status === 200) {
        return URL.createObjectURL(response.data);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const [defaultUser, setDefaultUser] = useState<UserInfo>({
    userName: '별명',
    userEmail: 'goomong@goomong.com',
    userLocal: '서울',
  });

  useEffect(() => {
    if (member) {
      setDefaultUser({
        userName: member.memberName,
        userEmail: member.memberEmail,
        userLocal: member.saleSido,
      });
    }
  }, [member]);

  useEffect(() => {
    if (isLogin === null) {
      window.location.href = `/`;
    }
  }, [isLogin]);

  useLayoutEffect(() => {
    if (location.state) {
      setIsSeller(location.state.isSeller);
    }
  }, [location]);

  const clickItemReg = () => {
    if (member?.saleSido === null) alert('판매자 프로필을 먼저 작성해주세요.');
  };
  console.log(member);
  return (
    <S.MyPageLeftStyles>
      <div className="mypage-left-container">
        <div className="title">마이페이지</div>
        <div className="top">
          <div className="image-container">{defaultUser.imageUrl ? <img src={defaultUser.imageUrl} alt="" /> : defaultImage}</div>
          <div className="name">{defaultUser.userName}</div>
          <div className="email">{defaultUser.userEmail}</div>
          <div className="local">
            <svg width="14px" height="16px" id="Icons" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: '#6f7785' }}
                d="M2,10c0,8.491,9.126,13.658,9.514,13.874a1,1,0,0,0,.972,0C12.874,23.658,22,18.491,22,10A10,10,0,0,0,2,10ZM12,2a8.009,8.009,0,0,1,8,8c0,6.274-6.2,10.68-8,11.83C10.2,20.68,4,16.274,4,10A8.009,8.009,0,0,1,12,2Z"
              />
              <path style={{ fill: '#6f7785' }} d="M12,15a5,5,0,1,0-5-5A5.006,5.006,0,0,0,12,15Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,12,7Z" />
            </svg>
            {defaultUser.userLocal}
          </div>
          {isSeller ? (
            <Link to={'/mypage/info'} state={{ isSeller: false }}>
              <button
                type="button"
                onClick={() => {
                  setIsSeller((prevState) => !prevState); // 현재 상태의 반대로 설정
                }}>
                구매자로 전환하기
              </button>
            </Link>
          ) : (
            <Link to={'/mypage/convertseller'} state={{ isSeller: true }}>
              <button
                type="button"
                onClick={() => {
                  setIsSeller((prevState) => !prevState); // 현재 상태의 반대로 설정
                }}>
                판매자로 전환하기
              </button>
            </Link>
          )}
        </div>
        <div className="bottom">
          {isSeller ? ( //판매자이면
            <>
              <div className="info">
                <div className="title">정보 관리</div>
                <ul>
                  <li className="sale-info-set">
                    <NavLink
                      to="/mypage/convertseller"
                      style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}
                      state={{ isSeller: true }}>
                      판매자 프로필 설정
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="payment">
                <div className="title">판매 관리</div>
                <ul>
                  <li className="sell-history">
                    <NavLink
                      to="/mypage/sellhistory"
                      style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}
                      state={{ isSeller: true }}>
                      판매내역
                    </NavLink>
                  </li>
                  <li className="sale-history">
                    <NavLink to="/mypage/sales" style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)} state={{ isSeller: true }}>
                      판매 내역
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="active">
                <div className="title">활동 관리</div>
                <ul>
                  <li className="product-reg">
                    {member?.saleSido !== null ? (
                      <NavLink
                        to={'/write/productreg'}
                        style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}
                        state={{ isSeller: true }}>
                        재능 등록
                      </NavLink>
                    ) : (
                      <NavLink to={'/mypage/convertseller'} state={{ isSeller: true }} onClick={clickItemReg}>
                        재능 등록
                      </NavLink>
                    )}
                  </li>
                  <li className="chatting-history">
                    <NavLink
                      to="/mypage/chatting"
                      state={{ id: roomId, isSeller: true }}
                      style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}>
                      채팅 내역
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            //구매자이면
            <>
              <div className="info">
                <div className="title">정보 관리</div>
                <ul>
                  <li className="buy-info-set">
                    <NavLink to="/mypage/info" style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)} state={{ isSeller: false }}>
                      구매자 계정 설정
                    </NavLink>
                  </li>
                  {!member?.isKakao && (
                    <li className="change-pw">
                      <NavLink
                        to="/mypage/changepw"
                        style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}
                        state={{ isSeller: false }}>
                        비밀번호 변경
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>
              <div className="payment">
                <div className="title">결제 관리</div>
                <ul>
                  <li className="payment-history">
                    <NavLink to="/mypage/payment" style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)} state={{ isSeller: false }}>
                      구매내역
                    </NavLink>
                  </li>
                  <li className="point">
                    <NavLink to="/mypage/point" style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)} state={{ isSeller: false }}>
                      포인트
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="active">
                <div className="title">활동 관리</div>
                <ul>
                  <li className="board-history">
                    <NavLink to="/mypage/board" style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)} state={{ isSeller: false }}>
                      작성한 글
                    </NavLink>
                  </li>
                  <li className="chatting-history">
                    <NavLink
                      to="/mypage/chatting"
                      state={{ id: roomId, isSeller: false }}
                      style={({ isActive }) => (isActive ? { color: '#558ff5' } : undefined)}>
                      채팅 내역
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </S.MyPageLeftStyles>
  );
};

export default MyPageLeft;
