import React, { useState, useEffect } from "react";
import Course from "./Course";
import myAxios from ".//../api/bootapi";

const Allcourses = () => {
  useEffect(() => {
    document.title = "All Courses || Madhurmoms";
    getAllCoursesFromServer();
  }, []);

  const getAllCoursesFromServer = () => {
    myAxios.get('/courses').then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const [courses, setCourses] = useState([]);

  return (
    <div>
      <h1>All Courses</h1>
      <p>List of Courses are as follows</p>
      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} />
        ))
      ) : (
        <p>No Courses are Available</p>
      )}
    </div>
  );
};

export default Allcourses;
