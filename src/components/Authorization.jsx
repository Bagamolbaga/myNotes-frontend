import {useState} from 'react'
import {Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {registration, login} from '../store/asyncActions'

const Authorization = () => {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)

  return (
    isLogin ? (
      <Row className='authorization__container'>
        <h2 className="authorization__container-title">Authorization</h2>
        <label className="authorization__container-label" for="login">Login</label>
        <input className="authorization__container-input" type="text" id="login" />
        <label className="authorization__container-label" for="password">Password</label>
        <input className="authorization__container-input" type="password" id="password" />
        <button
          className="authorization__container-btn"
          onClick={() => dispatch(login('Baga', '$2b$05$3dTyZ5uBY87TRdXMW5KPw.jxmciudi8ghlHE1ry9udfEWiNjpkpsu'))}
        >
          Login
        </button>
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
        <button
          className="authorization__container-btn"
          onClick={() => dispatch(registration('lolka4', 'lolkapass'))}
        >
          Registration
        </button>
        <p>You have account? <span className="authorization__container-span" onClick={() => setIsLogin(true)}>Login</span></p>
      </Row>
    )
  )
}

export default Authorization