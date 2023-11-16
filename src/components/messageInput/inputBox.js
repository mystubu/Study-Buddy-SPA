import React, { useState } from 'react';

const InputField = ({ placeholder }) => {

    const sendMessage = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/data');
                const result = await response.json();
                (result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    }

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input 
                className="w-full" 
                placeholder={placeholder} 
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default InputField;
