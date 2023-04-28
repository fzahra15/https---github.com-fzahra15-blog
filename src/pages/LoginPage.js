import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../actions/MainActions';
import LoginCard from '../components/login_components/LoginCard';
import RegisterCard from '../components/login_components/RegisterCard';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem('blogToken')){
      dispatch(getUserData())
      .then(resp=>{
        if(resp == 'success'){
          navigate('/')
        }else{
          localStorage.removeItem('blogToken')
        }
      })
    }
  },[])

  return (
    <div className='container'>
      <LoginCard />
      <RegisterCard />
    </div>
  )
}

export default LoginPage