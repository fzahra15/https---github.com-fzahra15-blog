import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginUser, registerUser } from '../../actions/MainActions';

function Button({ data, type, title }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function alertFunc(icon, text) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: text
        })
    }
    function loginRegisterBtn(e, data, type) {
        e.preventDefault()
        let btnPermision = true;
        for (const pr in data) {
            if (data[pr] == '') {
                btnPermision = false
            }
        }
        if (btnPermision) {
            if (type == 'register') {
                dispatch(registerUser(data))
                    .then(resp => {
                        if (resp == 'success') {
                            alertFunc('success', "Registered successfully!")
                        } else {
                            alertFunc('error', "Email alredy exist!")
                        }
                    })
            }else{
                dispatch(loginUser(data))
                .then(resp=>{
                    if(resp == 'success'){
                        navigate('/')
                    }else{
                        alertFunc('error', "Increditials are incorrect.")
                    }
                })
            }
        }else{
            alertFunc('error','All fields are required!')
        }

    }
    return (
        <button onClick={(e)=>loginRegisterBtn(e,data,type)} className="button login__submit" id="logBtn">
            <span className="button__text">{title}</span>
            <i className="button__icon fas fa-chevron-right"></i>
        </button>
    )
}

export default Button