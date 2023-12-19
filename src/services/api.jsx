require('dotenv').config();

const BASE_URL = process.env.API_URL  // todo: set through env variable

const api = {
    PostMessage: async (userMessage) => {
        try {
            const response = await fetch(`${BASE_URL}/conversation/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to send messages');
            }

            // return response
            return await response.json();
        } catch (error) {
            console.error('Error fetching messages:', error.message);
            throw error;
        }
    },
};


export default api;