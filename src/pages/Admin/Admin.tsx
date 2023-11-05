import React from 'react';
import * as S from './Style';
import AdminHeader from '../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../components/Admin/Layout/Sidebar/AdminSidebar';

const Admin = () => {
  return (
    <S.Admin>
      <AdminHeader />
      <S.Contents>
        <S.PageTitle>관리자 홈</S.PageTitle>
      </S.Contents>
      <AdminSidebar />
    </S.Admin>
  );
};

export default Admin;
