import React from 'react';
import * as S from './Style';
import { Link, NavLink } from 'react-router-dom';

const sideMenus = [
  {
    title: '게시글 관리',
    sub: [
      { name: '게시글 관리', url: '/admin/post' },
      { name: '자주 묻는 질문 관리', url: '/admin/qna' },
      { name: '댓글 관리', url: '/admin/comment' },
      { name: '신고글 관리', url: '/admin/report' },
      { name: '삭제글 관리', url: '/admin/deletedPost' },
    ],
  },
];

const AdminSidebar = () => {
  return (
    <S.AdminSidebar>
      {sideMenus.map((sideMenu, index) => (
        <React.Fragment key={index}>
          <ul>
            <li key={sideMenu.title}>
              <h2>
                <Link to="#">{sideMenu.title}</Link>
              </h2>
            </li>
            {sideMenu.sub.map((menu) => (
              <li key={menu.name}>
                <NavLink to={menu.url} end>
                  <svg fill="none" viewBox="0 0 48 48">
                    <rect fill="white" fillOpacity="0.01" />
                    <path
                      d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"
                      fill="#2F88FF"
                      stroke="black"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                    <path
                      d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                    <path d="M39.9999 41L36.8284 37.8284" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                    <path
                      d="M38 35C38 36.1046 37.5523 37.1046 36.8284 37.8284C36.1046 38.5523 35.1046 39 34 39C31.7909 39 30 37.2091 30 35C30 32.7909 31.7909 31 34 31C36.2091 31 38 32.7909 38 35Z"
                      fill="#2F88FF"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    />
                  </svg>
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      <ul>
        <li>
          <h2>
            <Link to="#">사이트 관리</Link>
          </h2>
        </li>
        <li>
          <NavLink to="/admin/mail">
            <svg fill="none" viewBox="0 0 48 48">
              <path d="M44 35V9H24H4V23V37H26" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <circle cx="35" cy="35" fill="#2F88FF" r="9" stroke="black" strokeWidth="4" />
              <path d="M34 32V36H38" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d="M4 9L24 22L44 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
            <span>자동메일 발송 설정</span>
          </NavLink>
        </li>
      </ul>
    </S.AdminSidebar>
  );
};

export default AdminSidebar;
