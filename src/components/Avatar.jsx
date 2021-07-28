/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/asyncActions'
import './styles/Avatar.scss'

const Avatar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)
  const [showLogout, setShowLogout] = useState(false)

  return (
    user.isLogin
      ? (
        <Row className="avatar__container">
          <div className="avatar__container__img_container">
            <img src={user.avatar} alt="avatar" />
          </div>
          <h2 onClick={() => setShowLogout(!showLogout)}>{user.name}</h2>
          <button
            type="button"
            className={`avatar__logout ${showLogout ? 'hidden' : ''}`}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </Row>
      )
      : (
        <Row className="avatar__container">
          <div className="avatar__container__img_container">
            <img src="https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="avatar" />
          </div>
          <h2>You not login</h2>
        </Row>
      )
  )
}

export default Avatar
