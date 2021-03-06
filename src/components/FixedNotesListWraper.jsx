/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NotesList from './NotesList'

const FixedNotesListWraper = () => {
  const { notes } = useSelector((state) => state)

  const [showFixedList, setShowFixedList] = useState(true)

  const fixedNotesLength = notes.filter((note) => note.fixed).length

  const btnShowFixRotate = showFixedList ? 'rotateBtnShowList' : ''

  return (
    <>
      <div className="notesList__fixed_container-stats" onClick={() => setShowFixedList(!showFixedList)}>
        <p className="notesList__fixed_title">{`Fixed notes ${fixedNotesLength} / 3`}</p>
        <button
          type="button"
          className={`notesList__fixed_btn-showFixedList ${btnShowFixRotate}`}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      </div>
      { showFixedList && <NotesList isFixedList /> }
      { showFixedList && <div className="notesList__fixed_bottom-line" /> }
    </>
  )
}

export default FixedNotesListWraper
