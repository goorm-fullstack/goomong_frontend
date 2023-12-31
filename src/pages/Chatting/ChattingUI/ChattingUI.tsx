import React, { useState, useRef, useEffect } from 'react';

import * as S from './ChattingUIStyles';
import { Link } from 'react-router-dom';
import { Item, Message } from '../../../interface/Interface';
import Instance from '../../../util/API/axiosInstance';
import { getCookie } from '../../../util/func/functions';
import { CommentHistoryModelStyles } from '../../MyPage/BoardHistory/CommentHistoryModel/CommentHistoryModelStyles';

interface UIModel {
  userId?: number;
  bigDate: string;
  nowDate: string;
  content: Message[];
  roomId: number;
  sendMessage: (message: string) => void;
}

const ChattingUI: React.FC<UIModel> = ({ userId, bigDate, nowDate, content, roomId, sendMessage }) => {
  const defaultImage = (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="22px" height="20px">
      <path
        fill="#aab1bc"
        d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z"
      />
    </svg>
  );
  const [message, setMessage] = useState<string>('');
  const [item, setItem] = useState<Item>();
  const memberId = getCookie('id');

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') {
      return;
    }
    sendMessage(message);
    setMessage('');
  };

  const isButtonDisabled = message.trim() === '';

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (roomId !== 0) {
      Instance.get('/api/chat/roomId', {
        params: {
          id: roomId,
        },
      }).then((response) => {
        setItem(response.data.itemDto);
      });
    }
  }, [roomId]);

  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = contentContainerRef.current.scrollHeight;
    }
  }, [content]);

  const handleOrderClick = async () => {
    let data = {
      orderItem: item?.id,
      memberId: memberId,
      address: {
        state: '경기도',
        city: '성남',
        street: '판교',
        detail: '구름',
      },
    };

    Instance.post('/api/order/success', data).then((response) => {
      if (response.status === 200) {
        window.location.href = '/order/success';
      }
    });
  };

  const handleBuyClick = async () => {
    if (item && memberId) {
      if (item.status === 'SALE') {
        let data = {
          id: 1,
          orderName: '테스트 결제',
          successURL: 'https://keba1da28866ea.user-app.krampoline.com/order/success',
          failURL: 'https://keba1da28866ea.user-app.krampoline.com/api/payment/kakao/fail',
          cancelURL: 'https://keba1da28866ea.user-app.krampoline.com/api/payment/kakao/cancel',
          price: item?.price,
          orderDto: {
            orderItem: item?.id,
            memberId: memberId,
            price: item?.price,
            address: {
              state: '경기도',
              city: '성남',
              street: '판교',
              detail: '구름',
            },
          },
        };

        await Instance.post('/api/payment/kakao/ready', data).then((response) => {
          if (response.status === 200) {
            window.open(response.data.next_redirect_pc_url, 'width=600,height=400');
          }
        });
      } else {
        let data = {
          orderItem: item?.id,
          memberId: memberId,
          price: item?.price,
          address: {
            state: '경기도',
            city: '성남',
            street: '판교',
            detail: '구름',
          },
        };

        await Instance.post('/api/order/success', data).then((response) => {
          if (response.status === 200) {
            window.location.href = '/order/success';
          }
        });
      }
    }
  };

  return (
    <S.ChattingUIStyles>
      <div className="UI-container">
        <div className="top">
          <button onClick={handleBuyClick}>구매하기</button>
        </div>
        <div className="content">
          <div className="content-container" ref={contentContainerRef}>
            {/* <div className="big-date">{bigDate}</div> */}
            <div className="user">
              {/* {content.map((message, index) =>
                message.isYour ? (
                  <div key={index} className="user-content">
                    {message.message}
                  </div>
                ) : (
                  <div key={index} className="other-content">
                    {message.message}
                  </div>
                )
              )} */}

              {content.map((message, index) => {
                // 사용자의 메시지이고, product 정보가 있는 경우
                if (message.isYour && message.product) {
                  return (
                    <div key={index} className="user-product-content">
                      <div className="product-message-container">
                        <div className="product-message-content">
                          <div className="nickname">{message.product.nickName}</div>
                          <div className="product">{message.product.productName}</div>
                          <div className="price">
                            <div className="name">상품 금액</div>
                            <div className="money">{message.product.money}</div>
                          </div>
                          <Link to="#null">
                            <button type="button">상품 상세페이지 열기</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                // 사용자의 메시지이지만, product 정보가 없는 경우
                else if (message.isYour) {
                  return (
                    <div key={index} className="user-content">
                      <div className="user-message">{message.message}</div>
                    </div>
                  );
                }

                // 다른 사용자의 메시지이고, product 정보가 있는 경우
                else if (message.product) {
                  return (
                    <div key={index} className="other-product-content">
                      <div className="other-message">{message.message}</div>
                      <div className="product-message-container">
                        <div className="product-message-content">
                          <div className="nickname">{message.product.nickName}</div>
                          <div className="product">{message.product.productName}</div>
                          <div className="price">
                            <div className="name">상품 금액</div>
                            <div className="money">{message.product.money}</div>
                          </div>
                          <Link to="#null">
                            <button type="button">상품 상세페이지 열기</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                // 다른 사용자의 메시지이지만, product 정보가 없는 경우
                else {
                  return (
                    <div key={index} className="other-content">
                      <div className="other-message">{message.message}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <form onSubmit={handleMessageSubmit}>
            <input className="text-box" type="text" value={message} placeholder="메시지를 입력하세요." onChange={(e) => setMessage(e.target.value)} />
            <div className="bottom">
              <label className="file-upload">
                파일 첨부
                <input type="file" name="file" />
              </label>
              <button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? 'disabled-button' : ''}>
                전송
              </button>
            </div>
          </form>
        </div>
      </div>
    </S.ChattingUIStyles>
  );
};

export default ChattingUI;
