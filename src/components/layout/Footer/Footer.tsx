import React from 'react';
import * as S from './FooterStyles';
import Logo from '../../../assets/images/common/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <S.Footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={Logo} alt="Logo" className="footer-logo" />
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
            <div className="footer-tl-text">
              구몽은 개발자를 꿈꾸는 구름 풀스택 개발자 성장 과정 1기 훈련생들이<br></br>
              제작한 사이트이며 실제 운영되는 사이트가 아닙니다.<br></br>피드백 항상 감사합니다. 모쪼록 준비된 기능들을 다양하게 이용해보세요!
            </div>
          </div>
          <div className="footer-top-right">
            <div className="footer-faq">
              <Link to="#null">
                자주하는 질문
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48.000000pt"
                  height="48.000000pt"
                  viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#101c33" stroke="none">
                    <path
                      d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="footer-customer-center">
              <Link to="#null">
                고객 센터
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48.000000pt"
                  height="48.000000pt"
                  viewBox="0 0 48.000000 48.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#101c33" stroke="none">
                    <path
                      d="M156 382 c-3 -6 26 -40 64 -76 l70 -66 -70 -66 c-38 -36 -67 -70 -64
-75 8 -13 25 -1 102 73 l70 68 -75 72 c-80 78 -88 84 -97 70z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="footer-customer-center-detail">
              <ul className="time">
                상담시간
                <li>평일 10:00 ~19:00 </li>
                <li>점심 12:50 ~ 14:00</li>
                <li>(주말, 공휴일 제외)</li>
              </ul>
              <ul className="e-mail">
                이메일
                <li>
                  {' '}
                  <a href="mailto: goomongshop@gmail.com">goomongshop@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-right-1-by-1">
              <Link to="#null">
                <button type="submit" className="footer-top-right-1-by-1-btn">
                  1:1 문의
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <ul className="footer-bottom-left-list">
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
          <div className="footer-bottom-right">
            <div className="instagram">
              <Link to="#null">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23px"
                  height="23px"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#6f7785" stroke="none">
                    <path
                      d="M1463 4680 c-321 -32 -580 -147 -786 -348 -191 -188 -309 -429 -352
-719 -14 -94 -15 -248 -12 -1213 3 -1213 -1 -1129 64 -1335 136 -432 486 -737
958 -832 84 -17 168 -18 1220 -18 l1130 0 105 23 c514 114 861 459 965 960 32
155 37 343 33 1347 -5 1077 -3 1051 -63 1260 -32 113 -119 289 -185 377 -158
209 -356 351 -603 433 -217 71 -174 69 -1342 71 -577 1 -1087 -2 -1132 -6z
m2214 -425 c244 -40 439 -161 560 -348 58 -88 89 -161 121 -277 l27 -95 3
-1025 c3 -1065 1 -1136 -38 -1278 -69 -245 -263 -457 -495 -541 -187 -68 -127
-64 -1230 -68 -667 -3 -1037 -1 -1112 6 -390 38 -666 255 -752 592 -40 157
-42 232 -38 1294 4 1095 2 1065 55 1215 105 301 353 490 697 533 17 2 498 5
1070 5 878 2 1054 0 1132 -13z"
                    />
                    <path
                      d="M3663 3887 c-110 -42 -173 -132 -173 -248 0 -230 272 -346 438 -186
127 121 95 339 -62 419 -49 25 -156 33 -203 15z"
                    />
                    <path
                      d="M2352 3596 c-245 -47 -452 -155 -622 -326 -451 -451 -451 -1179 0
-1630 428 -429 1107 -453 1570 -58 182 156 310 367 373 616 18 74 22 113 21
262 0 155 -3 186 -26 271 -115 427 -424 735 -847 846 -120 31 -353 41 -469 19z
m392 -428 c125 -34 220 -92 321 -193 103 -102 159 -196 196 -331 28 -98 30
-255 6 -356 -61 -250 -245 -450 -492 -534 -106 -36 -276 -45 -388 -20 -149 33
-314 134 -408 250 -66 81 -133 217 -154 311 -26 114 -17 283 19 390 90 266
323 463 596 504 85 13 215 4 304 -21z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <div className="youtube">
              <Link to="#null">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="18px"
                  viewBox="0 0 64.000000 64.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#6f7785" stroke="none">
                    <path
                      d="M73 529 c-59 -17 -68 -45 -68 -209 0 -221 -2 -220 315 -220 317 0
315 -1 315 220 0 168 -8 192 -72 209 -47 13 -445 13 -490 0z m270 -162 c37
-21 67 -42 67 -47 0 -6 -106 -72 -142 -88 -5 -2 -8 38 -8 88 0 50 3 90 8 88 4
-1 37 -20 75 -41z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </S.Footer>
  );
}

export default Footer;
