import React, { useState } from 'react';
import Logo from '../../assets/images/common/logo.png';
import * as S from './Style';
import Kakao from '../../assets/oauth/ico_kakao.png';
import Google from '../../assets/oauth/ico_google.png';
import Naver from '../../assets/oauth/ico_naver.png';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <input className="id-box box" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <div className="text">비밀번호</div>
          <input className="pw-box box" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="submit-btn">
            로그인
          </button>
        </form>
        <div className="middle">
          <div className="checkbox">
            <input type="checkbox" id="rememberId" />
            <label htmlFor="rememberId">
              <span>아이디 저장</span>
            </label>
          </div>
          <div className="find">
            <Link to="#null">
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

            <Link to="#null">
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
          <Link to="#null">
            <div className="kakao">
              <img src={Kakao} alt="kakao" />
            </div>
          </Link>
          <Link to="#null">
            <div className="google">
              <img src={Google} alt="google" />
            </div>
          </Link>
          <Link to="#null">
            <div className="naver">
              <img src={Naver} alt="naver" />
            </div>
          </Link>
        </div>
        <div className="bottom">
          <span className="text">아직 구몽 회원이 아니세요?</span>
          <Link to="/register">회원가입 하기</Link>
        </div>
      </div>
    </S.Login>
  );
};

export default Login;
