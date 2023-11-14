import React from 'react';

import * as S from './CSHomeStyles';

import MegaPhone from '../../../assets/images/cs/ico_megaphone.png';
import { Link } from 'react-router-dom';
import CSHeader from '../CSHeader/CSHeader';
import Logo_White from '../../../assets/images/common/logo_white.png';
function CS_Home() {
  const handleCSSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <S.CSHomeStyles>
      <CSHeader />
      <div className="cs-home-container">
        <div className="cs-home-top">
          <div className="cs-top-content">
            <div className="cs-home-center">
              <div className="cs-home-center-title-container">
                <div className="cs-home-center-title">궁금하신 내용을</div>
                <div className="cs-home-center-title">검색하시면 해결해드릴게요</div>
              </div>
              <form onSubmit={handleCSSubmit} className="search-bar" placeholder="무엇이든 검색해보세요">
                <input type="text" className="search-box" placeholder="무엇이든 검색해보세요" />
                <button className="search-btn" type="submit">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
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
              <div className="megaphone">
                <img src={MegaPhone} alt="megaphone" />
              </div>
              CS
            </div>
          </div>
        </div>
        <div className="cs-home-bottom">
          <div className="bottom-title">상담/문의</div>
          <div className="bottom-list">
            <Link to="#null">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="48px" height="46px">
                <defs>
                  <style>{`.cls-1 { fill: #4d8cf5; }`}</style>
                </defs>
                <title />
                <g data-name="Layer 25" id="Layer_25">
                  <path
                    className="cls-1"
                    d="M24,22a1,1,0,0,1-.64-.23L18.84,18H17A8,8,0,0,1,17,2h6a8,8,0,0,1,2,15.74V21a1,1,0,0,1-.58.91A1,1,0,0,1,24,22ZM17,4a6,6,0,0,0,0,12h2.2a1,1,0,0,1,.64.23L23,18.86V16.92a1,1,0,0,1,.86-1A6,6,0,0,0,23,4Z"
                  />
                  <rect className="cls-1" height="2" width="2" x="19" y="9" />
                  <rect className="cls-1" height="2" width="2" x="14" y="9" />
                  <rect className="cls-1" height="2" width="2" x="24" y="9" />
                  <path
                    className="cls-1"
                    d="M8,30a1,1,0,0,1-.42-.09A1,1,0,0,1,7,29V25.74a8,8,0,0,1-1.28-15,1,1,0,1,1,.82,1.82,6,6,0,0,0,1.6,11.4,1,1,0,0,1,.86,1v1.94l3.16-2.63A1,1,0,0,1,12.8,24H15a5.94,5.94,0,0,0,4.29-1.82,1,1,0,0,1,1.44,1.4A8,8,0,0,1,15,26H13.16L8.64,29.77A1,1,0,0,1,8,30Z"
                  />
                </g>
              </svg>
              <div>채팅상담</div>
            </Link>
            <Link to="#null">
              <svg
                data-name="Layer 2"
                id="b6b3c632-959e-430c-923d-e86193c4d165"
                viewBox="0 0 35 35"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4d8cf5"
                width="48px"
                height="45px">
                <path d="M30.559,26.568H4.441A4.2,4.2,0,0,1,.25,22.376V5.361A4.2,4.2,0,0,1,4.441,1.17H30.559A4.2,4.2,0,0,1,34.75,5.361V22.376A4.2,4.2,0,0,1,30.559,26.568ZM4.441,3.67A1.693,1.693,0,0,0,2.75,5.361V22.376a1.693,1.693,0,0,0,1.691,1.692H30.559a1.694,1.694,0,0,0,1.691-1.692V5.361A1.693,1.693,0,0,0,30.559,3.67Z" />
                <path d="M20.6,33.459a1.25,1.25,0,0,1-1.25-1.25V25.318a1.25,1.25,0,1,1,2.5,0v6.891A1.249,1.249,0,0,1,20.6,33.459Z" />
                <path d="M15.415,33.459a1.25,1.25,0,0,1-1.25-1.25V25.318a1.25,1.25,0,0,1,2.5,0v6.891A1.249,1.249,0,0,1,15.415,33.459Z" />
                <path d="M25.537,33.83H10.474a1.25,1.25,0,0,1,0-2.5H25.537a1.25,1.25,0,0,1,0,2.5Z" />
              </svg>
              <div>문의하기</div>
            </Link>
            <Link to="#null">
              <svg width="48px" height="45px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#4d8cf5">
                <rect fill="none" height="256" width="256" />
                <path
                  d="M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32"
                  fill="none"
                  stroke="#4d8cf5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
                <path
                  d="M225.5,184v24a32,32,0,0,1-32,32H136"
                  fill="none"
                  stroke="#4d8cf5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                />
              </svg>

              <div>상담시간</div>
            </Link>
          </div>
        </div>
        <div className="bg-gray">
          <div className="gray-content">
            <div className="left">
              <div className="left-title">자주묻는 질문</div>
              <ul className="left-list">
                <li>콘테스트를 개최하려면 어떻게 해야하나요?</li>
                <li>콘테스트 상금은 디자이너에게 어떻게 지급되나요?</li>
                <li>마음에 드는 시안이 없을까봐 걱정 돼요!</li>
                <li>우승후보작 선정 옵션은 무엇인가요?</li>
                <li>등록된 시안을 실시간으로 확인할 수 있나요?</li>
              </ul>
              <Link to="/cs_notice">
                <button className="more-btn">더보기+</button>
              </Link>
            </div>
            <div className="right">
              <div className="right-title">공지사항</div>
              <ul className="right-list">
                <li>콘테스트를 개최하려면 어떻게 해야하나요?</li>
                <li>콘테스트 상금은 디자이너에게 어떻게 지급되나요?</li>
                <li>마음에 드는 시안이 없을까봐 걱정 돼요!</li>
                <li>우승후보작 선정 옵션은 무엇인가요?</li>
                <li>등록된 시안을 실시간으로 확인할 수 있나요?</li>
              </ul>
              <Link to="/cs_faq">
                <button className="more-btn">더보기+</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-right">
              <div className="footer-top">
                <img src={Logo_White} alt="logo" />
              </div>
              <ul className="footer-top-left-list">
                <li>
                  팀명 <span></span> 파이널 스터디 2조 R=VD
                </li>
                <li>
                  팀장 <span></span> 이동규
                </li>
                <li>
                  사업자등록번호 <span></span> 126-87-39200
                </li>
                <li>
                  통신판매업번호 <span></span> 제2019-성남분당B0224호
                </li>
                <li>
                  주소 <span></span> 경기도성남시분당구 판교로 242 PDC 902호
                </li>
              </ul>
            </div>
            <div className="footer-left">
              <ul className="footer-left-list">
                <li>
                  <Link to="#null">공지 사항</Link>
                </li>
                <li>
                  <Link to="#null">개인정보처리방침</Link>
                </li>
                <li>
                  <Link to="#null">이용약관</Link>
                </li>
                <li>
                  <Link to="/admin">관리자 로그인</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </S.CSHomeStyles>
  );
}

export default CS_Home;
