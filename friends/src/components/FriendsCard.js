import React from 'react';

const FriendsCard = ({friend}) => {
    return (
        <div>
            Name: {friend.name}
            Age: {friend.age}
            Email: {friend.email}
        </div>
    );
};

export default FriendsCard;