import { ListGroup } from "react-bootstrap";
import React, { useState } from "react";

const Menus = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <ListGroup>
            <ListGroup.Item
                action
                href="/"
                active={activeItem === 0}
                onClick={() => handleItemClick(0)}
            >
                Home
            </ListGroup.Item>
            <ListGroup.Item
                action
                href="/add-course"
                active={activeItem === 1}
                onClick={() => handleItemClick(1)}
            >
                Add Course
            </ListGroup.Item>
            <ListGroup.Item
                action
                href="/view-courses"
                active={activeItem === 2}
                onClick={() => handleItemClick(2)}
            >
                View Courses
            </ListGroup.Item>
            <ListGroup.Item
                action
                href="#"
                active={activeItem === 3}
                onClick={() => handleItemClick(3)}
            >
                About
            </ListGroup.Item>
            <ListGroup.Item
                action
                href="#"
                active={activeItem === 4}
                onClick={() => handleItemClick(4)}
            >
                Contact
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Menus;
