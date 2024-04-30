import React, { useState } from 'react';
import './login.css';
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/home')
                }
            })

            .catch(err => console.log(err))
        // Clear form fields after submission (optional)
        setEmail('');
        setPassword('');
    };

    return (
        <div class="form">
            <h2>Login Form</h2>
            <div class="login-form">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
