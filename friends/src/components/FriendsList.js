import React, { useState, useEffect } from 'react';
import FriendCard from './FriendsCard';
import api from '../utls/api';
import AddForm from './AddForm';

const FriendsList = (props) => {
    const [friends, setFriends] = useState([
        {
            name: '',
            age: '',
            email: ''
        }
    ])

    useEffect(()=>{
        api()
            .get('/api/friends')
            .then((res)=>{
                // console.log(res)
                setFriends(res.data)
            })
            .catch((err)=>{
                console.log(err.response)
            })
    },[])

    return ( 
        <div>
            <AddForm setFriends={setFriends} friends={friends}/>
            {friends.map((item, index)=>{
                return <FriendCard
                    key={index}
                    friend={item}
                />
            })}
        </div>
    );
};

export default FriendsList;