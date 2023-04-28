import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getMessagesUserList } from '../../actions/MainActions';

function UserList() {
    const dispatch = useDispatch();
    const messagesUsers = useSelector(state => state.Data.messagesUsers);

    useEffect(()=>{
        dispatch(getMessagesUserList())
    }, []);
   
  return (
    <div className='messages_userList'>
        <ul>
            {
                messagesUsers.map((user, i)=>{
                    return(
                        <li key={i}><Link to={`/messages/${user.id}`}>{user.name}</Link></li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UserList