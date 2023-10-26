import React from 'react';
import { Helmet } from 'react-helmet';
import Main from './pages/Main';
import Header from './components/layout/Header/Header';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
