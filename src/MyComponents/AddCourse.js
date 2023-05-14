import React, { Fragment } from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const AddCourse = () => {
    return (
        <Fragment >
            <h1 className='my-3'>Add Course</h1>
            <Form>
                <FormGroup>
                    <FormLabel htmlFor="userId">Course ID</FormLabel>
                    <FormControl type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="title">Course Title</label>
                    <FormControl type="text" placeholder="Enter title here" name="title" id="title" />
                </FormGroup>

                <FormGroup className='my-5'>
                    <label htmlFor="desc">Course Description</label>
                    <FormControl as='textarea' placeholder="Enter desc here" name="desc" id="desc" style={{ height: 150 }} />
                </FormGroup>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
