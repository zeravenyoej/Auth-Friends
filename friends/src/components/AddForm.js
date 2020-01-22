import React, { useState } from 'react';
import api from '../utls/api';

const AddForm = (props) => {

    const[newFriend, setNewFriend] = useState({
        name: '',
        id: Date.now(),
        email: '',
        age: ''
    })

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        api()
            .post('/api/friends', newFriend)
            .then(res=>{
                props.setFriends([...props.friends, newFriend])
                setNewFriend({
                    name: '',
                    id: Date.now(),
                    email: '',
                    age: ''
                })
            })
            .catch(err=>{
                console.log(err)
            })
    };

    return (
        <div>
            Add New Friend
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={newFriend.name} placeholder='Name' onChange={handleChange}/>
                <input type='text' name='age' value={newFriend.age} placeholder='Age' onChange={handleChange}/>
                <input type='email' name='email' value={newFriend.email} placeholder='Email' onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddForm;