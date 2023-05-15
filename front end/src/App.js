import './App.css';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Allcourse from './MyComponents/Allcourses';
import AddCourse from './MyComponents/AddCourse';
import { Container, Row, Col } from 'react-bootstrap';
import Menus from './MyComponents/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='text-center'>
      <Router>

        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-course" Component={AddCourse} exact />
                <Route path="/view-courses" Component={Allcourse} exact />
              </Routes>
            </Col>
          </Row>
        </Container>

      </Router>
    </div>
  );
}

export default App;
