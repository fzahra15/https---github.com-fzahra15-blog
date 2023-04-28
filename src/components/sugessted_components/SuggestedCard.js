import React from 'react'
import { Link } from 'react-router-dom'

function SuggestedCard({user}) {
  return (
    <div className='suggested_card'>
        <img src=''/>
        <Link to={`/user-data/${user.id}`}>{user.name}</Link>
        <Link to={`/messages/${user.id}`}>Send Messages</Link>
    </div>
  )
}

export default SuggestedCard