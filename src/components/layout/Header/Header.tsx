import React, { useState, useEffect } from 'react';
import * as S from './HeaderStyles';
import logo from '../../../assets/images/common/logo.png';
import Gnb from '../Gnb/Gnb';
import { Link } from 'react-router-dom';
import Instance from '../../../util/API/axiosInstance';
import { Cookies } from 'react-cookie';

interface CurrentTermProps {
  id: number;
  term: string;
}

interface PopularTerms {
  popular: string[];
}

const Header: React.FC = () => {
  const [popularIndex, setPopularIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const cookies = new Cookies();
  const isLogin = cookies.get('memberId');

  const popularTerms: PopularTerms = { popular: ['인기검색어1', '인기검색어2', '인기검색어3', '인기검색어4', '인기검색어5'] };
  const currentTerms: CurrentTermProps[] = [
    { id: 100, term: '최근검색어1' },
    { id: 101, term: '최근검색어2' },
    { id: 102, term: '최근검색어3' },
  ];

  const [currentTerm, setCurrentTerm] = useState<CurrentTermProps[]>(currentTerms);

  //최근 검색어 x 표시 클릭시 삭제 로직
  const handleCurrentDelete = (id: number) => {
    console.log('Deleting item with id:', id);
    const updatedCurrent = currentTerm.filter((item) => item.id !== id);
    setCurrentTerm(updatedCurrent);
  };

  const handleCurrentAllDelete = () => {
    console.log('Deleting all items');
    setCurrentTerm([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPopularIndex((prevIndex) => (prevIndex + 1) % popularTerms.popular.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    Instance.post(`/api/member/logout`, {})
      .then(() => {
        cookies.remove('memberId');
        cookies.remove('id');
        cookies.remove('memberRole');
        alert('로그아웃 되었습니다.');
        window.location.href = '/';
      })
      .catch((e) => console.log(e));
  };

  const searchInput: HTMLElement | null = document.querySelector('.search-input-container');
  const keyword: HTMLElement | null = document.querySelector('.keyword');
  const keywordB: HTMLElement | null = document.querySelector('.keyword-bottom');

  if (searchInput && keyword) {
    searchInput.addEventListener('click', function () {
      keyword.style.display = 'flex';
    });

    document.addEventListener('click', function (event) {
      if (!searchInput.contains(event.target as Node) && !keyword.contains(event.target as Node)) {
        keyword.style.display = 'none';
        if (keywordB) {
          keywordB.style.display = 'none';
        }
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('click', function () {
      if (keywordB) {
        keywordB.style.display = 'block';
      }
    });
    searchInput.addEventListener('blur', function () {
      const keywordB: HTMLElement | null = document.querySelector('.keyword-bottom');
      if (keywordB) {
        keywordB.style.display = 'initial';
      }
    });
  }

  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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
                  <div className="search-term" key={popularIndex}>
                    <span className="term-number">{popularIndex + 1}.</span>
                    {popularTerms.popular[popularIndex]}
                  </div>
                )}
                <input
                  onChange={handleInputChange}
                  className="search-input"
                  type="text"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
              <Link to={`/search/${searchTerm}`} type="submit" className="search-button-container">
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
              </Link>
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
            {/* {isFocused && ( */}
            <div className="keyword">
              <ul className="current">
                <div className="title">최근 검색어</div>
                {currentTerm.map((term) => (
                  <li key={term.id}>
                    <Link to="#null">
                      <div className="svg-container">
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
                      </div>
                      <span className="current-text">{term.term}</span>
                    </Link>
                    <button className="delete-btn" onClick={() => handleCurrentDelete(term.id)}>
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
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="popular">
                <div className="title">인기 검색어</div>
                {popularTerms.popular.map((term, index) => (
                  <li key={index}>
                    <Link to="#null">
                      <span>{index + 1}.</span>
                      {term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* )} */}
            {/* {isFocused && ( */}
            <div className="keyword-bottom">
              <ul>
                <li>
                  <button type="button" onClick={handleCurrentAllDelete}>
                    전체 삭제
                  </button>
                </li>
                <li>자동완성 끄기</li>
              </ul>
            </div>
            {/* )} */}
          </div>

          <div className="gnb">
            <Gnb />
          </div>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
