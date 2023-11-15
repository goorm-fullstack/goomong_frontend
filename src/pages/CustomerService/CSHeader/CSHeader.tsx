import React from 'react';
import * as S from './CSHeaderStyles';
import Logo from '../../../assets/images/common/logo.png';
import { Link } from 'react-router-dom';

const CS_Header: React.FC = () => {
  return (
    <S.CSHeaderStyles>
      <div className="cs-header-container">
        <div className="cs-header">
          <div className="left">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="head-title">고객센터</div>
          </div>
          <div className="right-btn">
            <Link to="#null">
              <button className="onebyone">1:1 문의하기</button>
            </Link>
          </div>
        </div>
      </div>
    </S.CSHeaderStyles>
  );
};

export default CS_Header;
