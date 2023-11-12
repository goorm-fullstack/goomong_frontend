import React, { useState, useRef, useEffect } from 'react';
import * as S from './GnbStyles';
import { Link, NavLink } from 'react-router-dom';

const Gnb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocalMenuVisible, setIsLocalMenuVisible] = useState(false);
  const [isServiceMenuVisible, setIsServiceMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLocalMenuMouseEnter = () => {
    setIsLocalMenuVisible(true);
    setIsServiceMenuVisible(false);
  };

  const handleServiceMenuMouseEnter = () => {
    setIsServiceMenuVisible(true);
    setIsLocalMenuVisible(false);
  };

  const handleMouseLeave = () => {
    setIsLocalMenuVisible(false);
    setIsServiceMenuVisible(false);
  };

  return (
    <S.Gnb>
      <div className="gnb-container" onMouseLeave={handleMouseLeave} ref={menuRef}>
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
          <div className="burger-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="gnb-menu">
          <div className="left">
            <div className="left-menu">
              <ul className="ll-menu">
                <li onClick={toggleMenu}>
                  <NavLink to="#null">전체 카테고리</NavLink>
                </li>
                <li>
                  <NavLink to="#null">재능 마켓</NavLink>
                </li>
                <li>
                  <NavLink to="#null">재능 교환</NavLink>
                </li>
                <li>
                  <NavLink to="#null">재능 기부</NavLink>
                </li>
              </ul>
              <ul className="lr-menu">
                <li>
                  <NavLink to="#null">
                    <span className="lr-find">재능 판매자 찾기</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#null">견적 요청</NavLink>
                </li>
                <li>
                  <NavLink to="/community">구몽 생활</NavLink>
                </li>
                <li>
                  <NavLink to="/review">고객 후기</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right-txt">
              재능을 판매하고 <strong>수익</strong>을 만들어 보세요!
            </div>
            <Link to="#null">
              <button type="submit" className="right-btn">
                판매자 등록하기
              </button>
            </Link>
          </div>
        </div>

        {isOpen && (
          <ul className="menu-items">
            <li className="burger-btn">
              <div className="burger-local-btn" onMouseEnter={handleLocalMenuMouseEnter}>
                지역별
              </div>
              <div className="burger-service-btn" onMouseEnter={handleServiceMenuMouseEnter}>
                서비스별
              </div>
            </li>
            <li>
              {isLocalMenuVisible && (
                <ul className="local-menu">
                  <li>
                    <Link to="#null">서울특별시</Link>
                  </li>
                  <li>
                    <Link to="#null">경기도</Link>
                  </li>
                  <li>
                    <Link to="#null">대구광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">부산광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">인천광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">광주광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">대전광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">울산광역시</Link>
                  </li>
                  <li>
                    <Link to="#null">강원도</Link>
                  </li>
                  <li>
                    <Link to="#null">충청북도</Link>
                  </li>
                  <li>
                    <Link to="#null">충청남도</Link>
                  </li>
                  <li>
                    <Link to="#null">경상북도</Link>
                  </li>
                  <li>
                    <Link to="#null">경상남도</Link>
                  </li>
                  <li>
                    <Link to="#null">전라북도</Link>
                  </li>
                  <li>
                    <Link to="#null">전라남도</Link>
                  </li>
                  <li>
                    <Link to="#null">제주도</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              {isServiceMenuVisible && (
                <ul className="service-menu">
                  <li>
                    <Link to="#null">이건 1번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 2번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 3번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 4번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 5번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 6번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 7번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 8번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 9번서비스</Link>
                  </li>
                  <li>
                    <Link to="#null">이건 10번서비스</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>
    </S.Gnb>
  );
};

export default Gnb;
