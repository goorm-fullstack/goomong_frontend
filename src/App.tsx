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
import AdminItemCategory from './pages/Admin/Item/AdminItemCategory';
import ItemList from './pages/Item/ItemList';
import OrderWrite from './pages/Order/OrderWrite';
import OrderSuccess from './pages/Order/OrderSuccess';
import ItemDetail from './pages/Item/ItemDetail';
import ItemWrite from './pages/Item/ItemWrite';
import SellerMap from './pages/SellerMap/SellerMap';
import CSInquiry from './pages/CustomerService/CSInquiry/CSInquiry';
import SellerAll from './pages/SellerAll/SellerAll';
import Write from './pages/Write/Write';
import Hire from './pages/Hire/Hire';
import CSNoticeDetail from './pages/CustomerService/CSNotice/CSNoticeDetail';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/step1" element={<Register />} />
        <Route path="/findid" element={<FindId />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/register/step2" element={<RegisterByGoomong />} />
        <Route path="/community/:category" element={<Community />} />
        <Route path="/community/detail/:id" element={<CommunityDetail />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/cs/home" element={<CustomerServiceHome />} />
        <Route path="/cs/notice" element={<CSNotice />} />
        <Route path="/cs/notice/:id" element={<CSNoticeDetail />} />
        <Route path="/cs/faq/:category" element={<CSFaq />} />
        <Route path="/cs/inquiry" element={<CSInquiry />} />
        <Route path="/cs/agreement" element={<Agreement />} />
        <Route path="/rank" element={<SellerRank />} />
        <Route path="/item/:type/:page" element={<ItemList />}></Route>
        <Route path="/item/detail/:id" element={<ItemDetail />}></Route>
        <Route path="/item/write" element={<ItemWrite />}></Route>
        <Route path="/order/write" element={<OrderWrite />}></Route>
        <Route path="/order/success" element={<OrderSuccess />}></Route>
        <Route path="/seller/rank" element={<SellerRank />} />
        <Route path="/seller/map" element={<SellerMap />} />
        <Route path="/seller/all" element={<SellerAll />} />
        <Route path="/write" element={<Write />} />
        <Route path="/hire" element={<Hire />} />

        {/* 어드민 주소 위치 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
        <Route path="/admin/item/category" element={<AdminItemCategory />}></Route>
      </Routes>
    </div>
  );
};

export default App;
