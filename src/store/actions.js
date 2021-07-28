export const GET_NOTES = 'GET_NOTES'
export const CREATE_NOTE = 'CREATE_NOTE'
export const GET_GROUP = 'GET_GROUP'
export const CREATE_GROUP = 'CREATE_GROUP'
export const SHOW_ALL_NOTES = 'SHOW_ALL_NOTES'
export const SHOW_CREATE_NOTE_FORM = 'SHOW_CREATE_NOTE_FORM'
export const SELECT_ACTIVE_GROUP = 'SELECT_ACTIVE_GROUP'
export const SHOW_ACTIVE_GROUP = 'SHOW_ACTIVE_GROUP'
export const SELECT_NOTE = 'SELECT_NOTE'
export const EDIT_SELECT_NOTE = 'EDIT_SELECT_NOTE'
export const SHOW_EDIT_NOTE_FORM = 'SHOW_EDIT_NOTE_FORM'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'
export const SET_EROR = 'SET_EROR'
export const GO_BACK = 'GO_BACK'
export const DELETE_NOTE = 'DELETE_NOTE'

export const createNote = (value) => ({
  type: CREATE_NOTE,
  payload: value,
})

export const getGroups = (value) => ({
  type: GET_GROUP,
  payload: value,
})

export const getNotes = (value) => ({
  type: GET_NOTES,
  payload: value,
})

export const createGroup = (value) => ({
  type: CREATE_GROUP,
  payload: value,
})

export const showAllNote = () => ({
  type: SHOW_ALL_NOTES,
})

export const showCreateNoteForm = () => ({
  type: SHOW_CREATE_NOTE_FORM,
})

export const showEditForm = () => ({
  type: SHOW_EDIT_NOTE_FORM,
})

export const selectActiveGroup = (value) => ({
  type: SELECT_ACTIVE_GROUP,
  payload: value,
})

export const showActiveGroup = (value) => ({
  type: SHOW_ACTIVE_GROUP,
  payload: value,
})

export const selectNote = (id) => ({
  type: SELECT_NOTE,
  payload: id,
})

export const editNote = (value) => ({
  type: EDIT_SELECT_NOTE,
  payload: value,
})

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
})

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
})

export const logoutAction = () => ({
  type: LOGOUT,
})

export const setAuthError = (value) => ({
  type: SET_EROR,
  payload: value,
})

export const goBack = () => ({
  type: GO_BACK,
})
