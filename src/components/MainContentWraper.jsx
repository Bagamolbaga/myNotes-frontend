import React from 'react'
import { Col } from 'react-bootstrap'
import ContentHeader from './ContentHeader'
import Search from './Search'
import NotesList from './NotesList'

const MainContentWraper = () => (
  <Col className="block-green">
    <ContentHeader />
    <Search />
    <NotesList />
  </Col>
)

export default MainContentWraper
