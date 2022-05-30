import {useEffect, useRef, useState} from 'react';
import {io} from 'socket.io-client';
import {SERVER_URI} from '../constants';
import {useSelector} from 'react-redux';

const useChat = user => {
  // const {} = useSelector(state => state.TEST);
  const [messages, setMessages] = useState([]);
  const {current: socket} = useRef(
    io(SERVER_URI, {
      query: {
        roomId: '626696098f5928e2635222b9',
        userId: user?._id,
      },
      transportOptions: {
        polling: {
          extraHeaders: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        },
      },
    }),
  );

  useEffect(() => {
    socket.emit('user:add', user);
    socket.on('messageToClient', message => {
      setMessages(prev => [...prev, message]);
    });
    socket.emit('joinRoom', {roomId: '626696098f5928e2635222b9'});
    socket.on('allRoomMessages', allMessages => {
      setMessages(allMessages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddMessage = ({message, audio}) => {
    let obj = {
      roomId: '626696098f5928e2635222b9',
      text: message,
    };

    if (audio) {
      obj = {
        roomId: '626696098f5928e2635222b9',
        text: message,
        voice: `https://exceed-chat-app.herokuapp.com/voices/${audio}`,
      };
    }
    socket.emit('addMessage', obj);
  };

  return {messages, handleAddMessage};
};

export default useChat;
