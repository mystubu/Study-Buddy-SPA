let messages = [
    { text: 'Hello there!', sender: 'Studybuddy' },
    { text: 'How are you?', sender: 'Bob' },
];

const sendMessage = (message) => {
    console.log(message);
    // Add message to message array
    messages.push({ text: message, sender: 'User' });
    console.log(messages)
    // Post message to backend
    // Wait for answer
    // Add answer to message list
};

export default sendMessage;
export { messages };
