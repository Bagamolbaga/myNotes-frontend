/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux'
import SideBar from './components/SideBar'
import MainContentWraper from './components/MainContentWraper'
import { store } from './store/store'
import './styles.scss'

export default function App() {
  return (
    <Provider store={store}>
      <Container className="container App">
        <SideBar />
        <MainContentWraper />
      </Container>
    </Provider>
  )
}
