import React from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/MainActions';
import { changeStateValue } from '../../redux/MainReducer';


function EditProfile({ setEditVisible, user }) {

    let dispatch = useDispatch();
    function getInpValue(e) {
        dispatch(changeStateValue({
            name: e.target.name,
            value: e.target.value
        }))
    }

    function updateProfileBtn(e) {
        e.preventDefault()
        let btnVisible = true;
        for (const property in user) {
            if (user[property]) {
                btnVisible = false
            }
        }

        if (btnVisible) {
            dispatch(updateProfile(user))
                .then(resp => {
                    setEditVisible(false)
                })
        }


    }


    return (
        <div className="edit_profile_container">
            <form className="edit_profile_form">
                <div className="input_container">
                    <label htmlFor="name">Name</label>
                    <input id="name" value={user.name} name="user.name" onChange={(e) => getInpValue(e)} required type="text" />
                </div>
                <div className="input_container">
                    <label htmlFor="country">Country</label>
                    <input id="country" value={user.country} name="user.country" onChange={(e) => getInpValue(e)} required type="text" />
                </div>
                <div className="input_container">
                    <label htmlFor="city">City</label>
                    <input id="city" value={user.city} name="user.city" onChange={(e) => getInpValue(e)} required type="text" />
                </div>
                <div className="input_container">
                    <label htmlFor="birth_year">Birth Year</label>
                    <input id="birth_year" value={user.date_of_birth} name="user.date_of_birth" onChange={(e) => getInpValue(e)} required type="date" />
                </div>
                <div className="input_container">
                    <label htmlFor="email">Email</label>
                    <input id="email" value={user.email} name="user.email" onChange={(e) => getInpValue(e)} required type="Email" />
                </div>
                <div className="input_container">
                    <label htmlFor="password">Password</label>
                    <input id="password" value={user.password} name="user.password" onChange={(e) => getInpValue(e)} type="password" />
                </div>

            </form>
            <div className="input_container">
                <button onClick={(e) => updateProfileBtn(e)}>Save</button>
            </div>
        </div>
    )
}

export default EditProfile