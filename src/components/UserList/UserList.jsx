import React from 'react';
import userData from './../../data/userData.json';
import './userList.css';
const UserList = () => {
    const users = userData;
    console.log(users)
    return (
        <div>
            <ul className='user-lists'>
                {
                users.map((user)=>{
                    return (
                        <li key={user.id} className="user-list">
                            <img src={user.picture}  alt={user.name}  />
                            <span className='username'>{user.username}</span>
                            
                           {/*  {user.online?<span className='online on'>online</span>:<span className='online off'>online</span>} */}

                            {user.online&&<span className='online on'>online</span>} 
                          
                        </li>
                    )
                  })
                }
               
            </ul>
        </div>
    );
};

export default UserList;
