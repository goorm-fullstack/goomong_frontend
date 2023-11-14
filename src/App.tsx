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
import ItemDetail from './pages/Item/ItemDetail';
import ItemWrite from './pages/Item/ItemWrite';
import AdminItemCategory from './pages/Admin/Item/AdminItemCategory';
import ItemList from './pages/Item/ItemList';
import OrderWrite from './pages/Order/OrderWrite';
import OrderSuccess from './pages/Order/OrderSuccess';
import Agreement from './pages/Agreement/Agreement';
import Community from './pages/Community/Community';
import CommunityDetail from './pages/CommunityDetail/CommunityDetail';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import CustomerServiceHome from './pages/CustomerService/CSHome/CSHome';
import AdminLogin from './pages/Admin/Login/AdminLogin';

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
        <Route path="/item" element={<ItemList />}></Route>
        <Route path="/item/detail/:id" element={<ItemDetail />}></Route>
        <Route path="/item/write" element={<ItemWrite />}></Route>
        <Route path="/order/write" element={<OrderWrite />}></Route>
        <Route path="/order/success" element={<OrderSuccess />}></Route>

        {/* 어드민 주소 위치 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
        <Route path="/admin/item/category" element={<AdminItemCategory />}></Route>
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
