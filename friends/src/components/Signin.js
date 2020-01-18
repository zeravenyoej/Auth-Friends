import React, { useState } from 'react';

const Signin = (props) => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='Email' value={credentials.email} onChange={handleChange}/>
            <input type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>
        </form>
    );
};

export default Signin;