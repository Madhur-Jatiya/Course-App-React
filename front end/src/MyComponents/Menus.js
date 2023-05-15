import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action"
                action
                to="/"
            >
                Home
            </Link>
            <Link className="list-group-item list-group-item-action"
                action
                to="/add-course"
            >
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action"
                action
                to="/view-courses"
            >
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action"
                action
                to="#"
            >
                About
            </Link>
            <Link className="list-group-item list-group-item-action"
                action
                to="#"
            >
                Contact
            </Link>
        </ListGroup>
    );
};

export default Menus;
