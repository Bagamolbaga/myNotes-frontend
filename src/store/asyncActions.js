import {API} from '../axios'
import {
    createGroup,
    createNote,
    getGroups,
    getNotes,
    editNote,
    setUser,
    logoutAction,
    setAuthError
} from '../store/actions'
import jwtDecode from 'jwt-decode'

export const ASYNC_CREATE_NOTE = 'ASYNC_CREATE_NOTE'


export const createAsyncNote = (data) => {
    return async (dispatch, getState) => {
        let {user, selectedGroup} = getState()
        let res = await API.post(`api/note`,{
            title: data.title,
            text: data.text,
            user_id: user.id,
            group_id: selectedGroup
        })
        if(res.status === 200) {
            dispatch(createNote(res.data))
        }
        console.log(res)
    }
}

export const createAsyncGroup = (title) => {
    return async (dispatch, getState) => {
        let {user} = getState()
        let res = await API.post(`api/group`,{
            title: title,
            user_id: user.id
        })
        if(res.status === 200) {
            dispatch(createGroup(res.data))
        }
        console.log(res)
    }
}

export const getAsyncGroup = () => {
    return async (dispatch, getState) => {
        let {user} = getState()
        let res = await API.get(`api/group`,{
            params: {user_id: user.id}
        })
        if(res.status === 200) {
            dispatch(getGroups(res.data))
        }
        //console.log(res)
    }
}

export const getAsyncNotes = () => {
    return async (dispatch, getState) => {
        let {user} = getState()
        let res = await API.get(`api/note`,{
            params: {user_id: user.id}
        })
        if(res.status === 200) {
            dispatch(getNotes(res.data))
        }
        //console.log(res)
    }
}

export const editAsyncNotes = (data) => {
    return async (dispatch, getState) => {
        let {selectNoteId} = getState()
        let res = await API.put(`api/note`, {
            note_id: selectNoteId,
            newTitle: data.title,
            newText: data.text
        })
        if(res.status === 200) {
            dispatch(editNote({title: data.title, text: data.text}))
        }
        console.log(res.data)
    }
}

export const registration = (name, password) => {
    return async (dispatch, getState) => {
        let res = await API.post(`api/user/registration`,{
            name,
            password
        })
        if(!res.data.token) {
            return dispatch(setAuthError(res.data.message))
        }

        if(res.data.token) {
            localStorage.setItem('my-notes-token', res.data.token)
            dispatch(setUser(jwtDecode(res.data.token)))
            dispatch(setAuthError(''))
            console.log(jwtDecode(res.data.token))
        }
    }
}

export const login = (name, password) => {
    return async (dispatch, getState) => {
        let res = await API.post(`api/user/login`,{
            name,
            password
        })
        if(!res.data.token) {
            return dispatch(setAuthError(res.data.message))
        }

        if(res.data.token) {
            localStorage.setItem('my-notes-token', res.data.token)
            dispatch(setUser(jwtDecode(res.data.token)))
            dispatch(setAuthError(''))
            console.log(jwtDecode(res.data.token))
        }
    }
}

export const authCheck = () => {
    return async dispatch => {
        let res = await API.get(`api/user/auth`)
        if(!res.data.token) {
            return
        }

        if(res.data.token) {
            localStorage.setItem('my-notes-token', res.data.token)
            dispatch(setUser(jwtDecode(res.data.token)))
            console.log(jwtDecode(res.data.token))
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.setItem('my-notes-token', null)
        dispatch(logoutAction())
    }
}