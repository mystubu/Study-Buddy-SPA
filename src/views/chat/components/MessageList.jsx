import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function MessageList({ messages }) {

    return (
        <ul> {messages.map((message, index) => (
                <li key={index}>{message.name}: {message.message}</li>
            ))}
        </ul>
    );
}

// Add prop type validation for onSendMessage
MessageList.propTypes = {
    messages: PropTypes.func.isRequired,
};
