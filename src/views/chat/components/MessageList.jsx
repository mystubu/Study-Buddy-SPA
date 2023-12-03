import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => {
    return (
        <ul className='overflow-auto max-h-screen'>
            {messages.map((message, index) => (
                <li
                    className={
                        message.name === 'User' 
                            ? 'border-2 border-border bg-msgBg rounded-md py-2 px-2 mt-2 text-secondary' 
                            : 'border-2 border-black bg-background2 rounded-md py-2 px-2 mt-2 text-white' 
                    }
                    key={index}
                >
                    {message.name}: {message.message}
                </li>
            ))}

        </ul>
    );
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default MessageList;