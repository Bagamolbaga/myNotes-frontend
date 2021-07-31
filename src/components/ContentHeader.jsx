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
        {process.env.REACT_APP_VERCEL_ENV === 'production' && 'prod'}
        {process.env.REACT_APP_VERCEL_ENV === 'development' && 'devel'}
        {process.env.REACT_APP_VERCEL_ENV === 'preview' && 'prev'}

      </p>
    </Row>
  )
}

export default ContentHeader
