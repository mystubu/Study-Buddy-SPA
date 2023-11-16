import React from 'react'
import MessageList from './messages/messageList';
import InputField from './messageInput/inputBox';
import messages from '../services/messaging'

const MessageView = ({ targetChat }) => {
    const messages = [
        { text: 'Hello there!', sender: 'Studybuddy' },
        { text: 'How are you?', sender: 'Bob' },
      ];

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