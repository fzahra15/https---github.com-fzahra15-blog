import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className="header_main_container justfy_center">
            <NavLink to={'/'} ><i className="fas fa-home"></i></NavLink>
            <NavLink to={'/profile'}><i className="fas fa-user"></i></NavLink>
            <NavLink to={'/blog'}><i className="fas fa-blog"></i></NavLink>
            <NavLink to={'/messages/empty'}><i className="fas fa-message"></i></NavLink>
        </div>
    )
}

export default Nav