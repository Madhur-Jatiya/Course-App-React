import React, { useState, useEffect } from "react";
import Course from "./Course";
import myAxios from "../api/bootapi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { base_url } from "../api/bootapi";

const AllCourses = () => {

  useEffect(() => {
    document.title = "All Courses || Madhurmoms";
    getAllCoursesFromServer();
    // getAllCourse();
  }, []);



  const [courses, setCourses] = useState({});

  const getAllCoursesFromServer = () => {
    myAxios
      .get('/courses')
      .then((response) => {
        console.log(response.data);
        toast.success("Courses have been loaded");
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  // const getAllCourse = () => {
  //   axios.get(`${base_url}/courses`).then(
  //     (response) => {
  //       console.log(response.data);
  //       toast.success("Course loaded successfully");
  //       setCourses(response.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //       console.log("error");
  //       toast.error("Something went wrong");
  //     }
  //   )
  // }

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses:</p>
      {courses.length > 0 ? (
        courses.map((item) => <Course key={item.id} course={item} />)
      ) : (
        <p>No Courses Available</p>
      )}
    </div>
  );
};

export default AllCourses;
