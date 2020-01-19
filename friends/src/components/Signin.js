import React, { useState } from 'react';
import api from '../utls/api';

const Signin = (props) => {
    //const [error, setError] = useState()
    const [credentials, setCredentials] = useState({
        username: '',
        password: '', 
    });

    const handleChange = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post('/api/login', credentials)
            .then((res)=>{
                // console.log('from submit: ', res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
            })
            .catch((err)=>{
                console.log(err.response)
                // setError(err.response.data)
            })
    }

    return (
        <div>
            <h3>For reference: </h3>
            <p>username: Lambda School</p>
            <p>password: {'i<3Lambd4'}</p>
            <form>
                <input type='username' name='username' placeholder='username' value={credentials.username} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' value={credentials.password} onChange={handleChange}/>
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signin;