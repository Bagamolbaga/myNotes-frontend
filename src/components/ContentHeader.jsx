import { Row } from 'react-bootstrap'
import {useSelector} from 'react-redux'

const ContentHeader = () => {
  const allNotes = useSelector(state => state.notes)
  return (
    <Row className='contentHeader__container'>
      <h1 className='contentHeader__container-title'>My Notes</h1>
      <p className='contentHeader__container-stats'>All notes | {allNotes.length}</p>
    </Row>
  )
}

export default ContentHeader