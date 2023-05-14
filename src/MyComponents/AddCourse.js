import React, { Fragment } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

const AddCourse = () => {
    return (
        <Fragment >
            <h1 >Add Course</h1>
            <Form>
                <FormGroup>
                    <FormLabel htmlFor="userId">Course ID</FormLabel>
                    <FormControl type="text" placeholder="Enter here" name="userId" id="userId" />
                </FormGroup>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
