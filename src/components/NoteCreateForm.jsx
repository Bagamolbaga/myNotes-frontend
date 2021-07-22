import MarkdownEditor from '@uiw/react-markdown-editor'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {createNote} from '../store/actions'
import {createAsyncNote} from '../store/asyncActions'
import {useState} from 'react'

const NoteCreateForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [md, setMd] = useState('')

  const isDisableBtnSave = title.length && md.length

  return (
    <div className='noteCreateForm__container'>
      <input
        className='noteCreateForm__container-title_input'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
          <MarkdownEditor
            width='100%'
            height='400px'
            value={md}
            onChange={(editor, data, value) => setMd(value)}
          />
      </div>
      <div className='noteCreateForm__container-btn_save-container'>
        <Button
          disabled={!isDisableBtnSave}
          // onClick={() => dispatch(createNote({title: title, text: md}))}
          onClick={() => dispatch(createAsyncNote({
            title: 'test bd 2',
            text: 'test text bd 2',
            user_id: 3,
            group_id: 2
          }))}
          className='noteCreateForm__container-btn_save'
        >
          SAVE
        </Button>
      </div>
    </div>
  )
}

export default NoteCreateForm