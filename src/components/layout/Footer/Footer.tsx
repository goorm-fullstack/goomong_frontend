import React from 'react';
import '../../../style/global.css';
import './Footer.css';
import Logo from '../../../assets/images/common/logo.png';
import Arrow from '../../../assets/svg/ico_arrow.svg';
import Instagram from '../../../assets/svg/ico_instagram.png';
import Youtube from '../../../assets/svg/ico_youtube.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <ul className="footer-top-left-list">
            <li>
              팀명 <span></span> 파이널 스터디2조 R=VD
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
        <div className="footer-top-right">
          <div className="footer-faq">
            자주하는 질문 <img src={Arrow} alt="" className="footer-arrow" />
          </div>
          <div className="footer-customer-center">
            고객 센터 <img src={Arrow} alt="" className="footer-arrow" />
            <div className="footer-customer-center-detail">
              <ul>
                상담시간
                <li>평일 10:00 ~19:00 </li>
                <li>점심 12:50 ~ 14:00</li>
                <li>(주말, 공휴일 제외)</li>
              </ul>
              <ul>
                이메일
                <li>goomongshop@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="footer-top-right-1-by-1">1:1 문의</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <ul className="footer-bottom-left-list">
            <li>회사 소개</li>
            <li>공지 사항</li>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>관리자 로그인</li>
          </ul>
        </div>
        <div className="footer-bottom-right">
          <div className="instagram">
            <img src={Instagram} alt="" />
          </div>
          <div className="youtube">
            <img src={Youtube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
