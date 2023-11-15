import React from 'react'
import MessageList from './messageList';

const MessageView = ({ targetChat }) => {
    const messages = [
        { text: 'Hello there!', sender: 'Studybuddy' },
        { text: 'How are you?', sender: 'Bob' },
      ];

    return(
        <div className="App">
            <div className="p-6">
            <MessageList messages={messages} />
        </div>
        </div>
    );
};

export default MessageView