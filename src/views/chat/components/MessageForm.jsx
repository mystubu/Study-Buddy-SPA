import React, { useState } from 'react';
import PropTypes from 'prop-types';
import sendIcon from '../../../media/sendIcon.png';
import { GrAttachment } from "react-icons/gr";

const MessageForm = ({ onSendMessage }) => {
    const [message, setMessage, setFileName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    };
    
    const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
    };

    return (
        <form onSubmit={handleSubmit} className='flex justify-between space-x-5 w-full bg-msgBg px-10 p-3 rounded-t-3xl'>
            <div className='bg-white rounded-full p-5'>
                <input type='file' id='file-upload' className='hidden' onChange={handleFileChange}/>
                <label htmlFor='file-upload'>
                    <GrAttachment/>
                </label>
            </div>

            
            <input
                className='bg-white w-full rounded-md w-5/6 text-secondary'
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
