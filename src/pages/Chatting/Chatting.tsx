import React, { useRef, useState, useEffect } from 'react';
import * as S from './ChattingStyles';
import Header from '../../components/layout/Header/Header';
import ChattingRoom from './ChattingRoom/ChattingRoom';
import Footer from '../../components/layout/Footer/Footer';
import ChattingUI from './ChattingUI/ChattingUI';
import { Stomp, CompatClient } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useLocation } from 'react-router-dom';
import Instance from '../../util/API/axiosInstance';

interface Opponent {
  imageUrl?: string;
  nickname: string;
  product: string;
  money: number;
  date: string;
  content: string[];
}

interface UIModel {
  opponent: Opponent;
  bigDate: string;
  nowDate: string;
  content: string[];
}
const Chatting: React.FC<{ showLayout: boolean }> = ({ showLayout = true }) => {
  const location = useLocation();
  const { state } = location;
  const [roomId, setRoomId] = useState(0);

  const chattingUIData: UIModel = {
    opponent: {
      nickname: '마켓',
      product: '이거 구매했어요 상품명',
      money: 500000,
      date: '11월 13일 10:10',
      content: ['첫 번째 메시지', '두 번째 메시지', '세 번째 메시지'],
    },
    bigDate: '2023.11.14',
    nowDate: '11월 14일 10:10',
    content: ['첫 번째 메시지', '두 번째 메시지', '세 번째 메시지'],
  };

  const client = useRef<CompatClient>();
  const [messages, setMessages] = useState<string[]>([]);
  const [content, setContent] = useState<string[]>([]);

  // 최초 세팅
  useEffect(() => {
    if (state) {
      const { id } = state;
      const { itemId } = state;
      if (id) {
        setRoomId(id);
      } else {
        if (itemId) {
          let data = {
            memberId: 1,
            itemId: Number(itemId),
          };
          Instance.post('/api/chat', data).then((response) => {
            console.log(response.data);
            setRoomId(response.data.roomId);
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    connect();
  }, [roomId]);

  const connect = () => {
    const socket = new SockJS('http://localhost:8080/ws/chat');
    client.current = Stomp.over(socket);

    client.current.connect({}, connectCallback, errorCallback);
  };

  const connectCallback = () => {
    if (client.current && roomId !== 0) {
      // 이전 채팅 기록 불러오기
      Instance.get('/api/chat/room/' + roomId).then((response) => {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          setContent((p) => [...p, data[i].message]);
        }
      });

      client.current.subscribe(`/sub/chat/room/${roomId}`, onMessageReceived);
    }
  };

  const errorCallback = () => {
    console.error('연결 중 오류가 발생했습니다.');
  };

  const closeEventCallback = () => {};

  const onMessageReceived = (message: any) => {
    setMessages((prevMessage) => [...prevMessage, JSON.parse(message.body)]);
  };

  const disconnect = () => {
    client.current?.disconnect(() => {
      /* 채팅방 종료 */
    });
  };

  const sendMessage = (message: string) => {
    if (client.current) {
      let messageType = {
        roomId: roomId,
        message: message,
        memberId: 1,
      };
      console.log(messageType);
      let jsonMessage = JSON.stringify(messageType);
      client.current.send(`/pub/api/chat/sendMessage`, { priority: 9 }, jsonMessage);
      setContent((p) => [...p, message]);
    }
  };

  return (
    <S.ChattingStyles>
      {showLayout && <Header />}
      <div className="chatting-container">
        <ChattingRoom />
        <ChattingUI
          opponent={chattingUIData.opponent}
          product={chattingUIData.opponent.product}
          bigDate={chattingUIData.bigDate}
          nowDate={chattingUIData.nowDate}
          content={content}
          sendMessage={sendMessage}
        />
      </div>
      {showLayout && <Footer />}
    </S.ChattingStyles>
  );
};

export default Chatting;
