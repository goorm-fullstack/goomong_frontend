import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import logo from '../../../../assets/images/common/logo.png';

const AdminLoginHeader = () => {
  return (
    <S.AdminHeader className="login">
      <h1>
        <Link to="/admin">
          <img src={logo} />
        </Link>
      </h1>
      <div className="right">
        <ul>
          <li className="buttonwrap">
            {/* 사용자 홈 바로가기 */}
            <Link to="/">
              <svg viewBox="0 0 20 19">
                <desc />
                <defs />
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                  <g id="Core" transform="translate(-506.000000, -255.000000)">
                    <g id="home" transform="translate(506.000000, 255.500000)">
                      <path d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z" id="Shape" />
                    </g>
                  </g>
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </S.AdminHeader>
  );
};

export default AdminLoginHeader;
