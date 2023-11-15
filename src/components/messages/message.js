import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text, sender }) => {
  const bgColorClass = (sender) => {
    if (sender === 'Studybuddy') {
      return 'bg-blue-100'; // Blue background for Alice
    } else if (sender === 'User') {
      return 'bg-green-100'; // Green background for Bob
    } else {
      return 'bg-gray-100'; // Default background for other senders
    }
  };

  return (
    <div className={`p-4 max-w-md mx-auto ${bgColorClass(sender)} rounded-lg shadow-md`}>
      <p className="text-gray-800">{text}</p>
      <p className="text-gray-600 text-sm mt-2">{sender}</p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
};

export default Message;
