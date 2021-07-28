/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registration, login } from '../store/asyncActions'
import './styles/Authorization.scss'

const Authorization = () => {
  const dispatch = useDispatch()
  const { authError } = useSelector((state) => state)
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    isLogin ? (
      <Row className="authorization__container">
        <h2 className="authorization__container-title">Authorization</h2>
        <label className="authorization__container-label" htmlFor="login">Login</label>
        <input
          className="authorization__container-input"
          type="text"
          id="login"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="authorization__container-label" htmlFor="password">Password</label>
        <input
          className="authorization__container-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="authorization__container-label-error" htmlFor="password">{authError}</p>
        <button
          type="button"
          className="authorization__container-btn"
          onClick={() => dispatch(login(name, password))}
        >
          Login
        </button>
        <p>
          Dont have account?
          <span className="authorization__container-span" onClick={() => setIsLogin(false)}>Create account</span>
        </p>
      </Row>
    )
      : (
        <Row className="authorization__container">
          <h2 className="authorization__container-title">Authorization</h2>
          <label className="authorization__container-label" htmlFor="login">Login</label>
          <input
            className="authorization__container-input"
            type="text"
            id="login"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="authorization__container-label" htmlFor="password">Password</label>
          <input
            className="authorization__container-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="authorization__container-label-error" htmlFor="password">{authError}</p>
          <button
            type="button"
            className="authorization__container-btn"
            onClick={() => dispatch(registration(name, password))}
          >
            Registration
          </button>
          <p>
            You have account?
            <span className="authorization__container-span" onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </Row>
      )
  )
}

export default Authorization
