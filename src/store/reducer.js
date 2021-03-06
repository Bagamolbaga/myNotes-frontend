/* eslint-disable arrow-parens */
/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
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
  SET_EROR,
  GO_BACK,
  DELETE_NOTE,
} from './actions'

const initialState = {
  selectNoteId: false,
  selectedGroup: 'All',
  showCeateNoteForm: false,
  showEditNoteForm: false,
  authError: '',
  user: {
    isLogin: false,
  },
  groups: [],
  notes: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: [...action.payload],
      }
    case CREATE_NOTE:
      return {
        ...state,
        selectNoteId: action.payload.id,
        showCeateNoteForm: false,
        notes: [...state.notes, action.payload],
      }
    case GET_GROUP:
      return {
        ...state,
        groups: [...action.payload],
      }
    case CREATE_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      }
    case SHOW_ALL_NOTES:
      return {
        ...state,
        selectNoteId: false,
        selectedGroup: 'All',
        showCeateNoteForm: false,
        showEditNoteForm: false,
      }
    case SHOW_CREATE_NOTE_FORM:
      return {
        ...state,
        showCeateNoteForm: true,
        selectedGroup: 'All',
      }
    case SELECT_ACTIVE_GROUP:
      return {
        ...state,
        selectedGroup: action.payload,
        selectNoteId: false,
      }
    case SHOW_ACTIVE_GROUP:
      return {
        ...state,
        selectNoteId: false,
      }
    case SHOW_EDIT_NOTE_FORM:
      return {
        ...state,
        showEditNoteForm: true,
      }
    case SELECT_NOTE:
      return {
        ...state,
        selectNoteId: action.payload,
      }
    case EDIT_SELECT_NOTE:
      const notes = [...state.notes]
      notes.map((note) => {
        const item = note
        if (action.payload.toFixed) {
          if (item.id === action.payload.id) {
            item.fixed = true
          }
        } else if (action.payload.toUnFixed) {
          if (item.id === action.payload.id) {
            item.fixed = false
          }
        } else if (item.id === state.selectNoteId) {
          item.title = action.payload.title
          item.text = action.payload.text
          item.tags = action.payload.tags
        }
        return note
      })
      return {
        ...state,
        notes: [...notes],
        showEditNoteForm: false,
      }
    case DELETE_NOTE:
      const nots = state.notes.filter((note) => note.id !== action.payload)
      return {
        ...state,
        notes: [...nots],
      }
    case SET_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          avatar: action.payload.avatar,
          isLogin: true,
        },
      }
    case LOGOUT:
      return {
        ...state,
        user: {
          isLogin: false,
        },
      }
    case SET_EROR:
      return {
        ...state,
        authError: action.payload,
      }
    case GO_BACK:
      return {
        ...state,
        selectNoteId: false,
        selectedGroup: 'All',
        showCeateNoteForm: false,
        showEditNoteForm: false,
      }
    default:
      return state
  }
}
