/* eslint-disable no-nested-ternary */
import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line no-unused-vars
import { goBack } from '../store/actions'
import NotesItem from './NotesItem'
import NotesItemSelect from './NotesItemSelect'
import NoteCreateForm from './NoteCreateForm'
import Authorization from './Authorization'
import NoteEditForm from './NoteEditForm'
import './styles/NotesList.scss'

const NotesList = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch()
  const {
    notes, selectNoteId, selectedGroup, showCeateNoteForm, user,
  } = useSelector((state) => state)

  const filteredNotes = notes.filter((item) => (selectedGroup !== 'All' && selectedGroup === item.group_id ? item : selectedGroup === 'All' ? item : null))

  const goBackHandler = () => {
    history.push('/')
    dispatch(goBack())
  }

  return (
    <>
      {user.isLogin && (selectNoteId !== false || showCeateNoteForm)
        && (
          <button
            type="button"
            className="notesList__back"
            onClick={goBackHandler}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
      {/* <div className="notesList__container">
        {
          user.isLogin
            ? showCeateNoteForm
              ? <NoteCreateForm />
              : !selectNoteId
                ? filteredNotes.map((note) => <NotesItem key={note.id} data={note} />)
                : <NotesItemSelect />
            : <Authorization />

        }
      </div> */}
      <div className="notesList__container">
        <Switch>
          <Route exact path="/">
            {filteredNotes.map((note) => <NotesItem key={note.id} data={note} />)}
          </Route>
          <Route path="/registration">
            <Authorization isReg />
          </Route>
          <Route path="/login">
            <Authorization />
          </Route>
          <Route path="/note/create">
            <NoteCreateForm />
          </Route>
          <Route exact path="/note/:noteId">
            <NotesItemSelect />
          </Route>
          <Route exact path="/note/edit/:noteId">
            <NoteEditForm />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default NotesList

// /login (Authorization page)
// /registration  (Registration page)
// / (Home page, list of notes, search input)
// /note/create (Creating a new note)
// /note/edit/:id (Editing note by id)
// /search?term={searchTermOrTag} (Search page, where searchTermOrTag - note content or)
