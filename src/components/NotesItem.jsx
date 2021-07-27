import {selectNote} from '../store/actions'
import {useDispatch} from 'react-redux'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './styles/NotesItem.scss'

const NotesItem = ({data}) => {
  const dispatch = useDispatch()

  return (
    <div className='notesItem__container' onClick={() => dispatch(selectNote(data.id))}>
      <div className='notesItem__container-title'>
        <h4>{data.title}</h4>
      </div>
      <div className='notesItem__container-MD_container'>
        <MarkdownPreview source={data.text} />
      </div>
    </div>
  )
}

export default NotesItem