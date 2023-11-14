import React, {useEffect, useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';

export default function OrderSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useLayoutEffect(() => {
    const partnerOrderId = queryParams.get('partner_order_id');
    const partnerUserId = queryParams.get('partner_user_id');
    const pgToken = queryParams.get('pg_token');
    if(partnerOrderId &&  partnerUserId && pgToken) {
      Instance.get('/api/payment/kakao/success', {
        params : {
          pg_token : pgToken,
          partner_order_id : partnerOrderId,
          partner_user_id : partnerUserId
        }
      }).then((response) => {
  
      })
    }
  }, [])

  return (
    <>
      <h1>주문 완료</h1>
    </>
  )
}
