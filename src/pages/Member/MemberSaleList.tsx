import React from 'react'
import styled from 'styled-components'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'

const Main = styled.div`
  width : 100%;
  height : 100%;
`

const Container = styled.div`
  width : 1280px;
  padding: 0px 40px;
  margin: 0 auto;
  display : grid;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    "info . . . ." 
		"sidebar main main main main";
`

const PageInfo = styled.h1`
  grid-area : info;
`

const SideBar = styled.div`
  grid-area : sidebar;
  min-width : 200px;
  height : 100%;
  float : left;
  display : flex;
  flex-direction : column;
  .memberInfo {
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 2em;
    line-height : 1.5;
  }
  img {
    width : 100px;
    height : 100px;
    border-radius : 50%;
    background-color: #f5f6f7;
  }

`

const PaymentList = styled.div`
  grid-area : main;
  height : 100%;
  margin : 1em;
  margin-bottom : 3em;
  padding : 1em;
  table {
    border-top : 1px solid black;
  }
`

const PaymentCount = styled.div`
  min-height : 150px;
  margin-bottom : 2em;
  line-height : 1.5;
  .orderLog {
    padding-bottom : 3em;
    border-bottom : 2px solid #f5f6f7;
  }

  .orderStat {
    margin-top : 2em;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    height : 100px;
    background-color: #f5f6f7;
  }
`

const OrderInfo = styled.div`
  padding-top : 1em;
  table {
    width : 100%;
    max-width : 100%;
    border-top : 1px solid black;
  }
`

const Menu = styled.div`
  width : 90%;
  
  div {
    border-top :1px solid #ccccff;
    padding-top : 0.5em;
    margin-bottom : 1em;
    line-height : 1.5;
  }

  h3 {
    padding-bottom : 1em;
    font-weight : bold;
  }
`

export default function MemberSaleList() {
  return (
    <Main>
      <Header />
      <Container>
      <PageInfo>마이페이지</PageInfo>
      <SideBar>
        <div className='memberInfo'>
          <img></img>
          <h2>회원명</h2>
          <br/>
          <p>email@email.com</p>
          <p>서울 전체</p>
          <button>판매자로 전환하기</button>
        </div>
        <Menu>
          <h3>정보 관리</h3>
          <div>
            <p>계정 설정</p>
            <p>알림 센터</p>
          </div>
        </Menu>
        <Menu>
          <h3>결제 관리</h3>
          <div>
            <p>결제내역</p>
            <p>포인트</p>
          </div>
        </Menu>
        <Menu>
          <h3>활동 관리</h3>
          <div>
            <p>작성한 글</p>
          </div>
        </Menu>
      </SideBar>
      <PaymentList>
        <PaymentCount>
          <div className='orderLog'>
            <h1>판매 내역</h1>
            <p>상세한 계정 정보를 관리할 수 있어요.</p>
          </div>
          <div className='orderStat'>
            <span>진행 중 1,100</span>
            <span>재능 제공 1,100</span>
            <span>취소 문제 1,100</span>
          </div>
        </PaymentCount>
        <OrderInfo>
          <table>
            <colgroup> 
    	        <col></col>
    	        <col></col>
    	        <col></col>
    	        <col></col>
    	        <col></col>
            </colgroup> 
            <tr>
              <th>상세 내용</th>
              <th>등록일</th>
              <th>구분</th>
              <th>금액</th>
              <th>유효기간</th>
            </tr>
            <tr>
              <span>데이터가 없습니다.</span>
            </tr>
          </table>
        </OrderInfo>
      </PaymentList>
    </Container>
    <Footer/>
    </Main>
  )
}
