const BASE_URL = 'http://localhost:8080';

const loginRequest = async () => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const data = await response.json(); // Parse the JSON response body
            const token = data.token; 
            console.log(token);

            // Store the token in localStorage
            localStorage.setItem('token', token); 

            // Handle success routing
        } else {
            const errorData = await response.json(); // Parse error details if present
            console.error(errorData.error); // Log or display the error message
        }
    } catch (error) {
        // Handle network errors
        console.error(error.message);
    }
};

export default loginRequest;
