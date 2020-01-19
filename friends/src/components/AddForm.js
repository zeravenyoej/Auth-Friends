import React, { useState } from 'react';
import api from '../utls/api';

const AddForm = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    });

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post('/api/friends', newFriend)
            .then((res)=>{
                props.setFriends([...props.friends, newFriend])
                console.log(res.data)
                setNewFriend({
                    name: '',
                    age: '',
                    email: '',
                    id: Date.now()
                })
            })
            .catch((err)=>{
                console.log(err.response)
            })
    };
    return (
        <form>
            <input type='text' name='name' placeholder='Name' value={newFriend.name} onChange={handleChange}/>
            <input type='email' name='email' placeholder='Email' value={newFriend.email} onChange={handleChange}/>
            <input type='text' name='age' placeholder='Age' value={newFriend.age} onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Friend</button>
        </form>
    );
};

export default AddForm;