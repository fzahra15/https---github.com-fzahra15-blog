import React from 'react'
import Logo from './Logo'
import LogOutBtn from './LogOutBtn'
import Name from './Name'
import Nav from './Nav'

function Header() {
    return (
        <header className="row">
            <Logo/>
            <Nav/>
            <div style={{display: 'flex',gap: '20px' , alignItems:'center'}} >
                <Name />
                <LogOutBtn/>
            </div>
           
        </header>

    )
}

export default Header