import React, { useState } from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import TypingAnimation from '../components/TypingAnimation'; // Import the TypingAnimation component
import api from '../../../services/api';

const ChatContainer = () => {
    const [conversation, setConversation] = useState([]);
    const [isTyping, setIsTyping] = useState(false); // Add a state variable to track typing animation

    const sendMessage = (userMessage) => {
        setConversation(prevConversation => [
            ...prevConversation,
            {
                entity: 'user',
                name: 'User',
                message: userMessage
            }
        ]);

        setIsTyping(true); // Show typing animation

        api.PostMessage(userMessage).then(response => {
            const botResponse = response.message;

            setConversation(prevConversation => [
                ...prevConversation,
                {
                    entity: 'bot',
                    name: 'Study buddy',
                    message: botResponse
                }
            ]);

            setIsTyping(false); // Hide typing animation after receiving response
        });
    };

    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
            <MessageList messages={conversation}/>
            {isTyping && <TypingAnimation />} {/* Render TypingAnimation component when isTyping is true */}
          </div>
          
          
            <MessageForm onSendMessage={sendMessage}/>
        </div>
    );
};

export default ChatContainer;
