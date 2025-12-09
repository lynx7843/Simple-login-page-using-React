import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Re-using the CSS from Login

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Notice the endpoint is now /register
            const response = await axios.post('http://localhost:8080/api/register', {
                username: username,
                password: password
            });
            setMessage(response.data); 
        } catch (error) {
            setMessage("Error connecting to server");
        }
    };

    return (
        <div className="login-container">
            <h2>Register New User</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" style={{backgroundColor: '#007bff'}}>Register</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Register;