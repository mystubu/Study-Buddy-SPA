import React, {useState} from 'react';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import api from '../../../services/api';

const ChatContainer = () => {
    const [conversation, setConversation] = useState([]);

    const sendMessage = (userMessage) => {
        setConversation(prevConversation => [
            ...prevConversation,
            {
                entity: 'user',
                name: 'User',
                message: userMessage
            }
        ]);

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
        });
    };

    return (
        <div className='flex flex-col justify-between h-full'>
            <MessageList messages={conversation}/>
            <MessageForm onSendMessage={sendMessage}/>
        </div>
    );
};

export default ChatContainer;