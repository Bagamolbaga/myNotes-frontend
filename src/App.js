import { Container } from 'react-bootstrap'
import SideBar from './components/SideBar'
import MainContentWraper from './components/MainContentWraper'

import {Provider} from 'react-redux'
import {store} from './store/store'

//import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.scss";

export default function App() {
  return (
    <Provider store={store}>
      <Container className='container'>
        <SideBar />
        <MainContentWraper />
      </Container>
    </Provider>
  );
}
