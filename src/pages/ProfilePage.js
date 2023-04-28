import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import EditProfile from '../components/page_components/EditProfile'
import UserInfo from '../components/page_components/UserInfo'

function ProfilePage() {
  const user = useSelector(state => state.Data.user);

  const [editVisible, setEditVisible] = useState(false);
  return (
    <div className='container'>

      <UserInfo
        user={user}
        setEditVisible={setEditVisible}
      />
      {

        editVisible ?
          <EditProfile
            user={user}
            setEditVisible={setEditVisible}
          /> : null
      }
    </div>
  )
}

export default ProfilePage