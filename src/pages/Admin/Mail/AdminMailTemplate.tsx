import React from 'react';
import * as S from '../Style';
import AdminHeader from '../../../components/Admin/Layout/Header/AdminHeader';
import AdminSidebar from '../../../components/Admin/Layout/Sidebar/AdminSidebar';
import { Link } from 'react-router-dom';
import TextEditor from '../../../components/Editor/TextEditor';

const AdminMailTemplate = () => {
  return (
    <S.Admin>
      <AdminHeader />
      <S.Contents>
        <S.PageTitle>자동메일 양식 수정</S.PageTitle>
        <S.AdminTable className="detail">
          <table>
            <colgroup>
              <col width="260px" />
              <col width="auto" />
            </colgroup>
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <input type="text" className="long" />
                </td>
              </tr>
              <tr>
                <th className="vtop">내용</th>
                <td>
                  <TextEditor />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="buttonwrap double">
            <button type="submit">저장</button>
            <button type="button">취소</button>
          </div>
        </S.AdminTable>
      </S.Contents>
      <AdminSidebar />
    </S.Admin>
  );
};

export default AdminMailTemplate;
