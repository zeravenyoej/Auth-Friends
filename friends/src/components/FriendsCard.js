import React from 'react';
import {Link} from 'react-router-dom';
import api from '../utls/api';

const FriendsCard = ({friend, setFriends, friends}) => {

    const handleDelete = (id) =>{
        api()
            .delete(`/api/friends/${id}`)
            .then(res=>{
                console.log('deleted: ', res.data)
                setFriends(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            Name: {friend.name}
            Age: {friend.age}
            Email: {friend.email}
            <button onClick={()=>{handleDelete(friend.id)}}>Delete</button>
            <Link to={`/update/${friend.id}`}><button>Edit</button></Link>
        </div>
    );
};

export default FriendsCard;