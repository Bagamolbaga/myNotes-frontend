import axios from 'axios'
import {createNote, getGroups, getNotes} from '../store/actions'

export const ASYNC_CREATE_NOTE = 'ASYNC_CREATE_NOTE'


export const createAsyncNote = (data) => {
    return async (dispatch) => {
        let res = await axios.post(`api/note`,{
            title: data.title,
            text: data.text,
            user_id: data.user_id,
            group_id: data.group_id
        })
        if(res.status === 200) {
            dispatch(createNote({
                title: data.title,
                text: data.text
            }))
        }
        console.log(res)
    }
}

export const getAsyncGroup = () => {
    return async (dispatch, getState) => {
        let {user} = getState()
        let res = await axios.get(`api/group`,{
            params: {user_id: user.id}
        })
        if(res.status === 200) {
            dispatch(getGroups(res.data))
        }
        console.log(res)
    }
}

export const getAsyncNotes = () => {
    return async (dispatch, getState) => {
        let {user} = getState()
        let res = await axios.get(`api/note`,{
            params: {user_id: user.id}
        })
        if(res.status === 200) {
            dispatch(getNotes(res.data))
        }
        console.log(res)
    }
}