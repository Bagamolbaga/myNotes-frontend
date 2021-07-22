import {useSelector} from 'react-redux'
import NotesItem from './NotesItem'
import NotesItemSelect from './NotesItemSelect'
import NoteCreateForm from './NoteCreateForm'
import Authorization from './Authorization'

const NotesList = () => {
  const {notes, selectNoteId, selectedGroup, showCeateNoteForm, user} = useSelector(state => state)

  return (
    <div className='notesList__container'>
      {
        user.isLogin ?
          showCeateNoteForm ? <NoteCreateForm /> : !selectNoteId ? notes.filter(item => selectedGroup !== 'All' && selectedGroup === item.group_id ? item : selectedGroup === 'All' ? item :  false ).map(note => <NotesItem key={note.id} data={note}/>) : <NotesItemSelect />
        : 
          <Authorization />
        
      }
      
    </div>
  )
}

export default NotesList