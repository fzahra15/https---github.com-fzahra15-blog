import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserInfo } from '../actions/MainActions';
import UserInfo from '../components/page_components/UserInfo';
import BlogContainer from '../components/page_components/BlogContainer';

function UserData() {
    const params = useParams();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.Data.userData)
    useEffect(()=>{
        dispatch(getUserInfo(params.id))
    },[])
  return (
    <div className='container'>
        <UserInfo btn={false} user={userData} />
        <BlogContainer />
    </div>
  )
}

export default UserData