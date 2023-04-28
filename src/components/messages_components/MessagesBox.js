// import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMessagesBox, getMessagesUserList, getUserInfo, sendMessage } from '../../actions/MainActions';

function MessagesBox() {
    const params = useParams();
    const dispatch = useDispatch();
    const messages = useSelector(state => state.Data.messages);
    const user = useSelector(state => state.Data.user);
    const userData = useSelector(state => state.Data.userData);
    const [message, setMessage] = useState('');

    useEffect(()=>{
        if(params.id != 'empty'){
            dispatch(getMessagesBox(params.id))
            dispatch(getUserInfo(params.id))
        }
    }, [params.id]);

    function sendMsgBtn(){
        if(message != ''){
            const newMsg = {
                to_id: params.id,
                messages: message,
                replied_id: ''
            }
            dispatch(sendMessage(newMsg))
            .then(resp=>{
                setMessage('')
                dispatch(getMessagesBox(params.id))
                dispatch(getMessagesUserList())
            })
        }
    }
    console.log(messages)
  return (
    <div className='messages_box_container'>
        <div className='messages_box_header'>
            <Link to={`/user-data/${userData.id}`}>{userData.name}</Link>
        </div>

        <div className='messages_box_body'>
            {
                messages.map((message, i)=>{
                    if(message.from_id == user.id){
                        return(
                            <div key={i} className='messages_from_container'>
                                <p>{message.messages}
                                    <span></span>
                                </p>
                            </div>
                        )
                    }else{
                        return(
                            <div key={i} className='messages_to_container'>
                                <p>{message.messages}
                                    <span></span>
                                </p>
                            </div>
                        )
                    }
                })
            }
        </div>

        <div className='messages_box_footer'>
            <input value={message} onChange={(e)=>setMessage(e.target.value)} type={'text'} />
            <button onClick={()=>sendMsgBtn()}>
                <i className='fas fa-paper-plane'></i>
            </button>
        </div>

    </div>
  )
}

export default MessagesBox