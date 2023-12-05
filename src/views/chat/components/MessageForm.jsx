import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { IoMdSend } from "react-icons/io";

export default function MessageForm({ onSendMessage }) {
    const [message, setMessage, setFileName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex bg-slate-400 pt-6 pb-4 rounded-t-[50px]">
           <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full ml-[60px] mr-[10px] p-1 rounded-lg"
            />
            <button className="mr-[60px]" type="submit">
                <IoMdSend />
            </button>
         </form>
    );
}

// Add prop type validation for onSendMessage
MessageForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};


// const MessageForm = ({ onSendMessage }) => {
//     const [message, setMessage] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (message.trim() !== '') {
//             onSendMessage(message);
//             setMessage('');
//         }
//     };
//
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Type your message..."
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// };
//
// // Add prop type validation for onSendMessage
// MessageForm.propTypes = {
//     onSendMessage: PropTypes.func.isRequired,
// };
//
// export default MessageForm;
