import React from 'react';
import PropTypes from 'prop-types';

export default function MessageList({ messages }) {

    return (
        <ul className='overflow-auto max-h-screen'> {messages.map((message, index) => (
<<<<<<< HEAD
                <li
                    className={
                        message.name === 'User'
                            ? 'border-border bg-msgBg rounded-md py-2 px-2 mt-2 text-white'
                            : 'border-black bg-background2 rounded-md py-2 px-2 mt-2 text-white'
                    }
                    key={index}
                >
                    {message.name}: {message.message}
                </li>
            ))}
=======
            <li
                className={
                    message.name === 'User'
                        ? 'border-2 border-border bg-sky-800 rounded-md py-2 px-2 mt-2 text-black'
                        : 'border-2 border-black bg-emerald-800 rounded-md py-2 px-2 mt-2 text-white'
                }
                key={index}
            >
                {message.name}: {message.message}
            </li>
        ))}
>>>>>>> fae7de41770198b430f97d556f21032111b61f4d

        </ul>
    );
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
};

