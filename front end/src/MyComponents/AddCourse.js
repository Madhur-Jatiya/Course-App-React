import axios from "axios";
import { base_url } from "../api/bootapi";
import React, { Fragment, useEffect, useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Courses || Madhurmoms";
    }, [])

    const [course, setCourses] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            }
        )
    }

    return (
        <Fragment>
            <h1 className='my-3'>Add Course</h1>
            <Form className='my-5' onSubmit={handleForm}>
                <FormGroup className='my-3'>
                    <FormLabel htmlFor="userId">Course ID</FormLabel>
                    <FormControl type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e) => {
                        setCourses({ ...course, id: e.target.value });
                    }} />
                </FormGroup>

                <FormGroup className='my-3'>
                    <label htmlFor="title">Course Title</label>
                    <FormControl type="text" placeholder="Enter title here" name="title" id="title" onChange={(e) => {
                        setCourses({ ...course, title: e.target.value });
                    }} />
                </FormGroup>

                <FormGroup className='my-3'>
                    <label htmlFor="duration">Course Duration</label>
                    <FormControl
                        as='textarea'
                        placeholder="Enter duration here"
                        name="duration"
                        id="duration"
                        style={{ height: 150 }}
                        onChange={(e) => {
                            setCourses({ ...course, duration: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container>
                    <Button type="submit" variant="success">Add Course</Button>
                    <Button variant="warning ml-3" type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;
