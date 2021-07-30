import React, { useState } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createAsyncNote } from '../store/asyncActions'
import './styles/NoteCreateForm.scss'

const NoteCreateForm = () => {
  const dispatch = useDispatch()
  const { selectedGroup } = useSelector((state) => state)

  const [title, setTitle] = useState('')
  const [md, setMd] = useState('')

  const isDisableBtnSave = title.length && md.length && selectedGroup !== 'All'

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
          onClick={() => dispatch(createAsyncNote({
            title,
            text: md,
          }))}
          className="noteCreateForm__container-btn_save"
        >
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default NoteCreateForm
