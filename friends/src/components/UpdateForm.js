import React, { useState, useEffect } from 'react';
import api from '../utls/api';

const UpdateForm = (props) => {

    const [updatedFriend, setUpdatedFriend] = useState({
        name: '',
        id: Date.now(),
        email: '',
        age: ''
    });

    useEffect(()=>{
        api()
        .get(`/api/friends/${props.match.params.id}`)
        .then(res=>{
            setUpdatedFriend(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[props.match.params.id])

    const handleChange = e => {
        setUpdatedFriend({
            ...updatedFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        api()
            .put(`/api/friends/${updatedFriend.id}`, updatedFriend)
            .then(res=>{
                props.history.push('/friends')
            })
            .catch(err=>{
                console.log(err)
            })
    };

    return (
        <div>
        <h1>Update Friend</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={updatedFriend.name} placeholder='Name' onChange={handleChange}/>
            <input type='text' name='age' value={updatedFriend.age} placeholder='Age' onChange={handleChange}/>
            <input type='email' name='email' value={updatedFriend.email} placeholder='Email' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
    );
};

export default UpdateForm;