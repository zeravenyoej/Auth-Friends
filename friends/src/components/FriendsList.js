import React, { useState } from 'react';
import FriendCard from './FriendsCard';

const FriendsList = (props) => {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='Name' value={formValues.name} onChange={handleChange}/>
                <input type='email' name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
                <input type='text' name='age' placeholder='Age' value={formValues.age} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add Friend</button>
            </form>

            <FriendCard/>
        </div>
    );
};

export default FriendsList;