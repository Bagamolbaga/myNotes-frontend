/* eslint-disable no-nested-ternary */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { goBack } from '../store/actions'
import NotesItem from './NotesItem'
import NotesItemSelect from './NotesItemSelect'
import NoteCreateForm from './NoteCreateForm'
import Authorization from './Authorization'
import './styles/NotesList.scss'

const NotesList = () => {
  const dispatch = useDispatch()
  const {
    notes, selectNoteId, selectedGroup, showCeateNoteForm, user,
  } = useSelector((state) => state)

  const filteredNotes = notes.filter((item) => (selectedGroup !== 'All' && selectedGroup === item.group_id ? item : selectedGroup === 'All' ? item : null))

  return (
    <>
      {user.isLogin && (selectNoteId !== false || showCeateNoteForm)
        && (
          <button
            type="button"
            className="notesList__back"
            onClick={() => dispatch(goBack())}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
      <div className="notesList__container">
        {
          user.isLogin
            ? showCeateNoteForm
              ? <NoteCreateForm />
              : !selectNoteId
                ? filteredNotes.map((note) => <NotesItem key={note.id} data={note} />)
                : <NotesItemSelect />
            : <Authorization />

        }
      </div>
    </>
  )
}

export default NotesList
