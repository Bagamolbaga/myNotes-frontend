import MarkdownPreview from '@uiw/react-markdown-preview'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {showEditForm} from '../store/actions'
import NoteEditForm from './NoteEditForm'

const NotesItemSelect = () => {
  // const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()
  const {selectNoteId, notes, showEditNoteForm} = useSelector(state => state)
  const note = notes.filter(note => note.id === selectNoteId)[0]
  return (
    
      !showEditNoteForm ? (
        <div className='notesItemSelect__container'>
          <div className='notesItemSelect__container-title-container'>
            <h2 className='notesItemSelect__container-title'>{note.title}</h2>
            <button
              className="notesItemSelect__container-title_btn-edit"
              onClick={() => dispatch(showEditForm())}
              >
                Edit
            </button>
          </div>
          <div className="notesItemSelect__container-md-container">
            <MarkdownPreview source={note.text} />
          </div>
        </div>
      ) 
      :
        <NoteEditForm note={note} />
      
  )
}

export default NotesItemSelect