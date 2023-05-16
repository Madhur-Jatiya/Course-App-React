import React, { useState, useEffect } from "react";
import Course from "./Course";
import myAxios from "../api/bootapi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses || Madhurmoms";
    getAllCoursesFromServer();
  }, []);

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

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses:</p>
      {courses.length > 0 ? (
        courses.map((item) => <Course key={item.id} course={item} />)
      ) : (
        <p>No Courses Available</p>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllCourses;
