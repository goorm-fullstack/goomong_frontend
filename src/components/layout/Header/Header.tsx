import React, {useState, useEffect, useLayoutEffect} from 'react';
import * as S from './HeaderStyles';
import logo from '../../../assets/images/common/logo.png';
import Gnb from '../Gnb/Gnb';
import {Link, useLocation} from 'react-router-dom';
import Instance from '../../../util/API/axiosInstance';
import { CurrentSearch, PopularSearch } from '../../../interface/Interface';
import { Cookies } from 'react-cookie';

const Header: React.FC = () => {
  const [popularIndex, setPopularIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [currentSearch, setCurrentSearch] = useState<CurrentSearch[]>();
  const [popularSearch, setPopularSearch] = useState<PopularSearch[]>();
  const [isClick, setIsClick] = useState<boolean>(false);
  const cookies = new Cookies();
  const id = cookies.get('id');
  const location = useLocation();
  const isLogin = cookies.get('memberId');
  const id = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    if(id != null) {
      Instance.get(`/api/member/id/${id}`)
          .then((response) => {
            cookies.set('memberId', response.data.memberId);
            cookies.set('id', response.data.id)
            cookies.set('memberRole', response.data.memberRole);

            window.location.href=`/`;
          })

    }
  }, [id]);

  useEffect(() => {
    if (id && isClick === true) {
      Instance.get(`/api/search/recent/${id}`)
        .then((response) => {
          setCurrentSearch(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id, isClick]);

  useEffect(() => {
    Instance.get(`/api/search/top-keywords`)
      .then((response) => {
        if (response.data.length > 0) setPopularSearch(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCurrentDelete = (event: React.MouseEvent, searchId: number) => {
    event.stopPropagation();
    Instance.delete(`/api/search/recent/key/${searchId}`)
      .then(() => {})
      .catch((e) => console.log(e));
    const updatedCurrent = currentSearch?.filter((item) => item.searchId !== searchId);
    setCurrentSearch(updatedCurrent);
  };

  const handleCurrentAllDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    Instance.delete(`/api/search/recent/${id}`)
      .then(() => {})
      .catch((e) => console.log(e));
    setCurrentSearch([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (popularSearch) setPopularIndex((prevIndex) => (prevIndex + 1) % popularSearch.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [popularSearch]);

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
      setIsClick(true);
      keyword.style.display = 'flex';
    });

    document.addEventListener('click', function (event) {
      if (!searchInput.contains(event.target as Node) && !keyword.contains(event.target as Node)) {
        keyword.style.display = 'none';
        setIsClick(false);
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
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                {!isFocused && popularSearch && (
                  <div className="search-term" key={popularIndex}>
                    <span className="term-number">{popularIndex + 1}.</span>
                    {popularSearch[popularIndex]?.keyword}
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
                <button onSubmit={handleSearchSubmit}>
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
            <div className="keyword">
              <ul className="current">
                <div className="title">최근 검색어</div>
                {currentSearch &&
                  currentSearch.map((term) => (
                    <li key={term.searchId}>
                      <Link to={`/search/${term.keyword}`}>
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
                        <span className="current-text">{term.keyword}</span>
                      </Link>
                      <button className="delete-btn" onClick={(e) => handleCurrentDelete(e, term.searchId)}>
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
                {popularSearch &&
                  popularSearch.map((term, index) => (
                    <li key={index}>
                      <Link to={`/search/${term.keyword}`}>
                        <span>{index + 1}.</span>
                        {term.keyword}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="keyword-bottom">
              <ul>
                <li>
                  <button type="button" onClick={(e) => handleCurrentAllDelete(e)}>
                    전체 삭제
                  </button>
                </li>
                <li>자동완성 끄기</li>
              </ul>
            </div>
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
