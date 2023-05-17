import React, { useState, useEffect } from "react";
import Course from "./Course";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { base_url } from "../api/bootapi";

const AllCourses = () => {

  useEffect(() => {
    document.title = "All Courses || Madhurmoms";
  }, []);

  // function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("Course loaded successfully");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  //calling loading course function
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState({});

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses:</p>
      {courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />)
        : "No Courses Available"}
    </div>
  );
};

export default AllCourses;
