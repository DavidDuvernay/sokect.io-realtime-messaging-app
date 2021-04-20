import React, { useState } from 'react';
import { useParams } from 'react-router';

import useChat from './hooks/useChat'

const ChatRoomScreen = () => {

    
    const {roomId} = useParams();
    console.log('My props', roomId)
    const {messages, sendMessage} = useChat(roomId);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value)
    };
    const handleSendMessage = () => {
        sendMessage(newMessage)
        setNewMessage('')
    }
    return (
        <div className="chat__room__container">
      <h1 className="room_name">Room: {roomId}</h1>
      <div className="messages_container">
        <ol className="messages_list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message__item ${
                message.ownedByCurrentUser ? "my__message" : "received__message"
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new__message__input__field"
      />
      <button onClick={handleSendMessage} className="send__message__button">
        Send
        {/* change message for icon */}
      </button>
    </div>
    )
};


export default ChatRoomScreen;
