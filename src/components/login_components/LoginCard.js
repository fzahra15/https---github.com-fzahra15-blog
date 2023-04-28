import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import Input from './Input'
import ScreenBackground from './ScreenBackground'

function LoginCard() {
    const login = useSelector(state => state.Data.login)
    return (
        <div className="screen register_card">
            <div className="screen__content">
                <form className="login">
                    <Input
                    
                        placeholder={"Email"}
                        name="login.username"
                        value={login.username}
                        type={'email'}
                    />
                    <Input
                       placeholder={"Password"}
                       name="login.password"
                       value={login.password}
                       icon={'fa-lock'}
                       type={'password'}
                    />
                    <Button  data={login} type="login" title={'Log In Now'}/>
                </form>
            </div>
            <ScreenBackground/>
        </div>
    )
}

export default LoginCard