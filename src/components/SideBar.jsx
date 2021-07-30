import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Col } from 'react-bootstrap'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  getAsyncGroup,
  getAsyncNotes,
  createAsyncGroup,
  authCheck,
} from '../store/asyncActions'
import {
  showAllNote,
  showCreateNoteForm,
  selectActiveGroup,
} from '../store/actions'
import Avatar from './Avatar'
import './styles/SideBar.scss'

const SideBar = () => {
  const [showAddGroupForm, setShowAddGroupForm] = useState(false)
  const [groupVal, setGroupVal] = useState('')

  const dispatch = useDispatch()
  const { groups, selectedGroup, user } = useSelector((state) => state)

  useEffect(() => {
    dispatch(authCheck())
  }, [dispatch])

  useEffect(() => {
    if (user.isLogin) {
      dispatch(getAsyncGroup())
      dispatch(getAsyncNotes())
    }
  }, [dispatch, user])

  const isDisabled = !groupVal.length

  const addNewGroup = () => {
    setShowAddGroupForm(false)
    setGroupVal('')
    dispatch(createAsyncGroup(groupVal))
  }

  return (
    <Col className="sideBar__container" md={3}>
      <Avatar />
      <Button className="sideBar__btn_notes" onClick={() => dispatch(showCreateNoteForm())}>
        <FontAwesomeIcon icon={faPlus} />
        add Note
      </Button>
      <button type="button" className={`sideBar__btn_notes sideBar__btn_notes-all ${selectedGroup === 'All' && 'sideBar__btn_notes-all-cheked'}`} onClick={() => dispatch(showAllNote())}>My Notes</button>
      {
        groups.map((g) => <button type="button" onClick={() => dispatch(selectActiveGroup(g.id))} key={g.id} className={selectedGroup === g.id ? 'sideBar__btn_group-cheked' : 'sideBar__btn_group'}>{g.title}</button>)
      }
      {
        showAddGroupForm
          ? (
            <>
              <input value={groupVal} onChange={(e) => setGroupVal(e.target.value)} type="text" className="sideBar__input_add" />
              <button type="button" disabled={isDisabled} onClick={addNewGroup} className="sideBar__btn_group_add">ADD</button>
              <button type="button" onClick={() => setShowAddGroupForm(false)} className="sideBar__btn_group_add sideBar__btn_group_add-back">back</button>
            </>
          )
          : <button type="button" onClick={() => setShowAddGroupForm(true)} className="sideBar__btn_group">Add Group</button>
      }

    </Col>
  )
}

export default SideBar
