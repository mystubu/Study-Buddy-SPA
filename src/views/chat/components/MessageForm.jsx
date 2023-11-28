import React, { useState } from 'react';
import PropTypes from "prop-types";
import sendIcon from '../../../media/sendIcon.png'
const MessageForm = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='absolute flex bottom-0 w-full bg-background2 p-3'>
            <input
                className='bg-transparent w-5/6 text-secondary'
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">
                <img src={sendIcon} alt="Send Icon"/>
            </button>
        </form>
    );
};

MessageForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};

export default MessageForm;
