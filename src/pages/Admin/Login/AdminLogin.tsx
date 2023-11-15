import React from 'react';
import * as S from '../Style';
import * as A from './Style';
import AdminLoginHeader from '../../../components/Admin/Layout/Header/AdminLoginHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';

const AdminLogin = () => {
  return (
    <S.Admin>
      <AdminLoginHeader />
      <S.Contents className="login">
        <A.LoginForm>
          <h2>관리자 로그인</h2>
          <input type="text" placeholder="관리자 아이디" />
          <input type="password" placeholder="관리자 비밀번호" />
          <button type="submit">로그인</button>
        </A.LoginForm>
      </S.Contents>
    </S.Admin>
  );
};

export default AdminLogin;
