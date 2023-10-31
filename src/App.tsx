import React from 'react';
import { Helmet } from 'react-helmet';
import Main from './pages/Main/Main';
import Header from './components/layout/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const App: React.FC = () => {
  const location = useLocation();
  const hideHeaderComponent: string[] = ['/login', '/register'];
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      {!hideHeaderComponent.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
