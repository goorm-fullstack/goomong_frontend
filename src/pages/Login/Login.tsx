import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/common/logo.png';
import * as S from './LoginStyles';
import Kakao from '../../assets/images/oauth/ico_kakao.png';
import Google from '../../assets/images/oauth/ico_google.png';
import Naver from '../../assets/images/oauth/ico_naver.png';
import { Link, useNavigate } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState<string>('');
  const [memberPassword, setMemberPassword] = useState<string>('');
  const [member, setMember] = useState<any[]>([]);
  const [rememberId, setRememberId] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const rememberId = cookies.get('rememberId');
    if (rememberId) {
      setMemberId(rememberId);
      setRememberId(true);
    }
  }, []);

  const handleRememberId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberId(e.target.checked);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loginInfo = {
        //로그인 정보
        memberId: memberId,
        memberPassword: memberPassword,
      };
      Instance.post(`/api/member/login`, loginInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          cookies.set('memberId', response.data.memberId);
          cookies.set('id', response.data.id);
          cookies.set('memberRole', response.data.memberRole);
          if (rememberId) {
            //아이디 저장을 했을 때 쿠키에 아이디 값 저장
            cookies.set('rememberId', memberId);
          } else {
            //체크가 되어있지 않다면 rememberId 쿠키 삭제
            cookies.remove('rememberId');
          }
          window.location.href = '/';
        })
        .catch((e) => {
          alert(e);
        });
    } catch (error) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다. 또는 서버 오류가 발생했습니다.');
    }
  };

  return (
    <S.Login>
      <div className="login-container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="goomongLogo" />
          </div>
        </Link>
        <form onSubmit={handleLoginSubmit}>
          <div className="text">회원 아이디</div>
          <input className="id-box box" type="text" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
          <div className="text">비밀번호</div>
          <input className="pw-box box" type="password" value={memberPassword} onChange={(e) => setMemberPassword(e.target.value)} />
          <button type="submit" className="submit-btn">
            로그인
          </button>
        </form>
        <div className="middle">
          <div className="checkbox">
            <input type="checkbox" id="rememberId" checked={rememberId} onChange={handleRememberId} />
            <label htmlFor="rememberId">
              <span>아이디 저장</span>
            </label>
          </div>
          <div className="find">
            <Link to="/findid">
              <span className="find-id">
                아이디찾기
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path
                      d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                    />
                  </g>
                </svg>
              </span>
            </Link>

            <Link to="/findpw">
              <span className="find-pw">
                비밀번호 찾기
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path
                      d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                    />
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <Link to="/">
          <div className="easy-login">간편 로그인</div>
        </Link>
        <div className="oauth">
          <Link to="https://kauth.kakao.com/oauth/authorize?client_id=116cb3fda2149f8eaddf828c4f308179&redirect_uri=https://keba1da28866ea.user-app.krampoline.com/api/member/kakao/callback&response_type=code">
            <div className="kakao">
              <img src={Kakao} alt="kakao" />
            </div>
          </Link>
          {/*<Link to="#null">*/}
          {/*  <div className="google">*/}
          {/*    <img src={Google} alt="google" />*/}
          {/*  </div>*/}
          {/*</Link>*/}
          {/*<Link to="#null">*/}
          {/*  <div className="naver">*/}
          {/*    <img src={Naver} alt="naver" />*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>
        <div className="bottom">
          <span className="text">아직 구몽 회원이 아니세요?</span>
          <Link to="/register/step1">회원가입 하기</Link>
        </div>
      </div>
    </S.Login>
  );
};

export default Login;
