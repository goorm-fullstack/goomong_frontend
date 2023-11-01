import React from 'react';
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
