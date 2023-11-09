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
import ItemDetail from './pages/Item/ItemDetail';
import ItemWrite from './pages/Item/ItemWrite';
import AdminItemCategory from './pages/Admin/Item/AdminItemCategory';
import ItemList from './pages/Item/ItemList';
import OrderWrite from './pages/Order/OrderWrite';
import OrderSuccess from './pages/Order/OrderSuccess';

const App: React.FC = () => {
  const location = useLocation();
  const hideHeaderComponent: string[] = ['/login', '/reg', '/findid', '/findpw', '/admin', '/admin/mail', '/admin/mail/template'];
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
        <Route path='/item' element={<ItemList/>}></Route>
        <Route path='/item/detail/:id' element={<ItemDetail/>}></Route>
        <Route path='/item/write' element={<ItemWrite/>}></Route>
        <Route path='/order/write' element={<OrderWrite/>}></Route>
        <Route path='/order/success' element={<OrderSuccess/>}></Route>

        {/* 어드민 주소 위치 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
        <Route path='/admin/item/category' element={<AdminItemCategory/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
