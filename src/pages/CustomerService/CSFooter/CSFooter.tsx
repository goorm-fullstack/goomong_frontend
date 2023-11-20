import React from 'react';

import * as S from './CSFooterStyles';
import { Link } from 'react-router-dom';
import Logo_White from '../../../assets/images/common/logo_white.png';

const CSFooter: React.FC = () => {
  return (
    <S.CSFooterStyles>
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
    </S.CSFooterStyles>
  );
};

export default CSFooter;
