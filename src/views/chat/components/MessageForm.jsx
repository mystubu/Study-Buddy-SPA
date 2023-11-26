import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export default function MessageForm({ onSendMessage }) {
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
           <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
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
