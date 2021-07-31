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

  const [file, setFile] = useState(undefined)
  const [fileUrl, setFileUrl] = useState(undefined)

  const fileInputHandler = (e) => {
    const f = (e.target.files[0])
    const reader = new FileReader()

    reader.onloadend = () => {
      setFile(f)
      setFileUrl(reader.result)
    }
    reader.readAsDataURL(f)
  }

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
          <label className="authorization__container-label" htmlFor="password">Avatar</label>
          <input
            className="authorization__container-input"
            type="file"
            id="avatar"
            onChange={fileInputHandler}
          />
          {fileUrl ? (
            <div className="authorization__container-avatar">
              <img src={fileUrl} alt="avatar-preview" />
            </div>
          ) : (<p>Please select an Image for Preview</p>)}
          <p className="authorization__container-label-error" htmlFor="password">{authError}</p>
          <button
            type="button"
            className="authorization__container-btn"
            onClick={() => dispatch(registration(name, password, file))}
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
