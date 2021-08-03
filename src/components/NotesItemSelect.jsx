/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import { authCheck, getAsyncGroup, getAsyncNotes } from '../store/asyncActions'
// import { showEditForm } from '../store/actions'
// import NoteEditForm from './NoteEditForm'
import './styles/NotesItemSelect.scss'

const NotesItemSelect = () => {
  const history = useHistory()
  const { noteId } = useParams()
  const dispatch = useDispatch()
  const { notes } = useSelector((state) => state)
  const note = notes.filter((item) => item.id === Number(noteId))[0]

  useEffect(() => {
    if (notes.length === 0) {
      dispatch(authCheck())
      dispatch(getAsyncGroup())
      dispatch(getAsyncNotes())
    }
  }, [])

  return (
    <div className="notesItemSelect__container">
      <div className="notesItemSelect__container-title-container">
        <h2 className="notesItemSelect__container-title">{notes.length && note.title}</h2>
        <button
          type="button"
          className="notesItemSelect__container-title_btn-edit"
            // onClick={() => dispatch(showEditForm())}
          onClick={() => history.push(`/note/edit/${note.id}`)}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
      <div className="notesItemSelect__container-md-container">
        <MarkdownPreview source={notes.length && note.text} />
      </div>
    </div>
  )
}

export default NotesItemSelect
