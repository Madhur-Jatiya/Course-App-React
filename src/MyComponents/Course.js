import React from "react";
import { Card, Container, Button } from 'react-bootstrap';

const Course = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="font-weight-bold">Java Course</Card.Title>
        <Card.Text>
          This is the description of the Java course.
        </Card.Text>
        <Container className="text-center">
          <Button variant="danger">Delete</Button>
          <Button variant="warning">Update</Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Course;
