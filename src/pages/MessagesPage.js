import React from 'react'
import UserList from '../components/messages_components/UserList'
import MessagesBox from '../components/messages_components/MessagesBox'

function MessagesPage() {
  return (
   <section>
        <div className='container messages_page_component'>

            <UserList />
            <MessagesBox />

        </div>
   </section>
  )
}

export default MessagesPage