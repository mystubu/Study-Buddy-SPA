import React from 'react';
import ChatContainer from './containers/ChatContainer';

const Chat = () => {
    return (
        <div className="col-span-7 bg-slate-100">
            <h2>Chat Room</h2>
            <ChatContainer />
        </div>
    );
};

export default Chat;