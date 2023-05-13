import React from "react";
import { Card, Container, Button } from 'react-bootstrap';

const Course = ({ course }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="font-weight-bold">{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Container className="text-center">
                    <Button variant="danger">Delete</Button>
                    <Button variant="warning ml-3">Update</Button>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default Course;
