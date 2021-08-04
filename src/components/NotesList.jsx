/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authCheck, getAsyncGroup, getAsyncNotes } from '../store/asyncActions'
import NotesItem from './NotesItem'
import './styles/NotesList.scss'

const NotesList = ({ search }) => {
  const dispatch = useDispatch()
  const { notes, selectedGroup } = useSelector((state) => state)
  const query = new URLSearchParams(useLocation().search)

  useEffect(() => {
    // if (notes.length === 0) {
    //   dispatch(authCheck())
    //   dispatch(getAsyncGroup())
    //   dispatch(getAsyncNotes())
    // }
  }, [])

  let filteredNotes
  if (search) {
    filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(query.get('term')) || note.text.toLowerCase().includes(query.get('term')))
  } else {
    filteredNotes = notes.filter((item) => (selectedGroup !== 'All' && selectedGroup === item.group_id ? item : selectedGroup === 'All' ? item : null))
  }

  return filteredNotes.map((note) => <NotesItem key={note.id} data={note} />)
}

export default NotesList

// /login (Authorization page)
// /registration  (Registration page)
// / (Home page, list of notes, search input)
// /note/create (Creating a new note)
// /note/edit/:id (Editing note by id)
// /search?term={searchTermOrTag} (Search page, where searchTermOrTag - note content or)
