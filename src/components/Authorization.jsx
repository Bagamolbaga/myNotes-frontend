/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registration, login } from '../store/asyncActions'
import './styles/Authorization.scss'

// eslint-disable-next-line react/prop-types
const Authorization = ({ isReg }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { authError, user } = useSelector((state) => state)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [file, setFile] = useState(undefined)
  const [fileUrl, setFileUrl] = useState(undefined)

  useEffect(() => {
    user.isLogin && history.push('/')
  }, [history, user.isLogin])

  const fileInputHandler = (e) => {
    const f = (e.target.files[0])
    const reader = new FileReader()

    reader.onloadend = () => {
      setFile(f)
      setFileUrl(reader.result)
    }
    reader.readAsDataURL(f)
  }

  const registrationHandler = () => {
    dispatch(registration(name, password, file))
  }

  return (
    !isReg ? (
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
          <Link to="/registration"><span className="authorization__container-span">Create account</span></Link>
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
            onClick={registrationHandler}
          >
            Registration
          </button>
          <p>
            You have account?
            <Link to="/login"><span className="authorization__container-span">Login</span></Link>
          </p>
        </Row>
      )
  )
}

export default Authorization
