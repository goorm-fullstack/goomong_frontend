import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Instance from '../../util/API/axiosInstance';

interface Member {

}

interface Item {
 id : number;
 title : string;
 member : Member;
 price : number;
 thumbNailList : Array<any>;
 describe : string;
 itemCategories : Array<any>;
 status : string;
}

interface Address {
  state : string;
  city : string;
  street : string;
  detail : string;
}

export default function OrderWrite() {
  const location = useLocation();
  const {itemId} = location.state;
  const [item, setItem] = useState<Item>();
  const [member, setMember] = useState();
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState('')
  const [iframeUrl, setiframeUrl] = useState('https://www.example.com');

  useEffect(() => {
    Instance.get(`/api/item/${itemId}`).then((response) => {
      setItem(response.data);
      setStatus(response.data.status);
    });


  }, [])

  const handleBuyClick = async () => {
    let data = {
      id : 1,
      orderName: "테스트 결제",
      successURL : "http://localhost:3000/order/success",
      failURL : "http://localhost:8080/api/payment/kakao/fail",
      cancelURL : "http://localhost:8080/api/payment/kakao/cancel",
      price : item?.price,
      orderDto : {
        orderItem : [item?.id],
        memberId : 1,
        price : item?.price,
        address : {
            state : state,
            city : city,
            street: street,
            detail : detail
        }
      }
    }

    await Instance.post('/api/payment/kakao/ready', data).then((response) => {
      setiframeUrl(response.data.next_redirect_pc_url);

      if(response.status === 200) {
        window.open(response.data.next_redirect_pc_url, "width=600,height=400");  
      }
    });
  }

  const handleOrderClick = async () => {
    let data = {
      orderItem : [item?.id],
      memberId : 1,
      address : {
          state : state,
          city : city,
          street: street,
          detail : detail
      }
    }

    Instance.post('/api/order/success', data).then((response) => {
      if(response.status === 200) {
        window.location.href = '/order/success';
      }
    })
  }

  return (
    <>
      <h1>상품 정보</h1>
      {item ? (
        <div>
          {item.thumbNailList.map((img) => (
            <img src={img.path} alt='썸네일'></img>
          ))}
          <p>{item.title}</p>
          {item.status === 'SALE' ? (
            <p>{item.price}</p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <span>잘못된 접근입니다.</span>
      )}
      <br/>
      <h1>주문 정보</h1>
      <div>
        <div>
          <h2>주소지 입력</h2>
          <label>소재지</label>
          <input value={state} onChange={(e) => setState(e.target.value)}></input>
          <label>시군구</label>
          <input value={city} onChange={(e) => setCity(e.target.value)}></input>
          <label>도로명 주소</label>
          <input value={street} onChange={(e) => setStreet(e.target.value)}></input>
          <label>상세 주소</label>
          <input value={detail} onChange={(e) => setDetail(e.target.value)}></input>
        </div>
      </div>
      {status === 'SALE' ? 
        (<button onClick={handleBuyClick}>주문하기</button>) : (<button onClick={handleOrderClick}>주문하기</button>)
      }
    </>
  )
}
