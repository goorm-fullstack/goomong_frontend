import React from 'react';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FindId from './pages/FindId/FindId';
import FindPw from './pages/FindPw/FindPw';
import RegisterByGoomong from './pages/RegisterByGoomong/RegisterByGoomong';
import Admin from './pages/Admin/Admin';
import Agreement from './pages/Agreement/Agreement';
import Community from './pages/Community/Community';
import CommunityDetail from './pages/CommunityDetail/CommunityDetail';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import CustomerServiceHome from './pages/CustomerService/CSHome/CSHome';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/reg_goomong" element={<RegisterByGoomong />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community_detail" element={<CommunityDetail />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/cs_home" element={<CustomerServiceHome />} />
      </Routes>
    </div>
  );
};

export default App;
