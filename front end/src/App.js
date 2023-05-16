import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import AllCourses from './MyComponents/Allcourses';
import AddCourse from './MyComponents/AddCourse';
import Menus from './MyComponents/Menus';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="text-center">
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
        <ToastContainer /> {/* Add this line */}
      </Router>
    </div>
  );
}

export default App;
