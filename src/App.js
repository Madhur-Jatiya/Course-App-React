import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Allcourse from './MyComponents/Allcourses';
import AddCourse from './MyComponents/AddCourse';
import { Container, Row, Col } from 'react-bootstrap';
import Menus from './MyComponents/Menus';

function App() {
  return (
    <div className='text-center'>
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
