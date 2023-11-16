import React, { useState } from 'react';
import sendMessage from '../../services/messaging';

const InputField = ({ placeholder }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        sendMessage(inputValue);
    };

    return (
        <div>
            <input 
                className="w-full" 
                placeholder={placeholder} 
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Send</button>
        </div>
    );
};

export default InputField;
