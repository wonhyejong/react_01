import React from 'react';
import userData from './../../data/userData.json';
const UserList = () => {
    const users = userData;
    console.log(users)
    return (
        <div>
            <ul>
                {
                users.map((user)=>{
                    return (
                        <li key={user.id}>
                            <img src={user.picture}  alt={user.name}  />
                            <span>{user.username}</span>
                            <span>online</span>
                        </li>
                    )
                  })
                }
               
            </ul>
        </div>
    );
};

export default UserList;
