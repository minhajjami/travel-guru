import React, { useState } from 'react';
import { Button, Jumbotron, Row } from 'react-bootstrap';
import places from '../../fakeData/places';
import Destination from '../Destionation/Destination';

const Home = () => {
    let firstThreePlaces = places.slice(0, 3);
    const [destinations, setDestinations] = useState(firstThreePlaces);
    return (
        <div className="home-container">
            <div className="slider-container">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </div>
            <div className="cart-container">
                <Row class="row-course">
                    {
                        destinations.map(destination => <Destination destination={destination}></Destination>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;