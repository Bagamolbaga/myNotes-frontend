import {
    GET_NOTES,
    CREATE_NOTE,
    GET_GROUP,
    CREATE_GROUP,
    SHOW_ALL_NOTES,
    SHOW_CREATE_NOTE_FORM,
    SELECT_ACTIVE_GROUP,
    SHOW_ACTIVE_GROUP,
    SELECT_NOTE,
    EDIT_SELECT_NOTE,
    SHOW_EDIT_NOTE_FORM,
    SET_USER,
    LOGOUT,
    SET_EROR
  } from './actions'
  
  
  
  const initialState = {
    selectNoteId: false,
    selectedGroup: 'All',
    showCeateNoteForm: false,
    showEditNoteForm: false,
    authError: '',
    user: {
      id: 5,
      name: 'Baga',
      avatar: 'https://c4.wallpaperflare.com/wallpaper/40/881/286/hoodie-anime-girl-wallpaper-preview.jpg',
      isLogin: false
    },
    groups: [],
    notes: []
  }
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_NOTES:
        return {
          ...state,
          notes: [...action.payload]
        }

      case CREATE_NOTE:
        // let newNotes = [...state.notes]
        // let newNote = {
        //   id: +state.notes.length + 1,
        //   group: state.selectedGroup,
        //   title: action.payload.title,
        //   text: action.payload.text
        // }
        return {
          ...state,
          showCeateNoteForm: false,
          notes: [...state.notes, action.payload]
        }

      case GET_GROUP:
        return {
          ...state,
          groups: [...action.payload]
        }
  
      case CREATE_GROUP:
        // let newGroups = [...state.groups]
        // let newGroup = {
        //   id: +state.groups.length + 1,
        //   title: action.payload
        // }
        return {
          ...state,
          groups: [...state.groups, action.payload]
        }
  
      case SHOW_ALL_NOTES:
        return {
          ...state,
          selectNoteId: false,
          selectedGroup: 'All',
          showCeateNoteForm: false
        }
  
      case SHOW_CREATE_NOTE_FORM:
        return {
          ...state,
          showCeateNoteForm: true,
          selectedGroup: 'All'
        }
  
      case SELECT_ACTIVE_GROUP:
        return {
          ...state,
          selectedGroup: action.payload,
          selectNoteId: false
        }
  
      case SHOW_ACTIVE_GROUP:
        return {
          ...state,
          selectNoteId: false
        }
  
      case SHOW_EDIT_NOTE_FORM:
        return {
          ...state,
          showEditNoteForm: true
        }
  
      case SELECT_NOTE:
        return {
          ...state,
          selectNoteId: action.payload
        }
  
      case EDIT_SELECT_NOTE:
        let notes = [...state.notes]
        console.log(action.payload)
        notes.map(note => {
          if(note.id === state.selectNoteId) {
            note.title = action.payload.title
            note.text = action.payload.text
          }
          return note
        })
        return {
          ...state,
          notes: [...notes],
          showEditNoteForm: false
        }

      case SET_USER:
        return {
          ...state,
          user: {
            id: action.payload.id,
            name: action.payload.name,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/40/881/286/hoodie-anime-girl-wallpaper-preview.jpg',
            isLogin: true
          }
        }

      case LOGOUT:
        return {
          ...state,
          user: {
            isLogin: false
          }
        }

      case SET_EROR:
        return {
          ...state,
          authError: action.payload
        }
    
      default:
        return state
    }
  }