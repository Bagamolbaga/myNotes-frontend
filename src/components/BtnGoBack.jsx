import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { goBack } from '../store/actions'

const BtnGoBack = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user, selectNoteId, showCeateNoteForm } = useSelector((state) => state)

  const goBackHandler = () => {
    dispatch(goBack())
    history.push('/')
  }

  return (
    <>
      { user.isLogin && (selectNoteId !== false || showCeateNoteForm)
            && (
            <button
              type="button"
              className="notesList__back"
              onClick={goBackHandler}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            )}
    </>
  )
}

export default BtnGoBack
