import React from 'react';
import * as S from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import { Link } from 'react-router-dom';

const AdminMail = () => {
  return (
    <S.Admin>
      <AdminHeader />
      <S.Contents>
        <S.PageTitle>자동메일 발송 설정</S.PageTitle>
        <S.AdminTable className="list">
          <table>
            <colgroup>
              <col width="320px" />
              <col width="auto" />
              <col width="auto" />
            </colgroup>
            <thead>
              <tr>
                <th>메일 항목</th>
                <th>발송 여부(대상: 고객)</th>
                <th>발송 여부(대상: 관리자)</th>
                <th>메일 양식</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>신규 가입</td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <Link className="linkBtn" to="/admin/mail/template">
                    수정
                  </Link>
                </td>
              </tr>
              <tr>
                <td>회원 탈퇴</td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <Link className="linkBtn" to="/admin/mail/template">
                    수정
                  </Link>
                </td>
              </tr>
              <tr>
                <td>아이디/비밀번호 안내</td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <label>
                    <input type="checkbox" />
                    사용함
                  </label>
                </td>
                <td className="center">
                  <Link className="linkBtn" to="/admin/mail/template">
                    수정
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </S.AdminTable>
      </S.Contents>
      <AdminSidebar />
    </S.Admin>
  );
};

export default AdminMail;
