import React, { Fragment, useEffect } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from "react-bootstrap";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Courses || Madhurmoms";
    })

    return (
        <Fragment>
            <h1 className='my-3'>Add Course</h1>
            <Form className='my-5'>
                <FormGroup className='my-3'>
                    <FormLabel htmlFor="userId">Course ID</FormLabel>
                    <FormControl type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>

                <FormGroup className='my-3'>
                    <label htmlFor="title">Course Title</label>
                    <FormControl type="text" placeholder="Enter title here" name="title" id="title" />
                </FormGroup>

                <FormGroup className='my-3'>
                    <label htmlFor="desc">Course Description</label>
                    <FormControl as='textarea' placeholder="Enter desc here" name="desc" id="desc" style={{ height: 150 }} />
                </FormGroup>

                <Container>
                    <Button variant="success">Add Course</Button>
                    <Button variant="warning ml-3">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
