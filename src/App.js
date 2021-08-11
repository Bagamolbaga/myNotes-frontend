/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import SideBar from './components/SideBar'
import MainContentWraper from './components/MainContentWraper'
import { store } from './store/store'
import './styles.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container className="container App">
          <SideBar />
          <MainContentWraper />
        </Container>
      </Router>
    </Provider>
  )
}
