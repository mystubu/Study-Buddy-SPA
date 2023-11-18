const BASE_URL = 'http://localhost:8080';

const api = {
    // GET request
    PostMessage: async (userMessage) => {
        try {
            const response = await fetch(`${BASE_URL}/conversation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to send messages');
            }

            const responseData = await response.json();

            // return response
            return responseData;
        } catch (error) {
            console.error('Error fetching messages:', error.message);
            throw error;
        }
    },
}

export default api;