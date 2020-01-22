import React, { useState } from 'react';
import api from '../utls/api';

const SignUp = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        api()
            .post('api/login',credentials)
            .then(res=>{
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Sign Up</h2>
            username: Lambda School
            password: {'i<3Lambd4'}

            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='Username' value={credentials.username} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;