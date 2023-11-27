import React from 'react';
import ChatContainer from './containers/ChatContainer';

const Chat = () => {
    return (
        <div className="col-span-7 flex flex-col justify-between">
            <div className="p-20">
                <h2>Chat Room</h2>
            </div>

            <ChatContainer />
        </div>
    );
};

export default Chat;