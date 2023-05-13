import React from "react";
import { Jumbotron, Button } from 'bootstrap-4-react';
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <Jumbotron className="text-center">
                <h1 className="display-3">JAVA</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, culpa eum rerum atque accusantium neque cumque repellendus quibusdam tenetur, repudiandae corrupti maxime incidunt quam deleniti obcaecati pariatur? Aut, facilis? Libero.</p>
                <Container>
                    <Button color="primary" outline >Start Using</Button>
                </Container >
            </Jumbotron >
        </div>
    )
}
export default Home;