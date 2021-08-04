/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Switch, Route } from 'react-router'
import { Col } from 'react-bootstrap'
import ContentHeader from './ContentHeader'
import Search from './Search'
import BtnGoBack from './BtnGoBack'
import NotesList from './NotesList'
import NotesItemSelect from './NotesItemSelect'
import NoteCreateForm from './NoteCreateForm'
import Authorization from './Authorization'
import NoteEditForm from './NoteEditForm'
import './styles/NotesList.scss'

const MainContentWraper = () => (
  <Col className="block-green">
    <ContentHeader />
    <Search />
    <BtnGoBack />
    <div className="notesList__container">
      <Switch>
        <Route exact path="/">
          <NotesList />
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
        <Route path="/search">
          <NotesList search />
        </Route>
      </Switch>
    </div>
  </Col>
)

export default MainContentWraper
