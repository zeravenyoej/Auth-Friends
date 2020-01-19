import React from 'react';

const FriendsCard = (props) => {
    return (
        <div>
            {/* Have button to delete friends*/}
            <h2>{props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h3>Email: {props.friend.email}</h3>
        </div>
    );
};

export default FriendsCard;