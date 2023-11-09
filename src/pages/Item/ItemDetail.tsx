import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Instance from '../../util/API/axiosInstance';

interface Item {
  id : number;
  title : string;
  member : any;
  price : number;
  thumbNailList : Array<any>;
  itemCategories : Array<any>;
  reviewList : Array<any>;
  askList : Array<any>;
  rate : number;
  stauts : string;
}

export default function ItemDetail() {
  const {id} = useParams();
  const [item, setItem] = useState<Item>();
  const navigator = useNavigate();

  useLayoutEffect(() => {
    Instance.get(`/api/item/${id}`).then((response) => {
      setItem(response.data);
    })
  }, [])

  const handleBuyClick = () => {
    navigator('/order/write', {
      state : {
        itemId : id
      }
    })
  }

  return (
    <>
      <h1>아이템 상세 페이지 테스트</h1>
      {item ? (
        <div>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.rate}</p>
        </div>
      ) : (
        <></>
      )}
      <button onClick={handleBuyClick}>구매하기</button>
    </>
  )
}
