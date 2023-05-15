import React, { useEffect } from "react";
import { Jumbotron } from 'bootstrap-4-react';
import { Container, Button } from "react-bootstrap";

const Home = () => {
    useEffect(() => {
        document.title = "Home || Madhurmoms";
    },[]);
    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Madhurmoms</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, accusantium?</p>
                <Container>
                    <Button variant="outline-success">Start Using</Button>
                </Container >
            </Jumbotron >
        </div>
    )
}
export default Home;