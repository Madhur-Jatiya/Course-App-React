import axios from "axios";
import React from "react";
import { base_url } from "../api/bootapi";
import { Card, Container, Button } from 'react-bootstrap';
import { toast } from "react-toastify";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            response => {
                toast.success("Course deleted successfully");
                update(id);
            },
            error => {
                toast.error("Something went wrong");
            }
        )
    }

    return (
        <Card className='text-center'>
            <Card.Body>
                <Card.Title className="font-weight-bold">{course.title}</Card.Title>
                <Card.Text>{course.duration}</Card.Text>
                <Container className="text-center">
                    <Button variant="danger" onClick={() => {
                        deleteCourse(course.id);
                    }} >Delete</Button>
                    <Button variant="warning ml-3">Update</Button>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default Course;
