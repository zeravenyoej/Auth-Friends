import React, { useEffect } from 'react';
import FriendCard from './FriendsCard';
import api from '../utls/api';
import AddForm from './AddForm';

const FriendsList = (props) => {
    
    useEffect(()=>{

    },[])

    return ( 
        <div>
            <AddForm/>
            <FriendCard/>
        </div>
    );
};

export default FriendsList;