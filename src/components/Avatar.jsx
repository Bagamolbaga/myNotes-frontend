import {Row} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const Avatar = () => {
  const {user} = useSelector(state => state)

  return (
    user.isLogin ? 
    (
      <Row className='sideBar__avatar_container'>
        <div className='sideBar__img_container'>
          <img src={user.avatar} alt="avatar" />
        </div>
        <h2>{user.name}</h2>
      </Row>
    ) 
      : 
    (
      <Row className='sideBar__avatar_container'>
        <div className='sideBar__img_container'>
          <img src='https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-transparent-hd-png-download.png' alt="avatar" />
        </div>
        <h2>You not login</h2>
      </Row>
    )
  )
}

export default Avatar