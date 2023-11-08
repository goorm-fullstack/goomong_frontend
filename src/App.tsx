import React from 'react';
import Main from './pages/Main/Main';
import Header from './components/layout/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FindId from './pages/FindId/FindId';
import FindPw from './pages/FindPw/FindPw';
import RegisterByGoomong from './pages/RegisterByGoomong/RegisterByGoomong';
import Admin from './pages/Admin/Admin';
import AdminMail from './pages/Admin/Mail/AdminMail';
import AdminMailTemplate from './pages/Admin/Mail/AdminMailTemplate';
import AdminLogin from './pages/Admin/Login/AdminLogin';

const App: React.FC = () => {
  const location = useLocation();
  const hideHeaderComponent: string[] = ['/login', '/reg', '/findid', '/findpw', '/admin', '/admin/mail', '/admin/mail/template', '/admin/login'];
  // 모든 admin 주소를 상단 배열에 포함시키는 것보다는 header 표시 방법을 바꾸는게 나을 것 같습니다.

  return (
    <div className="App">
      <GlobalStyle />
      {!hideHeaderComponent.includes(location.pathname) && <Header />}
      {/* 모든 admin 주소를 상단 배열에 포함시키는 것보다는 header 표시 방법을 바꾸는게 나을 것 같습니다. */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/reg_goomong" element={<RegisterByGoomong />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
      </Routes>
    </div>
  );
};

export default App;
