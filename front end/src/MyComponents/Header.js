import React from "react";
import { Card } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Card className="my-3 bg-warning">
        <Card.Body>
          <h1 className="text-center my-3">Welcome to Courses Application</h1>
        </Card.Body>
      </Card>
    </div>
  );
}
