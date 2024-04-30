import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(res =>{
            if(res.data.Status=="Success"){
                navigate('/login')
            }else{
                alert("Error");
            }
        })
        .then(err=>console.log(err));
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear form fields after submission (optional)
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div class="form">
            <h2>Registration Form</h2>
            <div class="registration-form">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
