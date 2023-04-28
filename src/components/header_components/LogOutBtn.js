import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../actions/MainActions';

function LogOutBtn() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function logOut(){
    dispatch(logOutUser())
    .then(resp=>{
      navigate('/login')
    })
  }

  return (
    <button onClick={()=> logOut()} className='log_out_btn'>
        <i className="fa-solid fa-right-from-bracket"></i>
    </button>
  )
}

export default LogOutBtn