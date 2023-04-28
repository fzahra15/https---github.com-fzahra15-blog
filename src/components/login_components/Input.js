import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStateValue } from '../../redux/MainReducer'

function Input({placeholder,name,value,icon='fa-lock',type="text"}) {

    const dispatch = useDispatch();

    function changeInpValue(e){
        dispatch(changeStateValue({
            name: e.target.name,
            value: e.target.value
        }))
    }


    return (
        <div className="login__field">
            <i className={`login_class fas ${icon}`}></i>
            <input onChange={(e)=>changeInpValue(e)} name={name} type={type} id="regName" value={value} className="login__input" placeholder={placeholder}/>
        </div>
    )
}

export default Input