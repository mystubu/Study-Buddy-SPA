import React from 'react';
import ChatContainer from './containers/ChatContainer';

const Chat = () => {
    return (
        <div className = "relative col-span-7 bg-background py-10 px-8">
            <h2 className="text-4xl">Chat Room</h2>
            <ChatContainer/>
        </div>
    );
};

export default Chat;