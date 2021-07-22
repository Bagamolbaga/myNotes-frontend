import {useState} from 'react'
import {Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const Authorization = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    isLogin ? (
      <Row className='authorization__container'>
        <h2 className="authorization__container-title">Authorization</h2>
        <label className="authorization__container-label" for="login">Login</label>
        <input className="authorization__container-input" type="text" id="login" />
        <label className="authorization__container-label" for="password">Password</label>
        <input className="authorization__container-input" type="password" id="password" />
        <button className="authorization__container-btn">Login</button>
        <p>Dont have account? <span className="authorization__container-span" onClick={() => setIsLogin(false)}>Create account</span></p>
      </Row>
    )
    :
    (
      <Row className='authorization__container'>
        <h2 className="authorization__container-title">Authorization</h2>
        <label className="authorization__container-label" for="login">Login</label>
        <input className="authorization__container-input" type="text" id="login" />
        <label className="authorization__container-label" for="password">Password</label>
        <input className="authorization__container-input" type="password" id="password" />
        <button className="authorization__container-btn">Registration</button>
        <p>You have account? <span className="authorization__container-span" onClick={() => setIsLogin(true)}>Login</span></p>
      </Row>
    )
  )
}

export default Authorization