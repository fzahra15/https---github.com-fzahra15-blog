import axios from "axios";
import { main_api } from "../MAIN_API";
import { changeStateValue } from "../redux/MainReducer";

export const registerUser = (data) => async dispatch => {
    return await axios.post(`${main_api}/register`, data)
        .then(resp => {
            return 'success';
        }).catch(err => {
            return 'error';
        })
}

export const loginUser = (data) => async dispatch => {
    return await axios.post(`${main_api}/login`, data)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'user',
                value: resp.data.user
            }))
            localStorage.setItem('blogToken', resp.data.token)
            return 'success'
        }).catch(err => {
            return 'error';
        })
}


export const getUserData = () => async dispatch => {
    return await axios.get(`${main_api}/login-user`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(`blogToken`)}`
        }
    }).then(resp => {
        dispatch(changeStateValue({
            name: 'user',
            value: resp.data
        }))

        return 'success'

    }).catch(err => {
        console.log(err);
        return 'error'
    })

}


export const logOutUser = () => async dispatch => {
    return await axios.post(`${main_api}/logOut`, {}, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    })
        .then(resp => {
            dispatch(changeStateValue({
                name: 'user',
                value: ''
            }))
            localStorage.removeItem('blogToken')
            return 'success';
        }).catch(err => {
            return 'error';
        })
}

export const updateProfile = (data) => async dispatch => {
    return await axios.put(`${main_api}/user/${data.id}`, data, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp => {
        return 'success';
    }).catch(err => {
        return 'err';
    })
}

export const getSuggestedUser = () => async dispatch => {
    return await axios.get(`${main_api}/friends?type=all`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp => {
        dispatch(changeStateValue({
            name: "suggestedUser",
            value: resp.data
        }))
        return 'success'
    }).catch(err => {
        console.log(err);
        return 'error'
    })
}


export const shareBlogAction = (data) => async dispatch => {
    return await axios.post(`${main_api}/blog`, data, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp => {
        return 'success'
    }).catch(err => {
        return 'error'
    })
}

export const getBlogs = (type, user_id = '') => async dispatch => {
    return await axios.get(`${main_api}/blog?query_type=${type}&user_id=${user_id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp => {
        dispatch(changeStateValue({
            name: 'blogs',
            value: resp.data
        }))

        return 'success'
    }).catch(err => {
        console.log(err);
        return 'error'
    })
}

export const likeBlogAction = (data) => async dispatch => {
    return await axios.post(`${main_api}/like`, data, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    })
        .then(resp => {
            return 'success';
        }).catch(err => {
            return 'error';
        })
}


export const insertComment = (data) => async dispatch => {
    return await axios.post(`${main_api}/comment`,data,{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem('blogToken')}`,
        }
    })
    .then(resp =>{
        return 'success';
    }).catch(err =>{
        return 'error';
    })
}

export const getMessagesUserList = () => async dispatch =>{
    return await axios.get(`${main_api}/messages?query_type=user_list`,{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp =>{
        dispatch(changeStateValue({
            name:"messagesUsers",
            value: resp.data
        }))
        return 'success'
    }).catch(err =>{
        console.log(err);
        return 'error'
    })
}

export const getMessagesBox = (id) => async dispatch => {
    return await axios.get(`${main_api}/messages?query_type=messages&user_id=${id}&page=1`,{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp =>{
        dispatch(changeStateValue({
            name:'messages',
            value: resp.data
        }))

        return 'success';
    }).catch(err =>{
        console.log(err);
        return 'success';
    })

}

export const sendMessage = (data)=> async dispatch => {
    return await axios.post(`${main_api}/messages`, data,{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    })
    .then(resp=>{
       
        
        return 'success';
    }).catch(err=>{
        return 'error';
    })
}

export const getUserInfo = (id) => async dispatch => {
    return await axios.get(`${main_api}/user/${id}`, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('blogToken')}`,
        }
    }).then(resp=>{
        dispatch(changeStateValue({
            name: 'userData',
            value: resp.data
        }))

        return 'success'
    }).catch(err=>{
        console.log(err)
        return 'error'
    })
}