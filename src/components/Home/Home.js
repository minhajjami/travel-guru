import React, { useState } from 'react';
import { CardDeck, Col, Row } from 'react-bootstrap';
import places from '../../fakeData/places';
import Destination from '../Destionation/Destination';

const Home = () => {
    let firstThreePlaces = places.slice(0, 3);
    const [destinations, setDestinations] = useState(firstThreePlaces);
    return (
        <Row className='mb-5'>
            <Col md={4}>
                <div className='p-5 ml-3'>
                    <h1>COX'S BAZAR</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh</p>
                </div>
            </Col>
            <Col md={6}>
                <CardDeck>
                    {
                        destinations.map(destination => <Destination destination={destination}></Destination>)
                    }
                </CardDeck>
            </Col>
        </Row>

    );
};

export default Home;