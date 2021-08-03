/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import MarkdownEditor from '@uiw/react-markdown-editor'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editAsyncNotes } from '../store/asyncActions'
import './styles/NoteCreateForm.scss'

const NoteEditForm = () => {
  const history = useHistory()
  const { noteId } = useParams()
  const dispatch = useDispatch()

  const { notes } = useSelector((state) => state)
  const note = notes.filter((item) => item.id === Number(noteId))[0]

  const [title, setTitle] = useState(note.title) || ''
  const [md, setMd] = useState(note.text) || ''

  const isDisableBtnSave = title.length && md.length

  const editHandler = () => {
    dispatch(editAsyncNotes({ title, text: md }))
    history.push(`/note/${noteId}`)
  }

  return (
    <div className="noteCreateForm__container">
      <input
        className="noteCreateForm__container-title_input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <MarkdownEditor
          width="100%"
          height="400px"
          value={md}
          onChange={(editor, data, value) => setMd(value)}
        />
      </div>
      <div className="noteCreateForm__container-btn_save-container">
        <Button
          disabled={!isDisableBtnSave}
          onClick={editHandler}
          className="noteCreateForm__container-btn_save"
        >
          EDIT
        </Button>
      </div>
    </div>
  )
}

export default NoteEditForm
