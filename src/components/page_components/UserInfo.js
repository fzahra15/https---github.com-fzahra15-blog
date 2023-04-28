import React from 'react'

function UserInfo({user,setEditVisible,btn=true}) {
    return (
        <div className="profile_page_header">
            <div className="row">
                <img className="profile_img" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />

                <ul className="profile_details column">
                    <li>Name: {user.name}</li>
                    <li>Country:  {user.country}</li>
                    <li>City: {user.city}</li>
                    <li>Birth Year: {user.date_of_birth}</li>
                    <li>Email: {user.email}</li>
                    {
                    btn?  <button  onClick={()=>setEditVisible(true)} >change</button>:null
                } 
                </ul>
              

            </div>
        </div>
    )
}

export default UserInfo