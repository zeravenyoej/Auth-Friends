import React, { useState, useEffect } from 'react';
import api from '../utls/api';
import FriendsCard from './FriendsCard';
import AddForm from './AddForm';

const FriendsList = (props) => {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        api()
            .get('/api/friends')
            .then(res=>{
                setFriends(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    ,[])

    return (
        <div>
            <AddForm setFriends={setFriends} friends={friends}/>
            {friends.map((item)=>{
                return <FriendsCard key={item.id} friend={item} friends={friends} setFriends={setFriends}/>
            })}
        </div>
    );
};

export default FriendsList;