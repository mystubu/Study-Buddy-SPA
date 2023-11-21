import React from 'react';
import PropTypes from "prop-types";

const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message.name}: {message.message}</li>
            ))}
        </ul>
    );
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default MessageList;