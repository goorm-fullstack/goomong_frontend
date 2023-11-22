import React, { useState, useEffect } from 'react';
import * as S from './HeaderStyles';
import logo from '../../../assets/images/common/logo.png';
import Gnb from '../Gnb/Gnb';
import { Link } from 'react-router-dom';
import Instance from '../../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';

const Header: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const popularSearchTerms: string[] = ['인기검색어1', '인기검색어2', '인기검색어3', '인기검색어4'];
  const cookies = new Cookies();
  const isLogin = cookies.get('memberId');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popularSearchTerms.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    Instance.post(`/api/member/logout`, {})
      .then(() => {
        alert('로그아웃 되었습니다.');
        cookies.remove('memberId');
        cookies.remove('id');
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <S.Header>
      <div className="header">
        <div className="header-container">
          <div className="header-top">
            <Link to="/">
              <img src={logo} alt="logo" className="header-logo" />
            </Link>
            <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
              <div className="search-input-container">
                {!isFocused && (
                  <div className="search-term" key={currentIndex}>
                    <span className="term-number">{currentIndex + 1}.</span>
                    {popularSearchTerms[currentIndex]}
                  </div>
                )}
                <input className="search-input" type="text" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
              </div>
              <button type="submit" className="search-button-container">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path
                      d="M141 402 c-134 -68 -87 -264 63 -264 25 0 53 5 63 11 15 8 27 1 69
-40 48 -48 51 -49 67 -31 16 17 14 21 -32 66 -45 44 -49 51 -39 75 48 125 -74
243 -191 183z m135 -43 c63 -59 40 -166 -40 -188 -91 -24 -171 65 -135 150 28
68 122 88 175 38z"
                    />
                  </g>
                </svg>
              </button>
            </form>
            <div className="join">
              <ul className="join-list">
                {!isLogin ? (
                  <>
                    <li className="login">
                      <Link to="/login">로그인</Link>
                    </li>
                    <li className="new-in">
                      <Link to="/register/step1">회원가입</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="logout">
                      <Link to="#" onClick={handleLogout}>
                        로그아웃
                      </Link>
                    </li>
                    <li>
                      <Link to="/mypage/info">마이페이지</Link>
                    </li>
                  </>
                )}

                <li className="customer-center">
                  <Link to="/cs/home">고객센터</Link>
                </li>
              </ul>
            </div>
          </div>
          {isFocused && (
            <div className="keyword">
              <ul className="current">
                <div className="title">최근 검색어</div>
                <li>
                  <Link to="#null">
                    <span className="svg-container">
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.000000pt"
                        height="48.000000pt"
                        viewBox="0 0 48.000000 48.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                          <path
                            d="M141 402 c-134 -68 -87 -264 63 -264 25 0 53 5 63 11 15 8 27 1 69
-40 48 -48 51 -49 67 -31 16 17 14 21 -32 66 -45 44 -49 51 -39 75 48 125 -74
243 -191 183z m135 -43 c63 -59 40 -166 -40 -188 -91 -24 -171 65 -135 150 28
68 122 88 175 38z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="current-text">최근 검색어1</span>
                  </Link>
                  <div className="delete-btn">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48.000000pt"
                      height="48.000000pt"
                      viewBox="0 0 48.000000 48.000000"
                      preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#8e94a0" stroke="none">
                        <path
                          d="M90 378 c0 -7 28 -41 62 -75 l62 -63 -62 -63 c-60 -61 -75 -87 -50
-87 7 0 41 28 75 62 l63 62 63 -62 c34 -34 68 -62 75 -62 25 0 10 26 -50 87
l-62 63 62 63 c60 61 75 87 50 87 -7 0 -41 -28 -75 -62 l-63 -62 -63 62 c-61
60 -87 75 -87 50z"
                        />
                      </g>
                    </svg>
                  </div>
                </li>
                <li>
                  <Link to="#null">
                    <span className="svg-container">
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.000000pt"
                        height="48.000000pt"
                        viewBox="0 0 48.000000 48.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                          <path
                            d="M141 402 c-134 -68 -87 -264 63 -264 25 0 53 5 63 11 15 8 27 1 69
-40 48 -48 51 -49 67 -31 16 17 14 21 -32 66 -45 44 -49 51 -39 75 48 125 -74
243 -191 183z m135 -43 c63 -59 40 -166 -40 -188 -91 -24 -171 65 -135 150 28
68 122 88 175 38z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="current-text">최근 검색어1</span>
                  </Link>
                  <div className="delete-btn">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48.000000pt"
                      height="48.000000pt"
                      viewBox="0 0 48.000000 48.000000"
                      preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#8e94a0" stroke="none">
                        <path
                          d="M90 378 c0 -7 28 -41 62 -75 l62 -63 -62 -63 c-60 -61 -75 -87 -50
-87 7 0 41 28 75 62 l63 62 63 -62 c34 -34 68 -62 75 -62 25 0 10 26 -50 87
l-62 63 62 63 c60 61 75 87 50 87 -7 0 -41 -28 -75 -62 l-63 -62 -63 62 c-61
60 -87 75 -87 50z"
                        />
                      </g>
                    </svg>
                  </div>
                </li>
                <li>
                  <Link to="#null">
                    <span className="svg-container">
                      <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.000000pt"
                        height="48.000000pt"
                        viewBox="0 0 48.000000 48.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                          <path
                            d="M141 402 c-134 -68 -87 -264 63 -264 25 0 53 5 63 11 15 8 27 1 69
-40 48 -48 51 -49 67 -31 16 17 14 21 -32 66 -45 44 -49 51 -39 75 48 125 -74
243 -191 183z m135 -43 c63 -59 40 -166 -40 -188 -91 -24 -171 65 -135 150 28
68 122 88 175 38z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="current-text">최근 검색어1</span>
                  </Link>
                  <div className="delete-btn">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48.000000pt"
                      height="48.000000pt"
                      viewBox="0 0 48.000000 48.000000"
                      preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#8e94a0" stroke="none">
                        <path
                          d="M90 378 c0 -7 28 -41 62 -75 l62 -63 -62 -63 c-60 -61 -75 -87 -50
-87 7 0 41 28 75 62 l63 62 63 -62 c34 -34 68 -62 75 -62 25 0 10 26 -50 87
l-62 63 62 63 c60 61 75 87 50 87 -7 0 -41 -28 -75 -62 l-63 -62 -63 62 c-61
60 -87 75 -87 50z"
                        />
                      </g>
                    </svg>
                  </div>
                </li>
              </ul>
              <ul className="popular">
                <div className="title">인기 검색어</div>
                <li>
                  <Link to="#null">
                    <span>1.</span>인기검색어1
                  </Link>
                </li>
                <li>
                  <Link to="#null">
                    <span>2.</span>인기검색어2
                  </Link>
                </li>
                <li>
                  <Link to="#null">
                    <span>3.</span>인기검색어3
                  </Link>
                </li>
                <li>
                  <Link to="#null">
                    <span>4.</span>인기검색어4
                  </Link>
                </li>
                <li>
                  <Link to="#null">
                    <span>5.</span>인기검색어5
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {isFocused && (
            <div className="keyword-bottom">
              <ul>
                <li>전체 삭제</li>
                <li>자동완성 끄기</li>
              </ul>
            </div>
          )}
          <div className="gnb">
            <Gnb />
          </div>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
