import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import places from '../../fakeData/places';
import Destination from '../Destionation/Destination';

const Home = () => {
    let firstThreePlaces = places.slice(0, 3);
    const [destinations, setDestinations] = useState(firstThreePlaces);
    return (
        <div className="home-container">
            <div className="slider-container">
                <h1>This is slider</h1>
                <button>Book Now</button>
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