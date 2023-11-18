import React, { useState } from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import api from '../services/api';

const ChatContainer = () => {
    const [conversation, setConversation] = useState([]);

    const sendMessage = (userMessage) => {
        api.PostMessage(userMessage).then(response => {
            const newUserMessage = response.user_message;
            const chatBotMessage = response.message;

            setConversation(prevConversation => [
                ...prevConversation,
                {
                    entity: 'user',
                    message: newUserMessage
                },
                {
                    entity: 'chatbot',
                    message: chatBotMessage
                }
            ]);
        });
    };

    return (
        <div>
            <MessageList messages={conversation} />
            <MessageForm onSendMessage={sendMessage} />
        </div>
    );
};

export default ChatContainer;