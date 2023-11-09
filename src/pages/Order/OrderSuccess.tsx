import React, {useLayoutEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';

export default function OrderSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useLayoutEffect(() => {
    const partnerOrderId = queryParams.get('partner_order_id');
    const partnerUserId = queryParams.get('partner_user_id');
    const pgToken = queryParams.get('pg_token');

    const waiting = setTimeout(() => {
      Instance.get('/api/payment/kakao/success', {
        params : {
          pg_token : pgToken,
          partner_order_id : partnerOrderId,
          partner_user_id : partnerUserId
        }
      })
    }, 3000);
  }, [])

  return (
    <>
      <h1>주문 완료</h1>
    </>
  )
}
