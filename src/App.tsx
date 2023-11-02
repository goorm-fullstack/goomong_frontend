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

const App: React.FC = () => {
  const location = useLocation();
  const hideHeaderComponent: string[] = ['/login', '/register', '/findid', '/findpw', '/admin'];
  return (
    <div className="App">
      <GlobalStyle />
      {!hideHeaderComponent.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/reg_goomong" element={<RegisterByGoomong />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
