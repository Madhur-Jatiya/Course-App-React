import React, { useState, useEffect } from "react";
import Course from "./Course";

const Allcourses = () => {
  useEffect(() => {
    document.title = "All Courses || Madhurmoms";
  });

  const [courses, setCourses] = useState([
    { id: 1, title: "React", description: "Front End framework" },
    { id: 2, title: "Java", description: "Back End framework" },
    { id: 3, title: "Angular", description: "Front End framework" },
    { id: 4, title: "Vue", description: "Front End framework" },
    { id: 5, title: "Node", description: "Back End framework" },
    { id: 6, title: "Express", description: "Back End framework" },
    { id: 7, title: "MongoDB", description: "Database" },
  ]);

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
