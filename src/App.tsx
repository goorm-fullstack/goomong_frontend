import React from 'react';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FindId from './pages/FindId/FindId';
import FindPw from './pages/FindPw/FindPw';
import RegisterByGoomong from './pages/RegisterByGoomong/RegisterByGoomong';
import Admin from './pages/Admin/Admin';
import AdminMail from './pages/Admin/Mail/AdminMail';
import AdminMailTemplate from './pages/Admin/Mail/AdminMailTemplate';
import AdminLogin from './pages/Admin/Login/AdminLogin';
import Agreement from './pages/Agreement/Agreement';
import Community from './pages/Community/Community';
import CommunityDetail from './pages/CommunityDetail/CommunityDetail';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import CustomerServiceHome from './pages/CustomerService/CSHome/CSHome';
import CSNotice from './pages/CustomerService/CSNotice/CSNotice';
import CSFaq from './pages/CustomerService/CSFaq/CSFaq';
import SellerRank from './pages/SellerRank/SellerRank';
import SellerMap from './pages/SellerMap/SellerMap';
import CSInquiry from './pages/CustomerService/CSInquiry/CSInquiry';
import SellerAll from './pages/SellerAll/SellerAll';

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
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community_detail" element={<CommunityDetail />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/cs_home" element={<CustomerServiceHome />} />
        <Route path="/cs_notice" element={<CSNotice />} />
        <Route path="/cs_faq" element={<CSFaq />} />
        <Route path="/cs_inquiry" element={<CSInquiry />} />
        <Route path="/seller_rank" element={<SellerRank />} />
        <Route path="/seller_map" element={<SellerMap />} />
        <Route path="/seller_all" element={<SellerAll />} />
      </Routes>
    </div>
  );
};

export default App;
