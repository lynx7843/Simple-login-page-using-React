import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const Login = ({ onSwitch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username: username,
                password: password
            });
            setMessage(response.data); 
        } catch (error) {
            setMessage("Error connecting to server");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="auth-button">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            
            <div className="switch-prompt">
                Don't have an account? 
                <button className="switch-btn" onClick={onSwitch}>Register here</button>
            </div>
        </div>
    );
};

export default Login;