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
import { getCookie } from '../../util/func/functions';
import { Message } from '../../interface/Interface';

// interface Opponent {
//   imageUrl?: string;
//   nickname: string;
//   product: string;
//   money: number;
//   date: string;
//   content: string[];
// }

interface UIModel {
  // opponent: Opponent;
  bigDate: string;
  nowDate: string;
  content: Message[];
}

const Chatting: React.FC<{ showLayout: boolean }> = ({ showLayout = true }) => {
  const location = useLocation();
  const { state } = location;
  const [roomId, setRoomId] = useState(0);

  const chattingUIData: UIModel = {
    bigDate: '2023.11.14',
    nowDate: '11월 14일 10:10',
    content: [],
  };

  const client = useRef<CompatClient>();
  const [content, setContent] = useState<Message[]>([]);
  const memberId = getCookie('id');
  const [didMount, setDidMount] = useState<boolean>(false);
  const [selectRoomId, setSelectRoomId] = useState(0);

  useEffect(() => {
    setDidMount(true);
    return () => {};
  }, []);

  // 최초 세팅
  useEffect(() => {
    if (didMount) {
      if (state && memberId) {
        const { itemId } = state;
        const { id } = state;
        if (itemId) {
          let data = {
            memberId: memberId,
            itemId: Number(itemId),
          };
          Instance.post('/api/chat', data).then((response) => {
            setRoomId(response.data.roomId);
          });
        }
        if (id) {
          setRoomId(id);
        }
      }
    }
  }, [didMount, state, memberId]);

  const connect = () => {
    const socket = new SockJS('http://localhost:8080/ws/chat');
    client.current = Stomp.over(socket);

    client.current.connect({}, connectCallback, errorCallback);
    client.current.activate();
  };

  const handlePropsState = (Id: number) => {
    setSelectRoomId(Id);
  };

  const connectCallback = () => {
    if (client.current && roomId !== 0) {
      // 이전 채팅 기록 불러오기
      Instance.get('/api/chat/room/' + roomId).then((response) => {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].memberId === Number(memberId)) {
            let message = {
              message: data[i].message,
              isYour: true,
            };
            setContent((p) => [...p, message]);
          } else {
            let message = {
              message: data[i].message,
              isYour: false,
            };
            setContent((p) => [...p, message]);
          }
        }
      });
      client.current.subscribe(`/sub/chat/room/${roomId}`, onMessageReceived);
    }
  };

  useEffect(() => {
    if (roomId && didMount) {
      connect();
    }
  }, [roomId, didMount]);

  const errorCallback = () => {
    console.error('연결 중 오류가 발생했습니다.');
  };

  const closeEventCallback = () => {};

  const onMessageReceived = (message: any) => {
    const data = JSON.parse(message.body);
    if (data.memberId !== Number(memberId)) {
      let new_message = {
        message: data.message,
        isYour: false,
      };
      setContent((p) => [...p, new_message]);
    }
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
        memberId: memberId,
      };

      let jsonMessage = JSON.stringify(messageType);
      client.current.send(`/pub/api/chat/sendMessage`, { priority: 9 }, jsonMessage);
      setContent((p) => [...p, { message: message, isYour: true }]);
    }
  };

  return (
    <S.ChattingStyles>
      {showLayout && <Header />}
      <div className="chatting-container">
        <ChattingRoom setRoomId={handlePropsState} />
        <ChattingUI
          // opponent={chattingUIData.opponent}
          // product={chattingUIData.opponent.product}
          bigDate={chattingUIData.bigDate}
          nowDate={chattingUIData.nowDate}
          content={content}
          userId={Number(memberId)}
          sendMessage={sendMessage}
          roomId={selectRoomId}
        />
      </div>
      {showLayout && <Footer />}
    </S.ChattingStyles>
  );
};

export default Chatting;
