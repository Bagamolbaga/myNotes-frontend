/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import MarkdownPreview from '@uiw/react-markdown-preview'
import { selectNote } from '../store/actions'
import './styles/NotesItem.scss'

const NotesItem = ({ data }) => {
  const dispatch = useDispatch()

  return (
    <div role="button" tabIndex="0" className="notesItem__container" onClick={() => dispatch(selectNote(data.id))}>
      <div className="notesItem__container-title">
        <h4>{data.title}</h4>
      </div>
      <div className="notesItem__container-MD_container">
        <MarkdownPreview source={data.text} />
      </div>
    </div>
  )
}

export default NotesItem
