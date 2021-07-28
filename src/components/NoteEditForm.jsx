/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editAsyncNotes } from '../store/asyncActions'
import './styles/NoteCreateForm.scss'

const NoteEditForm = ({ note }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState(note.title) || ''
  const [md, setMd] = useState(note.text) || ''

  const isDisableBtnSave = title.length && md.length

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
          // onClick={() => dispatch(editNote({title: title, text: md}))}
          onClick={() => dispatch(editAsyncNotes({ title, text: md }))}
          className="noteCreateForm__container-btn_save"
        >
          EDIT
        </Button>
      </div>
    </div>
  )
}

export default NoteEditForm
