const BASE_URL = 'http://localhost:8080';

const registerRequest = async () => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            //
        } else {
            const errorData = await response.json(); // Parse error details if present
            console.error(errorData.error); // Log or display the error message
        }
    } catch (error) {
        // Handle network errors
        console.error(error.message);
    }
};

// function setCookie(name, value, daysToLive) {
//     // Encode value in order to escape semicolons, commas, and whitespace
//     const cookieValue = encodeURIComponent(value);

//     let expires = "";
//     if (daysToLive) {
//         const date = new Date();
//         date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + cookieValue + expires + "; path=/";
// }

export default registerRequest;
