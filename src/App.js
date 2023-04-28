import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { getUserData } from './actions/MainActions'
import Header from './components/header_components/Header'
import BlogPage from './pages/BlogPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import MessagesPage from './pages/MessagesPage'
import UserData from './pages/UserData'

function App() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector(state => state.Data.user)

  useEffect(()=>{
    if(localStorage.getItem('blogToken')){
      dispatch(getUserData())
      .then(resp =>{
        if(resp == 'error'){
          navigate('/login')
          localStorage.removeItem('blogToken')
        }
      })
    }else{
      navigate('/login')
    }
  },[])

  return (
    <div>

    {
      user != ''? <Header />:''
    }

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MainPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/user-data/:id' element={<UserData />}/>
        <Route path='/messages/:id' element={<MessagesPage/>} />
      </Routes>

    </div>
  )
}

export default App