import React, { useState } from 'react';
import loginRequest from '../../../services/login';

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await loginRequest(email, password);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Wachtwoord</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Login</button>
        </form>
    );
};

export default LoginContainer;
