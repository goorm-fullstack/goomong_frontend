import React from 'react';
import Main from './pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import FindId from './pages/FindId/FindId';
import FindPw from './pages/FindPw/FindPw';
import NewPw from "./pages/FindPw/NewPw";
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
import AdminPostList from './pages/Admin/post/AdminPostList';
import AdminPostWrite from './pages/Admin/post/AdminPostWrite';
import AdminPostDetail from './pages/Admin/post/AdminPostDetail';
import AdminQnaList from './pages/Admin/qna/AdminQnaList';
import AdminQnaWrite from './pages/Admin/qna/AdminQnaWrite';
import SellerDetail from './pages/SellerDetail/SellerDetail';
import MyPageInfo from './pages/MyPage/Info/MyPageInfo';
import MyPageChangePw from "./pages/MyPage/ChangePw/MyPageChangePw";
import MyPagePayment from './pages/MyPage/PaymentHistory/MyPagePayment';
import MyPageSales from './pages/MyPage/SaleHistory/MyPageSales';
import MyPageBoard from './pages/MyPage/BoardHistory/MyPageBoard';
import MyPagePoint from './pages/MyPage/Point/MyPagePoint';
import Chatting from './pages/Chatting/Chatting';
import NotFound from './pages/NotFound/NotFound';
import SearchDetail from './pages/SearchDetail/SearchDetail';
import ConvertSeller from './pages/MyPage/ConvertSeller/ConvertSeller';
import MyPageChatting from './pages/MyPage/MyPageChatting/MyPageChatting';

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
        <Route path="/newpw" element={<NewPw />} />
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
        <Route path="/item/:type/:category/:page" element={<ItemList />}></Route>
        <Route path="/item/detail/:id" element={<ItemDetail />}></Route>
        <Route path="/item/write" element={<ItemWrite />}></Route>
        <Route path="/order/write" element={<OrderWrite />}></Route>
        <Route path="/order/success" element={<OrderSuccess />}></Route>
        <Route path="/seller/rank" element={<SellerRank />} />
        <Route path="/seller/map" element={<SellerMap />} />
        <Route path="/seller/all" element={<SellerAll />} />
        <Route path="/seller/detail" element={<SellerDetail />} />
        <Route path="/write/:type" element={<Write />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/chatting" element={<Chatting showLayout={true} />} />
        <Route path="/search/:searchTerm" element={<SearchDetail />} />

        {/* 어드민 주소 위치 */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/mail" element={<AdminMail />} />
        <Route path="/admin/mail/template" element={<AdminMailTemplate />} />
        <Route path="/admin/item/category" element={<AdminItemCategory />}></Route>
        <Route path="/admin/post" element={<AdminPostList />} />
        <Route path="/admin/post/write" element={<AdminPostWrite />} />
        <Route path="/admin/post/detail/:id" element={<AdminPostDetail />} />
        <Route path="/admin/qna" element={<AdminQnaList />} />
        <Route path="/admin/qna/write" element={<AdminQnaWrite />} />

        {/* 마이페이지 */}

        <Route path="/mypage/info" element={<MyPageInfo />} />
        <Route path="/mypage/changepw" element={<MyPageChangePw />} />
        <Route path="/mypage/payment" element={<MyPagePayment />} />
        <Route path="/mypage/sales" element={<MyPageSales />} />
        <Route path="/mypage/board" element={<MyPageBoard />} />
        <Route path="/mypage/point" element={<MyPagePoint />} />
        <Route path="/mypage/chatting" element={<MyPageChatting />} />
        <Route path="/mypage/convertseller" element={<ConvertSeller />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
