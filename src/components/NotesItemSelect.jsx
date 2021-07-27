import MarkdownPreview from '@uiw/react-markdown-preview'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useSelector, useDispatch} from 'react-redux'
import {showEditForm} from '../store/actions'
import NoteEditForm from './NoteEditForm'
import './styles/NotesItemSelect.scss'

const NotesItemSelect = () => {
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
                <FontAwesomeIcon icon={faPen}/>
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