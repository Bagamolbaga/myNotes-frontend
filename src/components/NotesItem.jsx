/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectNote } from '../store/actions'
import { asyncDeleteNote } from '../store/asyncActions'
import './styles/NotesItem.scss'

const NotesItem = ({ data }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const selectHandler = (id) => {
    history.push(`/note/${data.id}`)
    dispatch(selectNote(id))
  }

  const deleteHandler = (e, id) => {
    e.stopPropagation()
    dispatch(asyncDeleteNote(id))
  }

  return (
    <div role="button" tabIndex="0" className="notesItem__container" data-node-type="parent" onClick={() => selectHandler(data.id)}>
      <div>
        <div className="notesItem__container-title">
          <h4>{data.title}</h4>
        </div>
        <div className="notesItem__container-MD_container">
          <MarkdownPreview source={data.text} />
        </div>
      </div>
      <div className="notesItem__container__delete-container">
        <button
          type="button"
          className="notesItem__container__delete-btn"
          data-node-type="btn-del"
          onClick={(e) => deleteHandler(e, data.id)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  )
}

export default NotesItem
