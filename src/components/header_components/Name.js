import React from 'react'
import { useSelector } from 'react-redux'

function Name() {
    const user = useSelector(state => state.Data.user);
    return (
        <p className="user_name">
            {user.name}
        </p>
    )
}

export default Name