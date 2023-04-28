import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import Input from './Input'
import ScreenBackground from './ScreenBackground'

function RegisterCard() {
    const register = useSelector(state => state.Data.register)
    return (
        <div className="screen register_card">
            <div className="screen__content">
                <form className="login">
                    <Input
                        placeholder={'Name'}
                        name="register.name"
                        value={register.name}
                        type={'text'}
                    />
                    <Input
                        placeholder={'Date of Birth'}
                        name="register.date_of_birth"
                        value = {register.date_of_birth}
                        type={'date'}
                    />
                    <Input
                       placeholder={'Email'}
                       name="register.email"
                       value = {register.email}
                       type={'email'}
                     />
                    <Input
                       placeholder={'Password'}
                       name="register.password"
                       value = {register.password}
                       type={'password'}
                       icon={'fa-lock'}
                    />
                    <Button data={register} type="register" title="Sign In Now" />
                </form>
            </div>
            <ScreenBackground />
        </div>
    )
}

export default RegisterCard