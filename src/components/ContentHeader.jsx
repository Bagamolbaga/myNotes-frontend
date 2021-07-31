import React from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './styles/ContentHeader.scss'

const ContentHeader = () => {
  const allNotes = useSelector((state) => state.notes).length
  return (
    <Row className="contentHeader__container">
      <h1 className="contentHeader__container-title">My Notes</h1>
      <p className="contentHeader__container-stats">
        All notes |
        {allNotes}
        {process.env.REACT_APP_API_URL_URL}

      </p>
    </Row>
  )
}

export default ContentHeader
