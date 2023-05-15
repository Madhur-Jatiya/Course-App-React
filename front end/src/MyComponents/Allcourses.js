import React from "react";
import Course from "./Course";
import { useState } from "react";

const Allcourses = () => {
    const [courses, setCourses] = useState([
        { title: "React", description: "Fornt End framework" },
        { title: "Java", description: "Back End framework" },
        { title: "Angular", description: "Fornt End framework" },
        { title: "Vue", description: "Fornt End framework" },
        { title: "Node", description: "Fornt End framework" },
        { title: "Express", description: "Fornt End framework" },
        { title: "MongoDB", description: "Fornt End framework" },
    ])
    return (
        <div>
            <h1> All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course course={item} />
                )) : "No Courses are Available"
            }
        </div>
    );
}
export default Allcourses;