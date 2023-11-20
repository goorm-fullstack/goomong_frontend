import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import logo from '../../../../assets/images/common/logo.png';

const AdminHeader = () => {
  return (
    <S.AdminHeader>
      <h1>
        <Link to="/admin">
          <img src={logo} />
        </Link>
      </h1>
      <div className="center">
        <form>
          <input type="text" placeholder="검색어를 입력하세요." />
          <button type="submit">
            <svg viewBox="0 0 512 512">
              <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
          </button>
        </form>
      </div>
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
          <li className="adminprofile">
            <div>
              {/* 관리자 프로필 썸네일 */}
              <img src="#" />
            </div>
            <p>
              <Link to="/admin/mypage">홍구름 관리자님</Link>
            </p>
          </li>
          <li className="buttonwrap">
            {/* 로그아웃 버튼 */}
            <button type="button">
              <svg viewBox="0 0 16 16">
                <path d="M1 1H9V5H4L4 11H9V15H1V1Z" />
                <path d="M11 7V4H12L16 8L12 12H11V9H6V7L11 7Z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </S.AdminHeader>
  );
};

export default AdminHeader;
