import React, {useState} from 'react'
import MessageList from './messages/messageList';
import InputField from './messageInput/inputBox';


const MessageView = ({ targetChat }) => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return(
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <MessageList messages={messages} />
              </div>
              <div className="bg-white p-2">
                <InputField placeholder="Typ een bericht"/>
            </div>
        </div>
    );
};

export default MessageView